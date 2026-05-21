---
layout: doc
---

# AuAdaptivePage 组件

### 简介

自适应页面布局容器，自动协调查询区和表格区高度分配。根据容器高度动态调整布局，充分利用页面空间，适用于查询条件较多或表格列数较多的场景。

#### 基础用法

:::demo 展示自适应页面的基本使用方式，继承 AuQueryCondition 和 AuTable 组件的所有属性
AuAdaptivePage/base
:::

### 基础功能

:::demo 页面一屏显示，自动协调查询区和表格区高度分配
AuAdaptivePage/base
:::

### 表格复选

:::demo 开启表格复选功能，支持多选操作
AuAdaptivePage/selection
:::

### 左侧 Tree 结构

:::demo 通过 `leftContent` 插槽添加左侧树形结构
AuAdaptivePage/lefttree
:::

### TreeTable 综合使用

:::demo 结合树形结构和表格的综合使用场景
AuAdaptivePage/treeTable
:::

### 动态切换表头

:::demo 动态切换表格列配置，实现灵活的列显示
AuAdaptivePage/dynamicCol
:::

### 菜单管理功能

:::demo 实现菜单管理页面的典型场景
AuAdaptivePage/menuMange
:::

### Content 插槽使用

:::demo 通过 `content` 插槽自定义页面内容区域
AuAdaptivePage/contentSlot
:::

### 表格合计

:::demo 开启表格合计功能，自动计算列数据总和
AuAdaptivePage/showSummary
:::

### 组件配置

<au-adaptive-page-tabs />
