import { fileURLToPath, URL } from 'node:url'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import unocssPlugin from 'unocss/vite'

import dayjs from 'dayjs'
// 引入插件
import VitePluginMetaEnv from 'vite-plugin-meta-env'

// @ts-ignore
import postcsspxtoviewport from 'postcss-px-to-viewport'

// @ts-ignore
import { viteObfuscateFile } from 'vite-plugin-obfuscator'

// gzip压缩
// import { visualizer } from 'rollup-plugin-visualizer'
// import viteCompression from 'vite-plugin-compression'
// import viteImagemin from 'vite-plugin-imagemin'
const { name: title, version: APP_VERSION } = require('./package.json')

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv) => {
    const { mode } = configEnv
    const env = loadEnv(mode, process.cwd())
    console.log('mode --->', mode)
    console.log('\t')
    // 增加环境变量
    const metaEnv = {
        APP_VERSION,
        APP_NAME: title,
        APP_BUILD_TIME: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }

    return defineConfig({
        // 设置打包路径
        base: env.VITE_BASE_URL,
        // 插件
        plugins: [
            vue({
                script: {
                    defineModel: true
                }
            }),
            vueJsx(),
            unocssPlugin(),
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
            VitePluginMetaEnv(metaEnv, 'process.env'),
            // 代码混淆
            viteObfuscateFile({
                compact: true,
                controlFlowFlattening: false,
                controlFlowFlatteningThreshold: 0.75,
                deadCodeInjection: false,
                deadCodeInjectionThreshold: 0.4,
                debugProtection: false,
                debugProtectionInterval: 0,
                disableConsoleOutput: false,
                domainLock: [],
                domainLockRedirectUrl: 'about:blank',
                forceTransformStrings: [],
                identifierNamesCache: null,
                identifierNamesGenerator: 'hexadecimal',
                identifiersDictionary: [],
                identifiersPrefix: '',
                ignoreImports: false,
                inputFileName: '',
                log: false,
                numbersToExpressions: false,
                optionsPreset: 'default',
                renameGlobals: false,
                renameProperties: false,
                renamePropertiesMode: 'safe',
                reservedNames: [],
                reservedStrings: [],
                seed: 0,
                selfDefending: false,
                simplify: true,
                sourceMap: false,
                sourceMapBaseUrl: '',
                sourceMapFileName: '',
                sourceMapMode: 'separate',
                sourceMapSourcesMode: 'sources-content',
                splitStrings: false,
                splitStringsChunkLength: 10,
                stringArray: true,
                stringArrayCallsTransform: true,
                stringArrayCallsTransformThreshold: 0.5,
                stringArrayEncoding: [],
                stringArrayIndexesType: ['hexadecimal-number'],
                stringArrayIndexShift: true,
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 1,
                stringArrayWrappersChainedCalls: true,
                stringArrayWrappersParametersMaxCount: 2,
                stringArrayWrappersType: 'variable',
                stringArrayThreshold: 0.75,
                target: 'browser',
                transformObjectKeys: false,
                unicodeEscapeSequence: false
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
                output: {
                    chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
                    entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
                    assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
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
                    }
                },
                plugins: [
                    // build.rollupOptions.plugins[]
                    // viteCompression({
                    //     verbose: true, // 是否在控制台中输出压缩结果
                    //     disable: false,
                    //     threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
                    //     algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
                    //     ext: '.gz',
                    //     deleteOriginFile: true // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
                    // })
                    // 参数及配置：https://github.com/vbenjs/vite-plugin-imagemin/blob/main/README.zh_CN.md
                    // viteImagemin({
                    //     gifsicle: {
                    //         optimizationLevel: 7,
                    //         interlaced: false
                    //     },
                    //     optipng: {
                    //         optimizationLevel: 7
                    //     },
                    //     mozjpeg: {
                    //         quality: 20
                    //     },
                    //     pngquant: {
                    //         quality: [0.8, 0.9],
                    //         speed: 4
                    //     },
                    //     svgo: {
                    //         plugins: [
                    //             {
                    //                 name: 'removeViewBox'
                    //             },
                    //             {
                    //                 name: 'removeEmptyAttrs',
                    //                 active: false
                    //             }
                    //         ]
                    //     }
                    // })
                ]
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
            // TODO 构建包含@charset问题 https://github.com/vitejs/vite/issues/5833
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
                '/apis/': {
                    target: 'https://forguo.cn/api/',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/apis/, '')
                },
                '/amap/': {
                    target: 'https://restapi.amap.com/',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/amap/, '')
                }
            }
        }
    })
}
