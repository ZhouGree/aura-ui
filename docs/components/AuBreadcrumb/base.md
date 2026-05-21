---
layout: doc
---

# AuBreadcrumb 面包屑组件

### 简介

面包屑导航组件，支持自定义分隔符、隐藏当前页、自动首页链接。基于路由配置自动生成面包屑路径，简化导航配置，提升用户位置感知。

#### 基础用法

:::demo 展示面包屑组件的基本使用方式，支持自定义分隔符和导航链接
AuBreadcrumb/base
:::

### 基础功能

:::demo 基础面包屑导航功能，支持自定义分隔符和首页链接
AuBreadcrumb/base
:::

### 自动路由生成

:::demo 基于路由配置自动生成面包屑路径，无需手动配置
AuBreadcrumb/auto
:::

### 路由过滤

:::demo 通过 `ignoreRoutes` 属性过滤不需要显示的路由
AuBreadcrumb/ignoreRoutes
:::

### 隐藏当前层级

:::demo 设置 `hideCurrent` 属性隐藏当前页面的面包屑项
AuBreadcrumb/hideCurrent
:::

### 自定义渲染

:::demo 通过插槽自定义面包屑项的渲染方式
AuBreadcrumb/slotRender
:::

> 说明：`ignoreRoutes`、`customMetaKey` 依赖真实路由 `meta` 数据，在业务项目中效果更明显。

### 组件配置

<AuBreadcrumbTabs />
