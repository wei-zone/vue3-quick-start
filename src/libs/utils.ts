/**
 * @Author: forguo
 * @Date: 2023/7/9 12:14
 * @Description: 工具库
 */

/**
 * @desc 动态加载远程的js
 * @param {*} src js链接
 */
export function loadRemoteJs(src: string) {
    return new Promise((resolve, reject) => {
        const scriptNode = document.createElement('script')
        scriptNode.setAttribute('type', 'text/javascript')
        scriptNode.setAttribute('charset', 'utf-8')
        scriptNode.setAttribute('src', src)
        document.body.appendChild(scriptNode)
        scriptNode.onload = res => {
            console.log(`${src} is loaded`)
            resolve(res)
        }
        scriptNode.onerror = e => {
            console.warn(`${src} is load failed`)
            reject(e)
        }
    })
}

/**
 * @desc 获取url参数
 * @param name
 */
export function getSearchParam(name: string) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return decodeURIComponent(r[2])
    }
    return null
}
