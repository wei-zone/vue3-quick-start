/**
 * @Author: forguo
 * @Date: 2022/5/16 21:29
 * @Description: request.ts.js
 */

import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios'

export interface IResponse {
    code?: number
    message?: string
    time?: string | number
    data?: any
}

class Request {
    // axios实例
    instance: AxiosInstance
    // 用于存储控制器对象
    abortControllerMap: Map<string, AbortController>
    // 构造函数
    constructor(config?: CreateAxiosDefaults) {
        // 创建axios实例
        this.instance = axios.create(config)
        // 用于存储控制器对象
        this.abortControllerMap = new Map()
        // 设置拦截器
        this.setInterceptors(this.instance)
    }
    // 请求
    request(config: AxiosRequestConfig): Promise<IResponse> {
        return this.instance(config)
    }
    // 拦截器
    setInterceptors(request: AxiosInstance) {
        // 请求拦截器
        request.interceptors.request.use(config => {
            // toDo 也可以在这里做一个重复请求的拦截
            // https://github.com/axios/axios/tree/main#abortcontroller
            // 请求url为key
            const url = config.url || ''
            // 实例化控制器
            const controller = new AbortController()
            // 将控制器实例与请求绑定
            config.signal = controller.signal
            // 将控制器实例存储到Map中
            this.abortControllerMap.set(url, controller)
            // 设置请求头
            const token = localStorage.getItem('token')
            if (config && config.headers && token) {
                config.headers.set('token', token)
            }
            return config
        })
        // 响应拦截器
        request.interceptors.response.use(res => {
            const url = res.config.url || ''
            // 请求完成后，将控制器实例从Map中移除
            this.abortControllerMap.delete(url)
            if (axios.isCancel(res)) {
                console.log('Request canceled', res)
                return Promise.reject(res)
            }
            if (res.status === 200) {
                return Promise.resolve(res.data)
            }
            console.error(res)
            return Promise.reject(res)
        })
    }
    /**
     * 取消全部请求
     */
    cancelAllRequest() {
        for (const [, controller] of this.abortControllerMap) {
            // 取消请求
            controller.abort()
        }
        this.abortControllerMap.clear()
    }
    /**
     * 取消指定的请求
     * @param url 待取消的请求URL
     */
    cancelRequest(url: string | string[]) {
        const urlList = Array.isArray(url) ? url : [url]
        for (const _url of urlList) {
            // 取消请求
            this.abortControllerMap.get(_url)?.abort()
            this.abortControllerMap.delete(_url)
        }
    }
}

export default Request
