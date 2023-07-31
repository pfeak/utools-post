<script setup>
import { ref } from 'vue';

const text = ref("名称（单击修改）")
const isEditing = ref(false)
const refInput = ref()


// 进入编辑
function startEditing() {
    isEditing.value = true
    refInput.value.focus()
}

// 停止编辑
function stopEditing() {
    isEditing.value = false
}
</script>

<template>
    <el-text v-show="!isEditing" @click="startEditing">{{ text }}</el-text>
    <el-input v-show="isEditing" class="text-edit-input" ref="refInput" v-model="text" maxlength="20" @keyup.enter="stopEditing" @blur="stopEditing" />
</template>

<style scoped>
.text-edit-input {
    width: 100%;
}
</style>