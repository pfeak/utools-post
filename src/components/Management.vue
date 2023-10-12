
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

// 管理列表数据模拟
const load = () => {
    // console.log(`child-output-> docsList`, props.docList)
}

function select(doc) {
    emit("selectOne", doc)
    drawer.value = false
}
</script>

<template>
    <el-button class="manage-button" @click="drawer = true">管理</el-button>
    <el-drawer v-model="drawer" title="标题" :with-header="false" :show-close="false">
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="(doc, index) in docList" :key="index" class="infinite-list-item item-color">
                <el-row :gutter="20" @click="select(doc)" class="list-item">
                    <el-col :span="24" style="margin-top: 7px;">
                        <el-text class="item-color">{{ doc.name }}</el-text>
                    </el-col>
                    <el-col :span="14" style="margin-top: 7px;">
                        <el-text class="item-color">{{ doc.ipv4 }}</el-text>
                    </el-col>
                    <el-col :span="10" style="margin-top: 7px;">
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

.infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    margin-bottom: 7px;
    margin-right: 7px;
}

.list-item {
    width: 100%;
}

.item-color {
    background-color: #f1f2f6;
}

.item-color:hover {
    transform: scale(1.05);
}

.item-color:active {
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