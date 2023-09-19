<template>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

onBeforeMount(() => {
    // @ts-ignore
    Pace.on('hide', function () {
        const $loading = document.querySelector('.loading')
        $loading?.setAttribute('style', 'display: none')
        $loading?.remove()
    })
})
</script>
