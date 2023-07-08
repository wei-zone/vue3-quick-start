<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>
<script setup lang="ts">
import './index.scss'
</script>
<script lang="ts">
export default {
    name: 'AboutView',
    title: '关于'
}
</script>
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
