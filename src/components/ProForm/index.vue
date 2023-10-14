<!--
 * @Author:
 * @Date: 2023-09-28 10:56:15
 * @Description: ProForm
-->
<template>
    <div class="a-pro-form">
        <el-form
            :model="modelValue"
            name="basic"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
            <template v-for="{ type, key, label, ...restAttrs } in formList" :key="key">
                <el-form-item :name="key" :label="label">
                    <template v-if="type === 'input'">
                        <el-input type="text" v-bind="restAttrs" @change="handleChange(key, $event)" />
                    </template>
                    <template v-else-if="type === 'select'">
                        <el-select type="select" v-bind="restAttrs" @change="handleChange(key, $event)" />
                    </template>
                </el-form-item>
            </template>
            <el-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <el-button type="primary" html-type="submit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ProForm'
})

export interface IFormItem {
    type: string
    key: string
    label?: string
    options?: any[]
    [propName: string]: any
}
export interface IProps {
    formList?: IFormItem[]
    modelValue?: object
}

const props = defineProps<IProps>()

const emits = defineEmits({
    onFinish: (values: any) => values,
    onFinishFailed: (error: any) => error,
    ['update:modelValue']: (value: any) => value
})

const onFinish = (values: any) => {
    emits('onFinish', values)
}
const onFinishFailed = (error: any) => {
    emits('onFinishFailed', error)
}

const handleChange = (key: string, value: any) => {
    const val = value?.target ? value?.target?.value : value
    const form = {
        ...props.modelValue,
        [key]: val
    }
    console.log(form)
    emits('update:modelValue', form)
}
</script>

<style lang="scss">
@import './style/index';
</style>
