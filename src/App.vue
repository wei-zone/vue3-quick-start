<template>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

onBeforeMount(() => {
    // @ts-ignore
    Pace.on('hide', function () {
        document.querySelector('.loading')?.setAttribute('style', 'display: none')
    })
})
</script>
