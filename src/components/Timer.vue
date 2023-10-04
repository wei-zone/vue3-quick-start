<template>
    <van-card class="we-timer" :closable="false">现在是：{{ nowTime }}</van-card>
</template>

<script lang="ts" setup>
defineProps({
    countDown: {
        type: Number,
        default: 0
    }
})

defineEmits(['count-down'])
defineOptions({
    name: 'TimerView',
    title: 'Timer'
})
const nowTime = ref<string>('00:00:00')

const getNowTime = () => {
    const now = new Date()
    const h = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
    const m = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
    const s = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()
    nowTime.value = `${h}:${m}:${s}`
    window.requestAnimationFrame(getNowTime)
}

onMounted(() => {
    getNowTime()
})
</script>

<style lang="scss" scoped>
.we-timer {
    font-size: 13px;
    color: #000;
}
</style>
