import { type ApiPromise, request } from '@/libs'

/**
 * 登录
 */
export const login = (data: { username: string; password: string }): ApiPromise<any> => {
    return request({
        url: '/v1/login',
        method: 'post',
        data
    })
}

/**
 * 退出登录
 */
export const logout = () => {
    return request({
        url: '/v1/login',
        method: 'post'
    })
}
