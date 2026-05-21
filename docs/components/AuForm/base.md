---
layout: doc
---

# AuForm 表单组件

### 简介

配置化动态表单核心组件，通过 JSON 配置对象自动生成完整表单界面，支持字段联动、动态显隐和表单校验。大幅减少表单模板代码，实现复杂表单快速搭建。

#### 代码示例

```html
<au-form ref="formRef" :form-opts="formOpts" @submit="handleSubmit" />
```

#### 基础用法

:::demo 展示配置化表单的基本使用方式，通过 JSON 配置自动生成表单
AuForm/base
:::

### 基础配置

:::demo 继承 Element-plus 组件的事件，支持表单级别的事件监听
AuForm/eventHandle
:::

:::demo 设置 `isTrim` 自动去除输入框前后空格（密码类型除外）
AuForm/isTrim
:::

:::demo 通过 `labelPosition` 属性设置表单域标签位置，可选值为 top、left、right
AuForm/labelPosition
:::

:::demo 通过 `widthSize` 属性控制每行显示的表单项数量，可选值为 1-6
AuForm/widthSize
:::

### 表单校验

:::demo 通过 `rules` 属性配置表单校验规则，支持 async-validator 校验规则，可自定义校验函数
AuForm/rules
:::

### 自定义渲染

:::demo 通过 `labelRender` 属性使用 TSX 自定义标签渲染，优先级高于 label 属性
AuForm/labelRender
:::

:::demo 通过 `slotName` 和 `childSlotName` 插槽自定义输入框内容和下拉选项
AuForm/slotName
:::

:::demo 设置 `textShow: true` 将表单项转换为文本展示模式
AuForm/textShow
:::

:::demo 通过 `getRefs` 事件获取 fieldList 中某项的 ref 引用
AuForm/comUse
:::

### 数据处理

:::demo 通过 `echo` 属性实现表单数据回显
AuForm/echo
:::

:::demo 实现表单项之间的联动效果，根据一个字段的值动态改变另一个字段
AuForm/linkage
:::

:::demo 通过 `isHideItem` 属性动态控制表单项的显示与隐藏（支持函数方式）
AuForm/isHideItemFunction
:::

:::demo 通过 `isHideItem` 属性动态控制表单项的显示与隐藏
AuForm/isHideItem
:::

### 按钮配置

:::demo 通过 `btnSlotName` 插槽自定义操作按钮
AuForm/btnSlotName
:::

:::demo 通过 `btnRender` 使用 TSX 自定义渲染操作按钮
AuForm/btnRender
:::

:::demo 通过 `btnisHide` 属性动态控制操作按钮的显示与隐藏
AuForm/btnisHide
:::

### 高级用法

:::demo 通过 `getRefs` 事件获取 fieldList 中单项的 ref，便于手动控制
AuForm/getRefs
:::

### 组件配置

<AuFormTabs />
