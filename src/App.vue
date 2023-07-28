<script setup>
import Main from './views/Main.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  width: 100%;
  height: 100%;
  /* border: 1px solid #000000; */
  background-color: #f1f2f6;
}
</style>
