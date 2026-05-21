<template>
  <el-space wrap>
    <el-button type="primary" @click="open('left')">左侧弹出</el-button>
    <el-button type="primary" @click="open('right')">右侧弹出</el-button>
    <el-button type="primary" @click="open('top')">顶部弹出</el-button>
    <el-button type="primary" @click="open('bottom')">底部弹出</el-button>
  </el-space>

  <au-drawer
    :key="placement"
    v-model="visible"
    :placement="placement"
    :title="`${placementText} 弹出`"
    :size="computedSize"
  >
    <div class="content">
      当前弹出方向：<span style="color: #409eff; font-weight: 600">{{ placementText }}</span>
      <br />
      支持 left / right / top / bottom 四个方向
    </div>
  </au-drawer>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from "vue"

const visible = ref(false)
const placement = ref<"left" | "right" | "top" | "bottom">("right")

const placementText = computed(() => {
  const map = {
    left: "左侧",
    right: "右侧",
    top: "顶部",
    bottom: "底部"
  }
  return map[placement.value]
})

const computedSize = computed(() => {
  return placement.value === "top" || placement.value === "bottom" ? "30vh" : "40%"
})

const open = (p: typeof placement.value) => {
  visible.value = false
  nextTick(() => {
    placement.value = p
    visible.value = true
  })
}
</script>

<style scoped>
.content {
  padding: 20px 0;
  line-height: 1.8;
  font-size: 14px;
}
</style>