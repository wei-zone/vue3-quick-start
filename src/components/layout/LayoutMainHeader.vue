<script setup lang="ts">
defineOptions({
    name: 'LayoutMainHeader'
})
import { LeftOutlined } from '@ant-design/icons-vue'
import LayoutMainUser from '@/components/layout/LayoutMainUser.vue'
const emits = defineEmits(['back'])
</script>

<template>
    <header class="layout-header">
        <div class="page-header__logo">
            <img src="../../assets/images/logo.png" alt="" />
        </div>
        <div class="page-header__menu">
            <LeftOutlined @click="emits('back')" />
            <LayoutMainUser />
        </div>
    </header>
</template>

<style scoped lang="scss">
.layout-header {
    width: 100%;
    display: flex;
    align-items: center;
    height: 64px;
    box-sizing: border-box;
    position: relative;
    background: none;
    color: inherit;
    border-bottom: 1px solid #e5e6eb;
    .page-header__logo {
        width: 216px;
        height: 100%;
        padding: 0 32px;
        display: flex;
        align-items: center;
        > img {
            width: 32px;
            height: 32px;
        }
    }
    .page-header__menu {
        position: absolute;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        .icon-back {
            width: 12px;
            height: 12px;
            cursor: pointer;
        }
    }
}
</style>
