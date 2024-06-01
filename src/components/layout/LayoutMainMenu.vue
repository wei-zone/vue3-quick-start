<script setup lang="ts">
defineOptions({
    name: 'LayoutMainMenu'
})
import { menus } from './config'
const route = useRoute()
const router = useRouter()

const selectedKeys = ref<string[]>([menus[0].key])

const handleGoto = (item: any) => {
    router.push({
        name: item.key
    })
}

watchEffect(() => {
    selectedKeys.value = [route.name as string]
})
</script>

<template>
    <div class="layout-menu">
        <a-menu
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
            :items="menus"
            @click="handleGoto"
        />
    </div>
</template>

<style lang="scss" scoped>
.layout-menu {
    width: 216px;
    display: flex;
    flex-direction: column;
    flex: 0 0 216px;
    max-width: 216px;
    min-width: 216px;
    flex-shrink: 0;
    height: 100%;
    background: none;
    padding: 0 10px 0 16px;
    overflow-y: auto;
    border-right: 1px solid #e5e6eb;
}
</style>
