---
layout: doc
---

# AuCheckbox 多选框组

### 简介

多选框组增强组件，支持全选/反选、批量操作和按钮样式切换。通过配置驱动选项渲染，内置选中状态管理，适用于批量操作、权限配置等多选场景。

#### 代码示例

```html
<au-checkbox v-model="checked" label="选项" />
```

#### 基础用法

:::demo 展示多选框的基本使用方式，支持全选/反选和批量操作
AuCheckbox/base
:::

### 基础功能

:::demo 基于 el-checkbox 二次封装，继承原组件所有属性
AuCheckbox/base
:::

### 尺寸配置

:::demo 通过 `size` 属性控制多选框大小，可选值为 large、default、small
AuCheckbox/size
:::

### 按钮样式

:::demo 设置 `type="button"` 将多选框渲染为按钮样式
AuCheckbox/button
:::

### 边框样式

:::demo 设置 `border` 属性为 true 渲染带有边框的多选框
AuCheckbox/border
:::

### 插槽自定义

:::demo 通过 slot 属性自定义单个选项内容，或使用默认插槽自定义整体布局
AuCheckbox/slot
:::

### 自定义字段映射

:::demo 通过 `props` 属性自定义 `value`、`label`、`disabled` 的字段映射
AuCheckbox/props
:::

### 组件配置

<AuCheckboxTabs />
