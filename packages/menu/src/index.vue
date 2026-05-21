<template>
  <el-menu
    :default-active="activePath"
    :default-openeds="mergedOpeneds"
    :mode="mode"
    :collapse="isCollapse"
    :unique-opened="uniqueOpened"
    :background-color="bgColor"
    :text-color="textColor"
    :active-text-color="activeColor"
    router
    class="au-menu"
  >
    <au-menu-item
      v-for="item in filteredMenuList"
      :key="item.path"
      :menu-item="item"
      :permissions="permissions"
      :permission-key="permissionKey"
    />
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AuMenuItem from './AuMenuItem.vue'
import type { AuMenuProps, MenuItem } from './type'

// 默认值
const props = withDefaults(defineProps<AuMenuProps>(), {
  mode: 'vertical',
  isCollapse: false,
  bgColor: '#ffffff',
  textColor: '#303133',
  activeColor: '#409eff',
  permissions: () => [],
  permissionKey: 'permission',
  uniqueOpened: true,
  defaultOpeneds: () => [],
  defaultActive: '',
  activeMenuKey: 'activeMenu',
  autoActiveFromRoute: true
})

const route = useRoute()

const hasPermission = (item: MenuItem) => {
  const permissionCode = item.meta?.[props.permissionKey as keyof typeof item.meta] as string | undefined
  if (!permissionCode) return true
  return props.permissions.includes(permissionCode)
}

const filterMenu = (list: MenuItem[]) => {
  return list
    .filter(item => !item.meta?.hidden && hasPermission(item))
    .map(item => {
      const children = item.children ? filterMenu(item.children) : undefined
      return { ...item, children }
    })
    .filter(item => !item.children || item.children.length > 0 || !item.children)
}

const filteredMenuList = computed(() => filterMenu(props.menuList))

const activePath = computed(() => {
  if (props.defaultActive) return props.defaultActive
  if (!props.autoActiveFromRoute) return ''
  const activeMenu = route.meta?.[props.activeMenuKey as keyof typeof route.meta] as string | undefined
  return activeMenu || route.path
})

const routeOpeneds = computed(() => {
  if (!route.matched.length) return []
  return route.matched.map(item => item.path).filter(Boolean)
})

const mergedOpeneds = computed(() => {
  return Array.from(new Set([...(props.defaultOpeneds || []), ...routeOpeneds.value]))
})
</script>

<style scoped>
.au-menu {
  height: 100%;
  border-right: none;
}
</style>