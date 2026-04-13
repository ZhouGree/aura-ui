<script setup lang="ts">
import { computed } from "vue"

const props = defineProps({
  source: {
    type: String,
    required: true
  }
})

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})
</script>

<template>
  <div class="example-source-wrapper">
    <div class="example-source language-vue" v-html="decoded" />
  </div>
</template>

<style scoped lang="scss">
.example-source-wrapper {
  // 你的莫兰迪背景
  background: var(--au-bg);
  border-top: 1px solid var(--au-border);
}

.language-vue {
  margin: 0 !important;
  border-radius: 0; // 保持直角
  // 代码块文字使用你的主文字色
  color: var(--au-text-primary);
}
</style>