<template>
  <div style="width: 240px; border: 1px solid #ebeef5">
    <au-menu :menu-list="menuList" :default-openeds="['/system']" />
  </div>
</template>

<script setup lang="ts">
const menuList = [
  {
    path: "/dashboard",
    title: "工作台"
  },
  {
    path: "/system",
    title: "系统管理",
    children: [
      { path: "/system/user", title: "用户管理" },
      { path: "/system/role", title: "角色管理" }
    ]
  }
]
</script>
