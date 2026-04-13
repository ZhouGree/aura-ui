import type { App } from 'vue'

// 自动导入 tabs 文件夹下的所有 .vue 文件
const tabsComponents = import.meta.glob('../../components/tabs/**/*.vue', { eager: true })

export const autoRegisterComponents = (app: App) => {
  // 遍历所有导入的组件，自动注册
  Object.entries(tabsComponents).forEach(([path, module]) => {
    // 从文件路径提取组件名：AuButtonTabs.vue → AuButtonTabs
    const componentName = path.split('/').pop()?.replace(/\.vue$/, '')
    if (componentName && module.default) {
      app.component(componentName, module.default)
    }
  })
}