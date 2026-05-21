---
layout: doc
---

# AuDetail 详情组件

### 简介

详情数据结构化展示组件，支持多列布局、字典值自动转换和 Tooltip 超长内容提示。通过配置驱动详情渲染，快速构建数据查看页面，减少重复模板代码。

#### 代码示例

```html
<au-detail :data-list="dataList" :label-width="120" />
```

#### 基础用法

:::demo 展示详情组件的基本使用方式，通过配置 dataList 渲染详情信息
AuDetail/base
:::

### 基础功能

:::demo 展示详情组件的基本使用方式，支持多列布局
AuDetail/base
:::

### 边框样式

:::demo 设置 `border` 属性显示边框，增强视觉分隔效果
AuDetail/border
:::

### 列数配置

:::demo 通过 `descColumn` 属性配置每行显示的列数，支持 1-6 列
AuDetail/descColumn
:::

### 垂直布局

:::demo 设置 `vertical` 属性启用垂直布局模式
AuDetail/vertical
:::

### 插槽自定义

:::demo 通过 `slotName` 属性自定义详情项的内容渲染
AuDetail/slotName
:::

### 字典回显

:::demo 配置 `listTypeInfo` 实现字典值自动转换和回显
AuDetail/echo
:::

### Tooltip 提示

:::demo 超长内容自动显示 Tooltip 提示，提升用户体验
AuDetail/tooltip
:::

### Label 样式配置

:::demo 设置 `isColon` 属性控制是否显示冒号
AuDetail/isColon
:::

:::demo 设置 `isLabelBold` 属性加粗显示标签文字
AuDetail/isLabelBold
:::

### Label 渲染

:::demo 通过 `labelRender` 属性使用 TSX 自定义标签渲染
AuDetail/labelRender
:::

### 组件配置

<au-detail-tabs />
