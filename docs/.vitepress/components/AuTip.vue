<template>
  <ClientOnly>
    <el-tooltip raw-content effect="light" trigger="click">
      <template #content>
        <code class="docs-tip-code">
          {{ content }}
        </code>
      </template>
      <el-icon :size="16" class="docs-tip-icon"><Warning /></el-icon>
    </el-tooltip>
  </ClientOnly>
</template>

<script lang="ts" setup name="AuTip">
import { Warning } from "@element-plus/icons-vue"

defineProps({
  content: {
    type: String,
    default: ""
  }
})
</script>

<style lang="scss" scoped>
.docs-tip-code {
  /* 你的莫兰迪：主文字色 + 极浅灰蓝背景 */
  color: var(--au-text-primary);
  background-color: var(--au-primary-soft);
  border: 1px solid var(--au-border);
  padding: 2px 6px;
  border-radius: 4px;
}
.docs-tip-icon {
  vertical-align: middle;
  
  /* 你的莫兰迪主色：灰雾蓝 #6C7A89 */
  color: var(--au-primary);
  
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    /* hover 加深一点，保持莫兰迪风格 */
    color: #5a6877;
  }
}
</style>
