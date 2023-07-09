<template>
    <div class="element">
        <el-card header="This is an ElementPlus page">
            <el-button type="primary">ElementPlus</el-button>
        </el-card>
    </div>
</template>
<script setup lang="ts">
import './index.scss'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
onMounted(() => {
    ElMessage.success('ElementPlus page mounted')
})
</script>
<script lang="ts">
export default {
    name: 'ElementView',
    title: 'ElementPlus'
}
</script>
<style>
@media (min-width: 1024px) {
    .element {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
