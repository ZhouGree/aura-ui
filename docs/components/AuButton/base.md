---
layout: doc
---

# AuButton 按钮组件

### 简介

基于 Element Plus Button 二次封装，内置防抖功能防止重复提交。支持自定义防抖时间、提示文字和图标，适用于表单提交、操作按钮等高频点击场景，提升用户体验和系统稳定性。

#### 代码示例

```html
<au-button type="primary" :time="1000" :is-debounce="true" tip="点击提示"> 提交 </au-button>
```

#### 基础用法

:::demo 展示按钮的基本使用方式，继承 el-button 所有属性，内置防抖功能防止重复提交
AuButton/base
:::

### 基础功能

:::demo 继承 el-button 所有属性，新增 `time` 属性控制防抖时间（默认 1 秒）
AuButton/base
:::

### 提示文字

:::demo 通过 `tip` 属性设置提示文字，配合 `placement` 属性控制提示位置
AuButton/tip
:::

### 防抖开关

:::demo 通过 `isDebounce` 属性控制是否开启防抖，默认开启
AuButton/isDebounce
:::

### 组件配置

<AuButtonTabs />
