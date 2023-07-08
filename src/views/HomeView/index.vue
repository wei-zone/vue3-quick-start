<template>
    <div class="home">
        <TheWelcome />
    </div>
</template>
<script setup lang="ts">
import './index.scss'
import TheWelcome from '../../components/TheWelcome.vue'
</script>
<script lang="ts">
export default {
    name: 'HomeView',
    title: '首页'
}
</script>
