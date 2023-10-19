
<script lang="ts" setup>
import { ref } from "vue"

// 切换选项卡
const activeName = ref("send")

// 数据
const dataSend = ref("嗨，我是 TCP/UDP 发送的消息!")
const dataReceive = ref("你好，这里是 TCP/UDP 服务器!")

defineExpose({dataSend, dataReceive})
</script>

<template>
    <el-tabs v-model="activeName" class="terminal-input-tabs">
        <el-tab-pane label="发送" name="send">
            <el-input class="terminal-input" v-model="dataSend" rows="6" resize="none" type="textarea"
                placeholder="请自定义发送内容" />
        </el-tab-pane>
        <el-tab-pane label="接收" name="receive">
            <el-input class="terminal-input" v-model="dataReceive" rows="6" resize="none" type="textarea"
                placeholder="请自定义服务响应内容" />
        </el-tab-pane>
    </el-tabs>
</template>

<style>
.terminal-input-tabs {
    height: auto;
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
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    color: #282c34;
    font-size: 14px;
    font-weight: 600;
}

.terminal-input-tabs .el-tabs__item {
    height: 23px;
    padding: 10px;
    color: #6b798e !important;
}

.terminal-input-tabs .el-tabs__nav {
    height: 25px;
}

.el-textarea__inner {
    /* 取消自动换行 */
    white-space: nowrap;
    /* 如果内容过长可以显示水平滚动条 */
    overflow-x: auto;
    /* 样式 */
    padding-left: 0px;
    box-shadow: 0 0 0 0px;
}

.el-textarea__inner:hover {
    box-shadow: 0 0 0 0px;
}

.el-textarea__inner:focus {
    box-shadow: 0 0 0 0px;
}
</style>