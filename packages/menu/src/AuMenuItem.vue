<template>
  <template v-if="!isHidden">
    <el-sub-menu v-if="hasChildren" :index="menuItem.path">
      <template #title>
        <el-icon v-if="menuItem.icon">
          <component :is="menuItem.icon" />
        </el-icon>
        <span>{{ menuItem.title }}</span>
      </template>

      <au-menu-item
        v-for="child in menuItem.children"
        :key="child.path"
        :menu-item="child"
        :permissions="permissions"
        :permission-key="permissionKey"
      />
    </el-sub-menu>

    <el-menu-item v-else :index="menuIndex" :disabled="menuItem.disabled" @click="handleItemClick">
      <el-icon v-if="menuItem.icon">
        <component :is="menuItem.icon" />
      </el-icon>
      <span>{{ menuItem.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MenuItem } from './type'

const props = defineProps<{
  menuItem: MenuItem
  permissions?: string[]
  permissionKey?: string
}>()

const hasChildren = computed(() => {
  return !!(props.menuItem.children && props.menuItem.children.length > 0)
})

const menuIndex = computed(() => {
  if (props.menuItem.external) {
    return `external:${props.menuItem.path}`
  }
  return props.menuItem.path
})

const isHidden = computed(() => {
  if (props.menuItem.meta?.hidden) return true
  const permissionField = props.permissionKey || 'permission'
  const permissionCode = props.menuItem.meta?.[permissionField as keyof typeof props.menuItem.meta] as
    | string
    | undefined
  if (!permissionCode) return false
  return !(props.permissions || []).includes(permissionCode)
})

const handleItemClick = () => {
  if (!props.menuItem.external) return
  window.open(props.menuItem.path, "_blank")
}
</script>