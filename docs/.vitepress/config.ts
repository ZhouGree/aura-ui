import { defineConfig } from "vitepress"
import { mdPlugin } from "./config/plugins"


export default defineConfig({
  title: "Aura-UI基础组件文档",
  description: "基于Element-plus基础组件封装使用",
  lang: "cn-ZH",
  base: "/aura-ui/",
  lastUpdated: true,
  head: [
    // 修复 favicon 404：确保 public/img/favicon.ico 存在
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    // 修复 CDN 跟踪拦截：换用 cdnjs
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css' }]
  ],
  themeConfig: {
    logo: "/img/favicon.png",
    siteTitle: "Aura-UI",
    outline: 3,
    socialLinks: [{ icon: "github", link: "https://github.com/ZhouGree/aura-ui" }],
    nav: [
      { text: "安装指南", link: "/components/" },
      { text: "基础组件", link: "/components/AuButton/base.md" },
      { text: "GitHub地址", link: "https://github.com/ZhouGree/aura-ui" }
    ],
    sidebar: {
      "/components": [
        // ==============================================
        // 1. 基础表单组件（最简单 → 最复杂）
        // ==============================================
        {
          text: "基础表单组件",
          items: [
            { text: "Button 组件", link: "/components/AuButton/base.md" },
            { text: "输入框组件", link: "/components/AuInput/base.md" },
            { text: "Radio 组件", link: "/components/AuRadio/base.md" },
            { text: "多选框组组件", link: "/components/AuCheckbox/base.md" },
            { text: "表单组件", link: "/components/AuForm/base.md" },
            { text: "模块表单组件", link: "/components/AuModuleForm/base.md" },
          ]
        },
        // ==============================================
        // 2. 选择类组件（基础选择 → 高级表格选择）
        // ==============================================
        {
          text: "选择类组件",
          items: [
            { text: "图标选择组件", link: "/components/AuSelectIcon/base.md" },
            { text: "下拉选择组件", link: "/components/AuSelect/base.md" },
            { text: "下拉选择表格组件", link: "/components/AuSelectTable/base.md" },
            { text: "日期组件", link: "/components/AuDatePicker/base.md" }, 
            { text: "虚拟滚动选择表格", link: "/components/multipleVirtual/base.md" },
          ]
        },
        // ==============================================
        // 3. 数据展示组件（最简单 → 最复杂）
        // ==============================================
        {
          text: "数据展示组件",
          items: [
            { text: "详情组件", link: "/components/AuDetail/base.md" },
            { text: "表格组件", link: "/components/AuTable/base.md" },
            { text: "虚拟滚动表格", link: "/components/AuTableVirtual/base.md" },
            { text: "条件查询组件", link: "/components/AuQueryCondition/base.md" },
            { text: "查询表格组件", link: "/components/AuQueryTable/base.md" },
            { text: "自适应页面组件", link: "/components/AuAdaptivePage/base.md" },
          ]
        },
        // ==============================================
        // 4. 布局导航组件（最简单 → 最复杂）
        // ==============================================
        {
          text: "布局导航组件",
          items: [
            { text: "面包屑组件", link: "/components/AuBreadcrumb/base.md" },
            { text: "Tabs 组件", link: "/components/AuTabs/base.md" },
            { text: "步骤组件", link: "/components/AuStepWizard/base.md" },
            { text: "抽屉组件", link: "/components/AuDrawer/base.md" },
          ]
        }
      ]
    },
    
    
  },
  markdown: {
    headers: { level: [0, 0] },
    theme: { light: "github-light", dark: "github-dark" },
    config: md => mdPlugin(md)
  }
})