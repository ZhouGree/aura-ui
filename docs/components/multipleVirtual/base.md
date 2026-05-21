---
layout: doc
---

# Virtualized AuSelectTable

虚拟滚动选择表格，基于 AuSelectTable 扩展，专为万级以上大数据量选择场景优化。通过虚拟滚动技术只渲染可视区域行，保持流畅交互体验。

> 默认显示`30`条数据,可以设置`virtualShowSize`属性来控制显示条数

### 单选--虚拟滚动 Table

:::demo `AuSelectTable组件`标签添加属性`useVirtual`--开启虚拟滚动;`columns`中的项宽度需要使用`minWidth`;`单选`开启虚拟滚动`将自动隐藏单选项首列`。
AuSelectTable/radioVirtual
:::

### 多选--虚拟滚动 Table

:::demo `AuSelectTable组件`标签添加属性`useVirtual`--开启虚拟滚动。
AuSelectTable/multipleVirtual
:::
