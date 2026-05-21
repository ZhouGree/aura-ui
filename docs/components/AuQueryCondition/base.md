---
layout: doc
---

# AuQueryCondition 查询条件组件

### 简介

条件查询栏组件，基于 CSS Grid 实现响应式栅格布局，支持每行 1-6 列配置。支持条件收起/展开、全局回车查询、动态添加条件，快速构建列表页筛选区。

#### 基础用法

:::demo 展示查询条件组件的基本使用方式，支持响应式布局
AuQueryCondition/base
:::

### 布局配置

:::demo 通过设置 `isExpansion` 属性控制查询条件的收起和展开
AuQueryCondition/isExpansion
:::

:::demo 通过设置 `maxVisibleRows` 属性配置折叠时默认显示的行数，默认为 1
AuQueryCondition/maxVisibleSpans
:::

:::demo 开启 `isShowWidthSize` 并设置 `widthSize` 值（默认 4）控制每行显示项数，关闭时根据屏幕宽度自动调整
AuQueryCondition/widthSize
:::

### 自定义渲染

:::demo 通过 `labelRender` 属性使用 TSX 自定义标签渲染
AuQueryCondition/labelRender
:::

:::demo 通过 `slotName` 属性使用插槽自定义输入框内容
AuQueryCondition/slotName
:::

:::demo 结合第三方封装组件使用，通过 `comUse` 属性配置
AuQueryCondition/comUse
:::

### 数据交互

:::demo 配置 `defaultVal` 设置查询条件的默认值
AuQueryCondition/defaultVal
:::

:::demo 通过事件监听实现查询条件之间的联动效果
AuQueryCondition/eventHandle
:::

:::demo 调用 `handleEvent` 方法动态修改查询条件值，通过 ref 获取组件实例
AuQueryCondition/handleEventChange
:::

:::demo 通过 `getRefs` 事件获取查询条件项的 ref，支持重置和动态操作
AuQueryCondition/getRefs
:::

### 按钮配置

:::demo 使用 `querybar` 插槽自定义查询按钮操作区
AuQueryCondition/querybar
:::

:::demo 通过 `footerBtn` 插槽自定义底部按钮，不开启收起展开功能
AuQueryCondition/footerBtn
:::

:::demo 设置 `isFooter` 为 false 不展示按钮，不开启收起展开功能
AuQueryCondition/footer
:::

:::demo 通过 `btnBind` 属性自定义按钮文案和样式
AuQueryCondition/btnBind
:::

### 高级功能

:::demo 动态增减查询条件项，根据业务需求灵活配置
AuQueryCondition/dynamic
:::

:::demo 设置 `isDropDownSelectMore` 以下拉方式展示更多条件，支持全选、反选、清空操作
AuQueryCondition/isDropDownSelectMore
:::

### 组件配置

<au-query-condition-tabs />
