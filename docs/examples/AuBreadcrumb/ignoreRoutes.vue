<template>
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <!-- 过滤前：完整路径 -->
    <div>
      <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">
        🔹 过滤前（完整路径）：
      </p>
      <au-breadcrumb :auto="true" :show-home="true" home-label="文档首页" />
    </div>

    <!-- 过滤后：隐藏 components 层级 -->
    <div>
      <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">
        🔹 过滤后（隐藏「组件库」层级）：
      </p>
      <au-breadcrumb 
        :auto="true" 
        :show-home="true" 
        home-label="文档首页" 
        :ignore-routes="['components']" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
console.log("当前路由：", window.location.pathname)
</script>