/**
 *@description: 微信分享
 *@author: forguo
 *@date: 2020/10/31
 */
import wx from 'weixin-js-sdk'
import { jssdk } from '@/apis/wechat'

// 分享数据
export interface IShareData {
    disabled: true
    title: string
    desc: string
    link: string
    imgUrl: string
}

// 获取微信参数
function getConfig(): any {
    // 注意： 如果你的vue项目，路由没有开启history 模式,也就是你的url上面包含“#”，这个时候要从后端正确获取签名，就需要去掉url上#后面的字符。（url去掉’#’hash部分，可用location.href.split('#')[0]）
    const url = encodeURIComponent(window.location.href.split('#')[0]) // 获取锚点之前的链接
    return jssdk({ url })
}

// 微信SDK初始化
async function wxInit(shareData: IShareData) {
    const res = await getConfig()
    const data = res.data
    wx.config({
        debug: import.meta.env.MODE === 'development',
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [
            // old
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'

            // new
            // 'updateAppMessageShareData',
            // 'updateTimelineShareData'

            // common
            // 'checkJsApi',
            // 'hideAllNonBaseMenuItem',
            // 'hideOptionMenu'
        ],
        openTagList: ['wx-open-launch-weapp'] // 填入打开小程序的开放标签名
    })
    // wx.hideOptionMenu();
    wx.ready(function () {
        // old
        wx.onMenuShareAppMessage(shareData)
        wx.onMenuShareTimeline(shareData)
        wx.onMenuShareQQ(shareData)
        wx.onMenuShareWeibo(shareData)
        wx.onMenuShareQZone(shareData)

        // new
        // wx.updateAppMessageShareData(shareData)
        // wx.updateTimelineShareData(shareData)
        // common
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
