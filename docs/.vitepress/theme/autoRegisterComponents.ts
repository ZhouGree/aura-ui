import type { App, Component } from 'vue'
import { defineAsyncComponent } from 'vue'

// 懒加载 tabs 文件夹下的所有 .vue 文件
// 使用 import.meta.glob 的默认懒加载模式，按需加载组件
const tabsComponents = import.meta.glob('../../components/tabs/**/*.vue') as Record<string, () => Promise<{ default: Component }>>

export const autoRegisterComponents = (app: App) => {
  // 遍历所有导入的组件，按需注册
  Object.entries(tabsComponents).forEach(([path, importFn]) => {
    // 从文件路径提取组件名：AuButtonTabs.vue → AuButtonTabs
    const componentName = path.split('/').pop()?.replace(/\.vue$/, '')
    if (componentName) {
      // 使用异步组件注册，实现懒加载
      app.component(componentName, defineAsyncComponent(() => importFn()))
    }
  })
}