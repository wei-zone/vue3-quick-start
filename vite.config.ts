import { fileURLToPath, URL } from 'node:url'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import dayjs from 'dayjs'

const { name: title, version: APP_VERSION } = require('./package.json')

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv) => {
    const { mode } = configEnv
    const env = loadEnv(mode, process.cwd())
    // 增加环境变量
    const metaEnv = {
        APP_VERSION,
        APP_NAME: title,
        APP_BUILD_TIME: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }

    // import.meta.env.key 环境变量生成
    const getMetaEnv = (env: Record<string, any>) => {
        const metaEnv: Record<string, any> = {}
        for (const key in env) {
            metaEnv[`import.meta.env.${key}`] = JSON.stringify(env[key])
        }
        return metaEnv
    }
    return defineConfig({
        // 设置打包路径
        base: env.VITE_BASE_URL,
        // 插件
        plugins: [
            vue(),
            vueJsx(),
            // 按需导入
            AutoImport({
                resolvers: [ElementPlusResolver()],
                // targets to transform
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/,
                    /\.vue\?vue/, // .vue
                    /\.md$/ // .md
                ],

                // global imports to register
                imports: ['vue', 'vue-router'],

                // Filepath to generate corresponding .d.ts file.
                // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
                // Set `false` to disable.
                dts: './auto-imports.d.ts',

                // Inject the imports at the end of other imports
                injectAtEnd: true,

                // Generate corresponding .eslintrc-auto-import.json file.
                // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
                eslintrc: {
                    enabled: true, // Default `false`
                    filepath: './.eslintrc-auto-import.json' // Default `./.eslintrc-auto-import.json`
                }
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            })
        ],
        // 别名
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // 打包配置
        build: {
            sourcemap: false,
            rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
                output: {
                    // entryFileNames: 'main-app.js',
                    manualChunks(id, { getModuleInfo }) {
                        // 打包依赖
                        if (id.includes('node_modules')) {
                            return 'vendor'
                        }
                        const reg = /(.*)\/src\/components\/(.*)/
                        if (reg.test(id)) {
                            // @ts-ignore
                            const importersLen = getModuleInfo(id).importers.length
                            // 被多处引用
                            if (importersLen > 1) {
                                return 'common'
                            }
                        }
                    },
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        },
        // 环境变量常量
        define: {
            ...getMetaEnv(metaEnv)
        },
        // 本地服务配置
        server: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            cors: true,
            open: false,
            port: 5000,
            host: true,
            proxy: {
                '/api': {
                    target: 'https://cloud-app.com.cn/',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, '')
                },
                '/amap': {
                    target: 'https://restapi.amap.com/',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/amap/, '')
                }
            }
        }
    })
}
