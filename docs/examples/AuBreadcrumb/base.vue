<template>
  <div class="demo-breadcrumb">
    <au-breadcrumb :auto="false" :items="items" @item-click="handleItemClick" />
  </div>
</template>

<script setup lang="ts">
const items = [
  { path: "/aura-ui/", label: "首页" },
  { path: "/aura-ui/components/", label: "组件" },
  { path: "/aura-ui/components/AuBreadcrumb/base.html", label: "面包屑" },
];

// 点击跳转逻辑
const handleItemClick = (item) => {
  if (item.path) {
    window.location.href = item.path; // 原生跳转，VitePress 环境可用
  }
};
</script>