<template>
  <div class="demo">
    <!-- 关键：告诉用户这是自动生成的 -->
    <div class="demo-title">🟢 自动路由生成（根据当前页面地址自动生成）</div>
    
    <!-- 关键：显示当前页面路径 -->
    <div class="demo-desc">
      当前页面地址：{{ currentPath }}
    </div>

    <!-- 你的自动面包屑 -->
    <au-breadcrumb :show-home="true" home-label="文档首页" />
  </div>
</template>

<script setup>
const currentPath = window.location.pathname;
console.log("当前页面路由：", window.location.pathname);
</script>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.demo-title {
  font-size: 14px;
  color: #16a34a;
  font-weight: 600;
}
.demo-desc {
  font-size: 12px;
  color: #666;
  background: #f9fafb;
  padding: 6px 10px;
  border-radius: 4px;
}
</style>