---
layout: doc
---

# AuSelectIcon elemnt-plus 图标选择组件

### 简介

图标选择器组件，提供弹窗形式的图标浏览和搜索功能。支持图标分类展示、关键字过滤，简化图标选择流程，适用于菜单配置、分类图标设置等场景。

#### 基础用法

:::demo
AuSelectIcon/base
:::

#### 代码示例

```html
<au-select-icon v-model="icon" placeholder="请选择图标" />
```

### 基础功能

:::demo 展示图标选择器的基本使用方式，点击输入框弹出图标选择弹窗
AuSelectIcon/base
:::

### 搜索框显示功能

:::demo 通过设置 `isShowSearch` 属性显示搜索框，支持关键字快速过滤图标
AuSelectIcon/isShowSearch
:::

### 选中图标显示功能

:::demo 通过设置 `isShowIcon` 属性在输入框中显示选中的图标预览
AuSelectIcon/isShowIcon
:::

### 下拉框属性配置

:::demo 通过 `selectBind` 属性配置下拉框的样式和行为，继承 el-select 所有属性
AuSelectIcon/selectBind
:::

### 组件配置

<au-select-icon-tabs />
