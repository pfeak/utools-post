<script setup>
import { onMounted, watch } from 'vue';
const props = defineProps({
    output: String
})

watch(() => props.output, () => {
    var height = document.getElementById("textarea-output").scrollHeight;
    document.getElementById("textarea-output").scrollTop = height;
})
</script>

<template>
    <textarea id="textarea-output" class="terminal-output-text">{{ output }}</textarea>
</template>

<style scoped>
.terminal-output-text {
    outline: none;
    width: 100%;
    height: 90%;
    padding: 7px;
    padding-bottom: 16px;
    border: 0px;
    background-color: transparent;
    color: white;
    font-size: 12px;
    opacity: 0.9;
}
</style>