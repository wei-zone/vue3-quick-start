/**
 * @Author: forguo
 * @Date: 2023/7/25 19:16
 * @Description: index.ts
 */
import Request from '@/libs/request'
import type { AxiosRequestConfig } from 'axios'
import type { CreateAxiosDefaults } from 'axios'

export { default as log } from '@/libs/log'
export * from '@/libs/utils'

const instance = new Request({
    baseURL: '/apis'
} as CreateAxiosDefaults)

// 请求
export const request = (config: AxiosRequestConfig) => {
    return instance.request(config)
}

// 取消请求
export const cancelRequest = (url: string) => {
    instance.cancelRequest(url)
}
