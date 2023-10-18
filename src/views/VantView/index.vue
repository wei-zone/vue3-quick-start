<template>
    <div class="vant a-page">
        <van-button type="primary" text="提交"></van-button>
    </div>
</template>
<script setup lang="ts">
import './index.scss'

onMounted(() => {
    console.log('onMounted')
})
defineOptions({
    name: 'TimerView',
    title: 'Timer'
})
</script>
