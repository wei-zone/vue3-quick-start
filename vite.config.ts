import { fileURLToPath, URL } from 'node:url'
import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import UnoCSS from 'unocss/vite'

// @ts-ignore
import postcsspxtoviewport from 'postcss-px-to-viewport'

import dayjs from 'dayjs'
// 引入插件
import VitePluginMetaEnv from 'vite-plugin-meta-env'

const { name: title, version: APP_VERSION } = require('./package.json')

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv) => {
    const { mode } = configEnv
    // 增加环境变量
    const metaEnv = {
        APP_VERSION,
        APP_NAME: title,
        APP_BUILD_TIME: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
    return defineConfig({
        // 设置打包路径
        base: mode === 'development' ? '/' : `/apps/${title}/`,
        // 插件
        plugins: [
            UnoCSS(),
            vue(),
            vueJsx(),
            // 按需导入
            AutoImport({
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
                resolvers: [VantResolver()]
            }),
            // 环境变量
            VitePluginMetaEnv(metaEnv, 'import.meta.env'),
            VitePluginMetaEnv(metaEnv, 'process.env')
        ],
        // 别名
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        css: {
            modules: {
                localsConvention: 'camelCase' // 默认只支持驼峰，修改为同时支持横线和驼峰
            },
            preprocessorOptions: {
                scss: {
                    charset: false
                },
                less: {
                    charset: false
                }
            },
            // charset: false,
            postcss: {
                plugins: [
                    postcsspxtoviewport({
                        unitToConvert: 'px', // 要转化的单位
                        viewportWidth: 750, // UI设计稿的宽度
                        unitPrecision: 6, // 转换后的精度，即小数点位数
                        propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                        viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
                        fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
                        selectorBlackList: ['van-'], // 指定不转换为视窗单位的类名，
                        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
                        replace: true, // 是否转换后直接更换属性值
                        exclude: [/node_modules\/vant/], // 设置忽略文件，用正则做目录名匹配
                        // exclude: [],
                        landscape: false // 是否处理横屏情况
                    })
                ]
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
                '/apis': {
                    target: 'https://cloud-app.com.cn/',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/apis/, '')
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
