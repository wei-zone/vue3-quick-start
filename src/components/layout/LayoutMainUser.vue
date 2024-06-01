<script setup lang="ts">
defineOptions({
    name: 'LayoutMainUser'
})

import { LogoutOutlined, CaretDownOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const handleLogout = async () => {
    try {
        await userStore.userLogout()
    } catch (e) {
        console.log(e)
    }
}
</script>

<template>
    <a-dropdown>
        <div class="menu-item__user">
            <img src="../../assets/images/logo.png" alt="" class="user-avatar" />
            <div class="user-name">{{ userInfo.username }}</div>
            <div class="user-drop-icon">
                <caret-down-outlined />
            </div>
        </div>
        <template #overlay>
            <a-menu>
                <a-menu-item @click="handleLogout">
                    <logout-outlined style="font-size: 14px; margin-right: 4px" />
                    退出登录
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<style scoped lang="scss">
.menu-item__user {
    width: 100%;
    text-align: center;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    cursor: pointer;
    margin-left: 20px;
    .user-avatar {
        width: 40px;
        height: 40px;
        object-fit: contain;
        border-radius: 50%;
        background: #d0d8e4;
    }
    .user-name {
        color: #1a1a1a;
        font-size: 14px;
    }
}
</style>
