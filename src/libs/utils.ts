/**
 * @Author: forguo
 * @Date: 2023/7/9 12:14
 * @Description: 工具库
 */

import wx from 'weixin-js-sdk'
import { jssdk } from '@/apis/wechat'

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

// 获取微信参数
function getConfig(): any {
    // 注意： 如果你的vue项目，路由没有开启history 模式,也就是你的url上面包含“#”，这个时候要从后端正确获取签名，就需要去掉url上#后面的字符。（url去掉’#’hash部分，可用location.href.split('#')[0]）
    const url = encodeURIComponent(window.location.href.split('#')[0]) // 获取锚点之前的链接
    return jssdk({ url })
}

async function wxInit(shareData: IShareData) {
    const res = await getConfig()
    const data = res.data
    wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'
            // 'checkJsApi',
            // 'hideAllNonBaseMenuItem',
            // 'hideOptionMenu'
        ]
    })
    // wx.hideOptionMenu();
    wx.ready(function () {
        wx.onMenuShareAppMessage(shareData)
        wx.onMenuShareTimeline(shareData)
        wx.onMenuShareQQ(shareData)
        wx.onMenuShareWeibo(shareData)
        wx.onMenuShareQZone(shareData)
        // wx.hideOptionMenu();
        // wx.hideAllNonBaseMenuItem({
        //    success: function () {}
        // });
    })
    wx.error(function (res: string) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        console.log(res)
    })
}

// 分享数据
export interface IShareData {
    disabled: true
    title: string
    desc: string
    link: string
    imgUrl: string
}

export { wxInit, wx }
