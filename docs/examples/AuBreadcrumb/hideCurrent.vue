<template>
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <!-- 隐藏前：完整显示所有层级 -->
    <div>
      <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">
        🔹 隐藏前（完整路径）：
      </p>
      <au-breadcrumb :auto="false" :items="items" />
    </div>

    <!-- 隐藏后：去掉最后一个当前层级 -->
    <div>
      <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">
        🔹 隐藏后（隐藏当前页）：
      </p>
      <au-breadcrumb :auto="false" :items="items" :hide-current="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { path: "/aura-ui/", label: "首页" },
  { path: "/aura-ui/components/", label: "组件" },
  { path: "/aura-ui/components/AuBreadcrumb/base.html", label: "面包屑" },
]
</script>