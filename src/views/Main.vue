<template>
    <el-row :gutter="20">
        <el-col :span="9">
            <div class="grid-content title">
                <EditText></EditText>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content">
                <el-text class="ip-text">IPv4</el-text>
                <el-input class="ip-input" maxlength="15" placeholder="请输入 IPv4 地址" v-model="valIP" />
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content">
                <el-text class="port-text">Port</el-text>
                <el-input class="port-input" maxlength="5" placeholder="请输入 Port 端口" v-model="valPort" />
            </div>
        </el-col>
        <el-col :span="3">
            <div class="grid-content" style="justify-content:end">
                <el-button class="manage-button" @click="drawer = true">管理</el-button>
                <el-drawer v-model="drawer" title="标题" :with-header="false">
                    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                        <li v-for="i in count" :key="i" class="infinite-list-item">
                            <el-row :gutter="20">
                                <el-col :span="24" style="margin-top: 7px;">
                                    <el-text>分组{{ i }}</el-text>
                                </el-col>
                                <el-col :span="14" style="margin-top: 7px;">
                                    <el-text>192.168.1.100</el-text>
                                </el-col>
                                <el-col :span="10" style="margin-top: 7px;">
                                    <el-text>8080</el-text>
                                </el-col>
                            </el-row>
                        </li>
                    </ul>
                </el-drawer>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="24">
            <div class="terminal-input">
                <TerminalInput></TerminalInput>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="3">
            <div class="grid-content">
                <el-button plain>TCP</el-button>
            </div>
        </el-col>
        <el-col :span="3">
            <div class="grid-content">
                <el-button plain>UDP</el-button>
            </div>
        </el-col>
        <el-col :span="3">
            <div class="grid-content">
                <el-button plain>TCP服务器</el-button>
            </div>
        </el-col>
        <el-col :span="3">
            <div class="grid-content">
                <el-button plain>UDP服务器</el-button>
            </div>
        </el-col>
        <el-col :span="3">
            <div class="grid-content">
                <el-button plain>清空日志</el-button>
            </div>
        </el-col>
        <el-col :span="9">
            <div class="grid-content continue">
                <el-text>持续发送</el-text>
                <el-tooltip placement="right" raw-content>
                    <template #content>每间隔(秒)发送一次数据, 不填不启用</template>
                    <el-input-number :v-model="continueInput" :min="1" :max="60" step-strictly
                        placeholder="秒"></el-input-number>
                </el-tooltip>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="24">
            <div class="terminal-output">
                <TerminalOutput></TerminalOutput>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
import EditText from '../components/EditText.vue';
import TerminalInput from '../components/TerminalInput.vue';

// 弹出窗口状态
const drawer = ref(false)

// 输入框状态
const continueInput = ref(0)

// 输入框信息
const valIP = ref("127.0.0.1")
const valPort = ref("8080")

// 管理列表数据模拟
const count = ref(0)
const load = () => {
    count.value += 2
}
</script>

<style scoped>
.el-row {
    margin-bottom: 4px;

    /* border: 1px solid red; */
}

.el-col {
    padding-left: 5px !important;
    padding-right: 5px !important;
    /* border: 1px solid gray; */
}

.grid-content {
    width: 100%;
    min-height: 34px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    display: flex;
    justify-content: start;
}

.ip-text {
    width: 20%;
    text-align: right;
}

.ip-input {
    width: 80%;
}

.port-text {
    width: 20%;
    text-align: right;
}

.port-input {
    width: 80%;
}

:deep(.el-input__wrapper) {
    box-shadow: 0 0 0 0px;
}

:deep(.el-input__wrapper:hover) {
    box-shadow: 0 0 0 0px;
}

:deep(.el-input__wrapper:focus) {
    box-shadow: 0 0 0 0px;
}

.manage-button {
    color: #282c34;
    width: 90% !important;
}

.el-button {
    width: 100%;
    border: 0;
    background-color: #6b798e;
    color: #ffffff;
}

.el-button:hover {
    background-color: #2f3542;
}

.el-button:active {
    transform: scale(0.95);
}

.el-text {
    padding-right: 5px;
}

.el-input-number {
    width: 70%;
}

.continue {
    justify-content: end;
}

.terminal-input {
    width: 100%;
    height: 31vh;
    background-color: white;
    border-radius: 10px;
}

.terminal-output {
    width: 100%;
    height: 45vh;
}

.infinite-list {
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    background: var(--el-color-primary-light-9);
    margin-bottom: 7px;
    margin-right: 7px;
    color: var(--el-color-primary);
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}
</style>

<style>
.el-input-number__decrease {
    background-color: #6b798e;
    color: #ffffff;
}

.el-input-number__increase {
    background-color: #6b798e;
    color: #ffffff;
}

.el-drawer__body {
    padding: 7px;
}
</style>