<template>
  <div class="demo-container">
    <div class="demo-title">🔧 自定义渲染（插槽 + 交互切换）</div>

    <div class="btn-group">
      <el-button
        type="primary"
        :plain="!isCustom"
        @click="isCustom = false"
      >
        默认渲染
      </el-button>
      <el-button
        type="success"
        :plain="isCustom"
        @click="isCustom = true"
      >
        自定义插槽渲染
      </el-button>
    </div>

    <div class="breadcrumb-box">
      <au-breadcrumb
        :auto="false"
        :items="items"
        :clickable-last="true"
        :separator="isCustom ? '→' : '/'"
      >
        <template #item="{ item, index }">
          <span
            class="custom-item"
            :class="{ active: index === items.length - 1 }"
          >
            {{ item.label }}
          </span>
        </template>
      </au-breadcrumb>
    </div>

    <div class="tip">
      <span v-if="isCustom">✅ 已开启：自定义分隔符 + 自定义项 + 点击高亮交互</span>
      <span v-else>⚪️ 默认样式：/ 分隔符 + 普通文本</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCustom = ref(true)

const items = [
  { path: '/aura-ui/', label: '首页' },
  { path: '/aura-ui/components', label: '组件库' },
  { path: '/aura-ui/components/AuBreadcrumb', label: '面包屑' }
]
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
}
.btn-group {
  display: flex;
  gap: 12px;
}
.breadcrumb-box {
  padding: 12px 16px;
  background: #f9fafb;
  border-radius: 8px;
}
.custom-item {
  padding: 2px 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.custom-item.active {
  color: #409eff;
  font-weight: 600;
  background: #e8f3ff;
}
.tip {
  font-size: 13px;
  color: #666;
}
</style>