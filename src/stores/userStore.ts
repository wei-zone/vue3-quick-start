import { defineStore } from 'pinia'
import { ref } from 'vue'
import wx from 'weixin-js-sdk'
import { getSearchParam } from '@/libs'

export const useUserStore = defineStore('userStore', () => {
    const token = ref<string>('')

    const clearToken = () => {
        token.value = ''
        localStorage.clear()
    }

    const userLogout = () => {
        console.log('userLogout ---> clearToken')
        clearToken()
        // @ts-ignore
        wx?.miniProgram?.reLaunch({
            url: '/pages/index/index'
        })
    }

    const initToken = () => {
        // 获取url中的token
        token.value = getSearchParam('token') || ''
    }

    initToken()

    return {
        token,
        clearToken,
        userLogout
    }
})
