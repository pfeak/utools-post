<script setup>
import { ref } from 'vue'
const textarea = ref('>> 日志输出')
</script>

<template>
    <div class="terminal-output-text">{{ textarea }}</div>
</template>

<style scoped>
.terminal-output-text {
    height: 100%;
    padding: 5px;
    border: 0px;
    color: white;
    background-color: #282c34;
    border-radius: 10px;
}
</style>