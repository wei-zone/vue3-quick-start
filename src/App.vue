<template>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { IShareData } from '@/libs'
import { wxInit } from '@/libs'
const shareData: IShareData = {
    disabled: true,
    title: 'vue3',
    desc: 'vue3-quick-start',
    link: encodeURIComponent(window.location.href.split('#')[0]),
    imgUrl: 'https://forguo.cn/favicon.ico'
}
wxInit(shareData)
</script>
