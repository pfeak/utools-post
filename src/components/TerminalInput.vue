
<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('send')

</script>

<template>
    <el-tabs v-model="activeName" class="terminal-input-tabs">
        <el-tab-pane label="接收" name="send">接收</el-tab-pane>
        <el-tab-pane label="发送" name="receive">发送</el-tab-pane>
    </el-tabs>
</template>

<style>
.terminal-input-tabs {
    height: 100%;
    margin-left: 5px;
    margin-right: 5px;
}

.terminal-input-tabs .el-tabs__header {
    margin: 0px;
    margin-left: 5px;
    margin-right: 5px;
}

.terminal-input-tabs .el-tabs__content {
    height: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 67%;
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    color:#282c34;
    font-size: 14px;
    font-weight: 600;
}

.terminal-input-tabs .el-tabs__item {
    height: 23px;
    color: #6b798e !important;
}

.terminal-input-tabs .el-tabs__nav {
    height: 25px;
}
</style>