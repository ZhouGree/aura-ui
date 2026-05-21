---
layout: doc
---

# AuRadio 单选组件

### 简介

单选框组快速渲染组件，支持通过配置对象批量生成选项，无需手动编写每个选项标签。支持自定义字段映射和按钮样式切换，简化单选交互的开发流程。

#### 代码示例

```html
<au-radio v-model="value" :options="options" />
```

#### 基础用法

:::demo 展示单选组件的基本使用方式，通过配置 options 数组批量生成选项
AuRadio/base
:::

### 基础功能

:::demo 基于 el-radio 二次封装，继承原组件所有属性
AuRadio/base
:::

### 尺寸配置

:::demo 通过 `size` 属性控制单选框大小，可选值为 large、default、small
AuRadio/size
:::

### 按钮样式

:::demo 设置 `type="button"` 将单选框渲染为按钮样式
AuRadio/button
:::

### 边框样式

:::demo 设置 `border` 属性为 true 渲染带有边框的单选框
AuRadio/border
:::

### 插槽自定义

:::demo 通过 slot 属性自定义单个选项内容，或使用默认插槽自定义整体布局
AuRadio/slot
:::

### 自定义字段映射

:::demo 通过 `props` 属性自定义 `value`、`label`、`disabled` 的字段映射
AuRadio/props
:::

### 组件配置

<AuRadioTabs />
