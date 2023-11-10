<template>
    <div class="home a-page">
        <div class="home-inner" v-loading.fullscreen="loading" loading-tip="加载中...">
            <van-row justify="center">
                <van-form @submit="onSubmit">
                    <van-cell-group inset>
                        <van-field
                            v-model="username"
                            name="用户名"
                            label="用户名"
                            placeholder="用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]"
                        />
                        <van-field
                            v-model="email"
                            type="email"
                            name="email"
                            label="email"
                            placeholder="email"
                            :rules="[{ required: true, message: '请填写email' }]"
                        />
                    </van-cell-group>
                    <div style="margin: 16px">
                        <van-button round block type="primary" native-type="submit">提交</van-button>
                    </div>
                </van-form>
            </van-row>
        </div>
    </div>
</template>
<script setup lang="ts">
defineOptions({
    name: 'HomeView',
    title: '首页'
})
const username = ref('admin')
const email = ref('123456@qq.com')

let loading = ref<boolean>(false)

const onSubmit = values => {
    console.log('submit', values)
    loading.value = !loading.value
    setTimeout(() => {
        loading.value = !loading.value
    }, 1500)
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
