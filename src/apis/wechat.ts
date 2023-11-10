/**
 * @Author: forguo$
 * @Date: 2021/8/10 14:49
 * @Description: vote.js
 */
import { request } from '@/libs'

/**
 * 微信js sdk
 * @param data
 */
export const jssdk = function (data: object) {
    return request({
        method: 'get',
        url: `/v1/weapp/jssdk`,
        params: data
    })
}
