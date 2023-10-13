<script setup>
defineProps({
    output: String
})

textarea.scrollTop = textarea.scrollHeight;
</script>

<template>
    <textarea class="terminal-output-text">{{ output }}</textarea>
</template>

<style scoped>
.terminal-output-text {
    outline: none;
    width: 100%;
    height: 98%;
    padding: 5px;
    padding-bottom: 0px;
    border: 0px;
    background-color: transparent;
    color: white;
    /* background-color: #282c34; */
    /* border-radius: 15px; */
    font-size: 12px;
    opacity: 0.9;
}
</style>