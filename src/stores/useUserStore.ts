import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login } from '@/services/user'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
export interface ILoginParams {
    username: string
    password: string
}

export const useUserStore = defineStore('userStore', () => {
    const router = useRouter()
    const token = ref<string>('')
    const userInfo = ref<any>({
        username: ''
    })
    const clearToken = () => {
        token.value = ''
    }

    const clearUserInfo = () => {
        userInfo.value = {
            username: ''
        }
    }
    const userLogin = async (params: ILoginParams) => {
        const { data } = await login(params)
        setToken(data.token)
        setUserInfo({
            ...data
        })
        await router.push({
            path: '/'
        })
        message.success('登录成功～')
    }

    const userLogout = async () => {
        console.log('userLogout ---> clearToken')
        localStorage.clear()
        clearToken()
        clearUserInfo()
        await router.push({
            path: '/login'
        })
    }

    const setToken = (value: string) => {
        // 保存token
        localStorage.setItem('token', value)
        token.value = value
    }
    const setUserInfo = (value: any) => {
        // 保存token
        localStorage.setItem('userInfo', JSON.stringify(value))
        userInfo.value = value
    }

    const initToken = () => {
        const value = localStorage.getItem('token')
        if (value) {
            token.value = value
        }
    }
    const initUserInfo = () => {
        try {
            const value = localStorage.getItem('userInfo')
            if (value) {
                userInfo.value = JSON.parse(value)
            }
        } catch (e) {
            userInfo.value = {
                username: ''
            }
        }
    }
    initToken()
    initUserInfo()

    return {
        token,
        userInfo,
        userLogout,
        userLogin
    }
})
