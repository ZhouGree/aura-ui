---
layout: doc
---

# Virtualized AuTable 表格

### 简介

虚拟滚动专用表格，默认开启虚拟滚动优化，专为超大数据量场景设计。支持万级数据流畅渲染，适用于数据量大但无需复杂编辑功能的展示场景。

> 默认显示`30`条数据,可以设置`virtualShowSize`属性来控制显示条数

#### 基础用法

:::demo `AuTable组件`标签添加属性`useVirtual`--开启虚拟滚动；开启虚拟滚动后，表格自动添加边框。
AuTable/useVirtual
:::
