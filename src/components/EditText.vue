<script setup>
import { ref, defineExpose } from "vue";

const text = ref("名称(单击修改)")
const isEditing = ref(false)
const refInput = ref()


// 进入编辑
function startEditing() {
    isEditing.value = true
    refInput.value.focus()
}

// 停止编辑
function stopEditing() {
    if (text.value == "") {
        text.value = "名称(单击修改)"
    }
    isEditing.value = false
}

defineExpose({text})
</script>

<template>
    <el-text class="text-show" v-show="!isEditing" @click="startEditing">{{ text }}</el-text>
    <el-input class="text-edit-input" v-show="isEditing" ref="refInput" v-model="text" maxlength="14"
        @keyup.enter="stopEditing" @blur="stopEditing" />
</template>

<style scoped>
.text-show {
    margin-left: 11px;
    margin-bottom: 3px;
}

.text-edit-input {
    width: 100%;
}
</style>