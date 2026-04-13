# Aura-UI

## [Vue2 基于 Element-ui 基础组件传送门](https://github.com/wocwin/t-ui)

> 基于 Element-ui 二次封装基础组件地址

## [AuraUI 使用 Demo 项目](https://github.com/wocwin/wocwin-admin)

> `aura-admin`是基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的一套后台管理模板；此项目全面使用了`Aura-UI`二次封装基础组件库

## 介绍

> 基于 vue3+ ts+ Element-plus 二次封装组件

这是我在学习 Vue3 中基于[Element-plus](https://element-plus.org/zh-CN/) 二次封装基础组件文档，希望对你有用。可查看 [详细组件案例文档](https://wocwin.github.io/t-ui-plus/) 预览

<p align="center">
  <a href="https://github.com/vuejs/vue" target="_blank">
    <img src="https://img.shields.io/badge/vue-3.2.36-brightgreen.svg" alt="vue3">
  </a>
  <a href="https://gitee.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://gitee.com/wocwin/t-ui-plus/badge/star.svg?theme=dark" alt="t-ui-plus">
  </a>
   <a href="https://github.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/wocwin/t-ui-plus.svg" alt="t-ui-plus">
  </a>
   <a href="https://www.npmjs.com/package/@wocwin/t-ui-plus" target="_blank">
      <img alt="npm" src="https://img.shields.io/npm/v/@wocwin/t-ui-plus.svg" />
    </a>
</p>

## 动态效果图

<img src="./README_GIF/TuiPlus__demo.gif">

### 安装

**建议您使用包管理器 ([pnpm](https://pnpm.io/)<el-tag  effect="dark">推荐</el-tag> ， [yarn](https://classic.yarnpkg.com/lang/en/)，[npm](https://www.npmjs.com/)) 安装 aura-ui**。

```sh [pnpm]
pnpm install aura-ui -S
```

```sh [yarn]
yarn add aura-ui
```

```sh [npm]
npm install aura-ui    -S
```

## 全局注册使用

> ### 前提条件：使用项目必须全局注册 Element-plus 组件库

```js
// 在main.js中按下引入
import { createApp } from "vue"
import App from "./App.vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import locale from "element-plus/es/locale/lang/zh-cn"
// element-plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import AuraUI from "aura-ui"
import "aura-ui/lib/style.css"
const app = createApp(App)
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注册ElementPlus
app.use(ElementPlus, {
  locale // 语言设置
  // size: Cookies.get('size') || 'medium' // 尺寸设置
})
app.use(AuraUI)
app.mount("#app")
```

## 按需引入

```js
// 在main.js中按下引入
import "aura-ui/lib/style.css"
// 单个.vue文件引入
;<script setup lang="ts">
  import {(AuraDetail, AuraForm)} from "aura-ui"
</script>
```

## 浏览器直接引入 Use CDN in Project(v1.5.0 支持)--建议使用 pnpm 安装使用

> 浏览器直接引入组件库，属性`驼峰命名`必须转换为短横线,直接通过浏览器的 HTML 标签导入 `aura-ui`，然后就可以使用全局变量 `AuraUI` 了

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css" />
  <link rel="stylesheet" href="https://unpkg.com/@wocwin/t-ui-plus/lib/style.css" />
  <!-- Import Vue 3 -->
  <script src="https://unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="https://unpkg.com/element-plus"></script>
  <!-- 3. 引入t-ui-plus的组件库 -->
  <script src="https://unpkg.com/@wocwin/t-ui-plus@latest"></script>
</head>
<body>
  <div id="app">
    <au-input
      placeholder="请输入金额"
      input-type="amount"
      show-thousands
      v-model="value"
    ></au-input>
  </div>
  <script>
    const app = Vue.createApp({
      data() {
        return {
          value: ""
        }
      }
    })
    app.mount("#app")
  </script>
</body>
```

## 全部组件如下

| 组件名称                  | 说明                                                                                                                                                           |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AuLayoutPage              | 布局页面                                                                                                                                                       |
| AuLayoutPageItem          | 布局页面子项                                                                                                                                                   |
| AuAdaptivePage            | [一屏组件](https://wocwin.github.io/t-ui-plus/components/AuAdaptivePage/base.html?_blank)（继承 AuTable 及 AuQueryCondition 组件的所有属性、事件、插槽、方法） |
| AuQueryCondition          | [条件查询组件](https://wocwin.github.io/t-ui-plus/components/AuQueryCondition/base.html?_blank)                                                                |
| AuTable                   | [表格组件](https://wocwin.github.io/t-ui-plus/components/AuTable/base.html?_blank)                                                                             |
| Virtualized AuTable       | [虚拟列表](https://wocwin.github.io/t-ui-plus/components/AuTableVirtual/base.html?_blank)                                                                      |
| AuForm                    | [表单组件](https://wocwin.github.io/t-ui-plus/components/AuForm/base.html?_blank)                                                                              |
| AuSelectTable             | [下拉选择表格组件](https://wocwin.github.io/t-ui-plus/components/AuSelectTable/base.html?_blank)                                                               |
| Virtualized AuSelectTable | [下拉选择虚拟表格组件](https://wocwin.github.io/t-ui-plus/components/multipleVirtual/base.html?_blank)                                                         |
| AuSelectIcon              | [图标选择组件](https://wocwin.github.io/t-ui-plus/components/AuSelectIcon/base.html?_blank)                                                                    |
| AuSelect                  | [下拉选择组件](https://wocwin.github.io/t-ui-plus/components/AuSelect/base.html?_blank)                                                                        |
| AuDetail                  | [详情组件](https://wocwin.github.io/t-ui-plus/components/AuDetail/base.html?_blank)                                                                            |
| AuButton                  | [防抖按钮组件](https://wocwin.github.io/t-ui-plus/components/AuTable/base.html?_blank)                                                                         |
| AuStepWizard              | [步骤条组件](https://wocwin.github.io/t-ui-plus/components/AuStepWizard/base.html?_blank)                                                                      |
| AuTimerBtn                | 定时按钮组件                                                                                                                                                   |
| AuModuleForm              | [模块表单/详情组件](https://wocwin.github.io/t-ui-plus/components/AuModuleForm/base.html?_blank)                                                               |
| AuDatePicker              | [日期选择器组件](https://wocwin.github.io/t-ui-plus/components/AuDatePicker/base.html?_blank)                                                                  |
| AuRadio                   | [单选组件](https://wocwin.github.io/t-ui-plus/components/AuRadio/base.html?_blank)                                                                             |
| AuCheckbox                | [多选组件](https://wocwin.github.io/t-ui-plus/components/AuCheckbox/base.html?_blank)                                                                          |
| AuTabs                    | [标签页组件](https://wocwin.github.io/t-ui-plus/components/AuTabs/base.html?_blank)                                                                            |
| AuSelectIcon              | [图标选择组件](https://wocwin.github.io/t-ui-plus/components/AuSelectIcon/base.html?_blank)                                                                    |

## aura-ui Volar 组件类型提示

```js
// 需要在使用的项目的tsconfig.json文件中添加以下
compilerOptions：{
  "types": [
      "aura-ui/components.d.ts",
    ],
}

```

## Vue3 + Vite 项目中安装引入报如下错误的解决方法

> #### 把项目的 vite 版本升级到 4+

<img src="./README_GIF/error.png">

## 安装依赖

> ### 注意: 本地环境版本最好安装 [Node.js 16.x+](https://nodejs.org/en)、[pnpm 7.x+](https://github.com/pnpm/pnpm/)

```shell
npm install -g pnpm

# 安装依赖
pnpm install --registry=https://registry.npmjs.org/
>pnpm config get registry 查看当前指向源

# 如果安装依赖失败，可以尝试使用淘宝镜像  --registry=https://registry.npmmirror.com/
>pnpm config set registry https://registry.npmmirror.com/ 切换淘宝镜像源
>pnpm install

```

## 本地运行 vuepress 中组件文档

```shell
// docs项目(文档demo示例)基于vue3+vite项目
npm run docs:dev

```

## Thanks to all the contributors

<a href="https://github.com/wocwin/t-ui-plus/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wocwin/t-ui-plus" alt="contributors" />
</a>

## Git 提交规范

- `ci`: ci 配置文件和脚本的变动;
- `chore`: 构建系统或辅助工具的变动;
- `fix`: 代码 BUG 修复;
- `feat`: 新功能;
- `perf`: 性能优化和提升;
- `refactor`: 仅仅是代码变动，既不是修复 BUG 也不是引入新功能;
- `style`: 代码格式调整，可能是空格、分号、缩进等等;
- `docs`: 文档变动;
- `test`: 补充缺失的测试用例或者修正现有的测试用例;
- `revert`: 回滚操作;
