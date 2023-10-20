
<script setup>
import { ref } from "vue"

// 弹出窗口状态
const drawer = ref(false)

const emit = defineEmits(["selectOne"])

// 数据列表
const props = defineProps({
    docList: {
        type: Array,
        default: []
    }
})

function select(doc) {
    emit("selectOne", doc)
    drawer.value = false
}
</script>

<template>
    <el-button class="manage-button" @click="drawer = true">管理</el-button>
    <el-drawer v-model="drawer" title="标题" :with-header="false" :show-close="false">
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="(doc, index) in docList" :key="index" class="infinite-list-row">
                <el-row :gutter="20" @click="select(doc)" class="list-row">
                    <el-col :span="24" class="list-col">
                        <el-text class="item-color">{{ doc.name }}</el-text>
                    </el-col>
                    <el-col :span="14" class="list-col">
                        <el-text class="item-color">{{ doc.ipv4 }}</el-text>
                    </el-col>
                    <el-col :span="10" class="list-col">
                        <el-text class="item-color">{{ doc.port }}</el-text>
                    </el-col>
                </el-row>
            </li>
        </ul>
    </el-drawer>
</template>

<style>
.el-button {
    width: 100%;
    border: 0;
    background-color: #6b798e;
    color: #ffffff;
}

.el-button:hover {
    background-color: #2f3542;
    color: #ffffff;
}

.el-button:active {
    transform: scale(0.95);
}

.manage-button {
    width: 100%;
}

.add-button {
    width: 93%;
}

.infinite-list {
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    margin-bottom: 7px;
    background-color: #e4e8f0;
}

.list-row {
    width: 100%;
}

.list-col {
    margin-top: 3px;
    margin-bottom: 3px;
}

.infinite-list-row:hover {
    background-color: #6b798e;
    color: #f1f2f6;
}

.infinite-list-row:hover .item-color {
    color: #f1f2f6;
}

.infinite-list-row:active {
    transform: scale(0.95);
}
</style>

<style>
.el-drawer__header {
    margin-bottom: 0px;
    padding: 10px;
}

.el-drawer__header>:first-child {
    flex: none;
}
</style>