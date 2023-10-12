<template>
    <el-row :gutter="20">
        <el-col :span="4">
            <div class="grid-content title">
                <EditText ref="valName"></EditText>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content">
                <el-text class="ip-text">IPv4</el-text>
                <el-input class="ip-input" maxlength="15" placeholder="请输入 IPv4 地址" v-model="valIP" />
            </div>
        </el-col>
        <el-col :span="5">
            <div class="grid-content">
                <el-text class="port-text">Port</el-text>
                <el-input class="port-input" maxlength="5" placeholder="请输入 Port 端口" v-model="valPort" />
            </div>
        </el-col>
        <el-col :span="3">
            <div class="grid-content">
                <el-button @click="fresh(null)">新建</el-button>
            </div>
        </el-col>
        <el-col :span="3">
            <div class="grid-content">
                <el-button @click="save">保存</el-button>
            </div>
        </el-col>
        <el-col :span="3">
            <div class="grid-content" style="justify-content:end">
                <Management :doc-list="docList" @select-one="selectOne"></Management>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="24">
            <div class="terminal-input">
                <TerminalInput ref="valInput"></TerminalInput>
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
                    <template #content>间隔(秒)发送数据, 0 则单次发送</template>
                    <el-input-number v-model="continueInput" :min="0" :max="60" step-strictly
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
import { ref, onMounted } from 'vue'

// 全局
var nowUUID = getUUID()

// 输入信息
const valName = ref()
const valIP = ref("127.0.0.1")
const valPort = ref("8080")
const valInput = ref()

// 管理列表
const docList = ref()

// 输入框状态
const continueInput = ref(0)

onMounted(() => {
    loadList()
})

// 新建
function fresh(obj) {
    if (obj === null) {
        nowUUID = getUUID()
        valName.value.text = "名称(单击修改)"
        valIP.value = "127.0.0.1"
        valPort.value = "8080"
        continueInput.value = 0
        valInput.value.dataSend = "嗨，我是 TCP/UDP 发送的消息!"
        valInput.value.dataReceive = "你好，这里是 TCP/UDP 服务器!"
    } else {
        nowUUID = obj.uuid
        valName.value.text = obj.name
        valIP.value = obj.ipv4
        valPort.value = obj.port
        continueInput.value = obj.interval
        valInput.value.dataSend = obj.client
        valInput.value.dataReceive = obj.server
    }
}

// 保存
function save() {
    var tmpConfig = {
        "uuid": nowUUID,
        "name": valName.value.text,
        "ipv4": valIP.value,
        "port": valPort.value,
        "interval": continueInput.value,
        "client": valInput.value.dataSend,
        "server": valInput.value.dataReceive,
    }
    utools.dbStorage.setItem(`config/${nowUUID}`, tmpConfig)
    loadList()
}

// 读取管理列表
function loadList() {
    utools.db.promises.allDocs().then(docs => {
        docList.value = docs.map(item => item.value)
    })
}

// 选择对象
function selectOne(doc) {
    fresh(doc)
}

function getUUID() {
    if (typeof crypto === 'object') {
        if (typeof crypto.randomUUID === 'function') {
            return crypto.randomUUID();
        }
        if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
            const callback = (c) => {
                const num = Number(c);
                return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16);
            };
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, callback);
        }
    }
    let timestamp = new Date().getTime();
    let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let random = Math.random() * 16;
        if (timestamp > 0) {
            random = (timestamp + random) % 16 | 0;
            timestamp = Math.floor(timestamp / 16);
        } else {
            random = (perforNow + random) % 16 | 0;
            perforNow = Math.floor(perforNow / 16);
        }
        return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
    });
};
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
    width: 40%;
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