<template>
    <div class="error-page">
        <a-result status="404" title="404" sub-title="对不起，您访问的页面不存在">
            <template #extra>
                <a-button type="primary" @click="$router.replace({ path: '/' })">回到首页</a-button>
            </template>
        </a-result>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'NotFound'
})
</script>

<style scoped>
.error-page {
    width: 100%;
    height: 100%;
    background: #fff;
}
</style>
