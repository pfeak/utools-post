
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
    /* width: 100%; */
    height: 100%;
    margin-left: 5px;
    margin-right: 5px;

}

.terminal-input-tabs>.el-tabs__header {
    margin: 0px;
}

.terminal-input-tabs>.el-tabs__content {
    /* border-bottom: 15px; */
    height: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 67%;
    margin-top: 5px;
    color:#282c34;
    font-size: 14px;
    font-weight: 600;
}

.terminal-input-tabs>.el-tabs__item {
    color: #6b798e !important;
}
</style>