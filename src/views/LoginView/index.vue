<template>
    <div class="page login-page">
        <div class="page-inner">
            <a-form
                :model="formState"
                name="basic"
                :wrapper-col="{ span: 24 }"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
                <a-form-item
                    label=""
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" placeholder="username" />
                </a-form-item>

                <a-form-item
                    label=""
                    name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                    <a-input-password v-model:value="formState.password" placeholder="password" />
                </a-form-item>

                <a-form-item name="remember" :wrapper-col="{ span: 24 }">
                    <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>

                <a-form-item :wrapper-col="{ span: 24 }">
                    <a-button type="primary" html-type="submit" :loading="loading" block>Submit</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineOptions({
    name: 'LoginView'
})
import { reactive } from 'vue'
import { useUserStore } from '@/stores'
const userStore = useUserStore()
interface FormState {
    username: string
    password: string
    remember: boolean
}

const loading = ref<boolean>(false)
const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true
})
const onFinish = async (values: any) => {
    try {
        loading.value = true
        await userStore.userLogin({ ...values })
        loading.value = false
    } catch (e) {
        loading.value = false
        console.log(e)
    }
}

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
}
</script>

<style lang="scss" scoped>
.login-page {
    display: flex;
    align-items: center;
    justify-content: center;
    .page-inner {
        width: 480px;
        height: 320px;
        padding: 24px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0 3px 15px rgba(74, 143, 255, 0.32);
    }
}
</style>
