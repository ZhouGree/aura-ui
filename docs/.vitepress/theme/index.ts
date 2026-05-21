import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from "vitepress/theme"

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import locale from "element-plus/es/locale/lang/zh-cn"
// 图标并进行全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import * as echarts from "echarts" // 引入echarts
import TVHtml from "../components/TVHtml.vue"
import AuIcon from "../components/AuIcon.vue"
import AuTip from "../components/AuTip.vue"
import AuComponentsOverview from "../components/AuComponentsOverview.vue"
import { VPDemo } from "../vitepress"
// 基于element-plus二次封装基础组件
import AuraUI from "../../../packages"
import "./index.css"

import { autoRegisterComponents } from "./autoRegisterComponents"
import { initTableFix } from "./tableFix"

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.config.globalProperties.$echarts = echarts // 全局使用
    // 注册ElementPlus
    ctx.app.use(ElementPlus, {
      locale // 语言设置
    })
    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component)
    }
    // 全局注册基础组件
    ctx.app.use(AuraUI)

    ctx.app.component("Demo", VPDemo)
    ctx.app.component("TVHtml", TVHtml)
    ctx.app.component("AuIcon", AuIcon)
    ctx.app.component("AuTip", AuTip)
    ctx.app.component("AuComponentsOverview", AuComponentsOverview)
    autoRegisterComponents(ctx.app)
    
    // 初始化表格修复
    initTableFix()
  },
}
