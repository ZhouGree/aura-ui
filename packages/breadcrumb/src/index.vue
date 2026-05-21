<template>
  <el-breadcrumb class="au-breadcrumb" :separator="separatorText">
    <template v-if="$slots.separator" #separator>
      <slot name="separator" />
    </template>
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbList"
      :key="item.path + index"
      :to="getBreadcrumbTo(item, index)"
      :replace="replace"
      @click="handleItemClick(item)"
    >
      <slot name="item" :item="item" :index="index">
        {{ item.label }}
      </slot>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { AuBreadcrumbProps, BreadcrumbItem } from './type'

const props = withDefaults(defineProps<AuBreadcrumbProps>(), {
  auto: true,
  separator: '/',
  replace: false,
  hideCurrent: false,
  ignoreRoutes: () => [],
  customMetaKey: 'breadcrumb',
  showHome: false,
  homeLabel: '首页',
  homePath: '/',
  hideMetaKey: 'breadcrumbHidden',
  titleMetaKey: 'title',
  clickableLast: false
})

const emits = defineEmits(["item-click"])

// ===========================
// ✅ VitePress 兼容核心：不依赖 vue-router
// ===========================
const separatorText = computed(() => (typeof props.separator === "string" ? props.separator : "/"))

const breadcrumbList = computed(() => {
  // 1. 优先使用手动传入的 items
  if (props.items && props.items.length) {
    let finalList = [...props.items]
    
    // 隐藏当前页
    if (props.hideCurrent && finalList.length > 0) {
      finalList = finalList.slice(0, -1)
    }

    return finalList
  }

  // 2. 自动模式：VitePress 环境专用（纯原生路径解析）
  if (props.auto) {
    const list: BreadcrumbItem[] = []

    // 自动添加首页
    if (props.showHome) {
      list.push({
        name: "home",
        path: props.homePath,
        label: props.homeLabel
      })
    }

    try {
      // ===========================
      // ✅ VitePress 自动路由核心
      // ===========================
      const path = window.location.pathname
      const segments = path.split('/').filter(Boolean)

      const vitePressPathMap: Record<string, string> = {
        'aura-ui': '文档首页',
        'components': '组件库',
        'AuBreadcrumb': '面包屑组件',
        'AuInput': '输入框组件',
        'AuButton': '按钮组件',
        'AuTable': '表格组件',
        'AuForm': '表单组件',
      }

      let currentFullPath = ''
      segments.forEach(seg => {
        currentFullPath += '/' + seg
        const label = vitePressPathMap[seg] || seg

        // 过滤忽略路由
        if (props.ignoreRoutes.includes(seg) || props.ignoreRoutes.includes(currentFullPath)) {
          return
        }

        list.push({
          name: seg,
          path: currentFullPath,
          label: label.replace('.html', '')
        })
      })

    } catch (e) {}

    // 隐藏最后一项
    if (props.hideCurrent && list.length > 0) {
      return list.slice(0, -1)
    }

    return list
  }

  return []
})

const getBreadcrumbTo = (item: BreadcrumbItem, index: number) => {
  if (item.disabled) return undefined
  const isLast = index === breadcrumbList.value.length - 1
  if (isLast && !props.clickableLast) return undefined
  return item.to ?? { path: item.path }
}

const handleItemClick = (item: BreadcrumbItem) => {
  emits("item-click", item)
  // VitePress 跳转
  if (item.path) {
    window.location.href = item.path
  }
}
</script>

<style scoped>
.au-breadcrumb {
  padding: 8px 0;
  font-size: 14px;
}
</style>