---
layout: doc
---

# AuSelect 下拉选择组件

### 简介

大数据量下拉选择组件，内置虚拟滚动和分页加载策略，自动根据数据量选择最优渲染方式。支持多选跨页缓存、远程搜索，解决传统选择器大数据卡顿和跨页选中丢失问题。

#### 代码示例

```html
<au-select v-model="value" :option-source="options" placeholder="请选择" />
```

#### 基础用法

:::demo 展示单选下拉框的基本使用方式
AuSelect/single
:::

### 单选功能

:::demo 通过配置 `isShowPagination` 和 `paginationOption` 开启分页功能，`isCached` 属性默认为 true，切换分页后会缓存上一页选中的数据
AuSelect/singePagination
:::

:::demo 当数据源中某些选项不可选时，设置 `disabled` 属性为 true 禁用该选项
AuSelect/singleDisabled
:::

### 多选功能

:::demo 开启多选模式，支持选择多个选项
AuSelect/multiple
:::

:::demo 多选模式下设置 `collapse-tags` 属性折叠已选标签，超出部分显示为 +N
AuSelect/multipleCollapseTags
:::

:::demo 多选模式下设置 `disabled` 属性禁用不可选的选项
AuSelect/multipleDisabled
:::

### 分页加载

:::demo 配置 `isShowPagination` 和 `paginationOption` 开启分页功能，单选模式下支持跨页缓存选中项
AuSelect/pagination
:::

### 虚拟滚动

:::demo 设置 `use-virtual` 属性开启虚拟滚动，适用于大数据量场景，提升渲染性能
AuSelect/useVirtual
:::

:::demo 多选模式下开启虚拟滚动，支持大数据量多选
AuSelect/useVirtualMultiple
:::

:::demo 虚拟滚动配合标签折叠，优化多选大数据量场景的展示效果
AuSelect/useVirtualCollapseTags
:::

### 高级配置

:::demo 通过 `customLabel` 属性自定义选项显示格式，支持字符串表达式如 `${_item.label}（${_item.id}）`
AuSelect/customLabel
:::

:::demo 设置 `returnObject` 属性返回完整对象而非值，需配合 `value-key` 使用，支持多选
AuSelect/returnObject
:::

### 组件配置

<au-select-tabs />
