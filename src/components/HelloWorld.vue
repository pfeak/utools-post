<script setup>
import { ref, shallowRef } from "vue";
import Client from "./Client.vue";
import Server from "./Server.vue";

const defaultActive = ref("client")
const showPage = shallowRef(Client)

function handleSelect(key, keyPath) {
    switch (key) {
        case 'client':
            showPage.value = Client
            break
        case 'server':
            showPage.value = Server
            break
        default:
            break
    }
}
</script>

<template>
    <ElMenu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <ElMenuItem index="client">客户端</ElMenuItem>
        <ElMenuItem index="server">服务端</ElMenuItem>
    </ElMenu>

    <component :is="showPage"></component>
</template>

<style scoped>
.el-menu-demo {
    height: 30px;
}
</style>
