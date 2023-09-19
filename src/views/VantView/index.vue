<template>
    <div class="vant w-page">
        <van-button type="primary" text="提交"></van-button>
    </div>
</template>
<script setup lang="ts">
import './index.scss'

onMounted(() => {
    console.log('onMounted')
})
</script>
<script lang="ts">
export default {
    name: 'VantView',
    title: 'VantView'
}
</script>
<style></style>
