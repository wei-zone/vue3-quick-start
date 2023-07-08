import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dayjs from 'dayjs'

const { name: title, version: APP_VERSION } = require('./package.json')

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv) => {
    const { mode } = configEnv
    const env = loadEnv(mode, process.cwd())

    // 增加环境变量
    env.APP_VERSION = APP_VERSION
    env.APP_NAME = title
    env.APP_BUILD_TIME = dayjs().format('YYYY-MM-DD HH:mm:ss')

    return defineConfig({
        // 设置打包路径
        base: env.VITE_BASE_URL,
        // 插件
        plugins: [vue(), vueJsx()],
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
            'import.meta.env': JSON.stringify({
                ...env
            }),
            'process.env': JSON.stringify({
                ...env
            })
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
