<template>
  <div class="demo-box">
    <el-space>
      <el-button @click="openNormal">正常抽屉（可点遮罩关闭）</el-button>
      <el-button type="danger" @click="openNoMask">无遮罩 + 不可点关闭</el-button>
    </el-space>

    <au-drawer v-model="visible1" title="正常抽屉" />
    <au-drawer
      v-model="visible2"
      title="无法点击外部关闭"
      :show-mask="false"
      :mask-closable="false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible1 = ref(false)
const visible2 = ref(false)
const openNormal = () => visible1.value = true
const openNoMask = () => visible2.value = true
</script>

<style scoped>
.demo-box { padding: 10px 0; }
</style>