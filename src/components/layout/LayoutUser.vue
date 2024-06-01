<template>
    <div class="user-page">
        <router-view />
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'LayoutUser'
})
</script>

<style lang="scss" scoped>
.user-page {
    width: 100%;
    height: 100vh;
}
</style>
