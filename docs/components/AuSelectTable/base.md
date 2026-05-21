---
layout: doc
---

# AuSelectTable 下拉选择表格组件

### 简介

下拉表格选择器，结合下拉框和表格的优势，支持从大量数据中通过表格形式选择记录。支持单选/多选、分页加载、跨页选中保持、键盘操作，适用于复杂数据选择场景。

::: warning 注意

使用此组件必须:`Element-plus`版本`v2.6`以上。

:::

#### 代码示例

```html
<au-select-table
  v-model="value"
  :table="table"
  :keywords="{ label: 'name', value: 'id' }"
  @radio-change="handleChange"
/>
```

#### 基础用法

:::demo 展示单选下拉表格的基本使用方式，配置表格数据源和关键字映射
AuSelectTable/radio
:::

### 选择模式

:::demo 当表格数据源中某些行不可选时，设置 `isRadioDisabled` 属性为 true 禁用单选
AuSelectTable/isRadioDisabled
:::

:::demo 开启多选模式，通过 `selectable` 函数控制每行复选框是否可勾选
AuSelectTable/selectable
:::

:::demo 多选模式下选择表格数据，通过 `@selectionChange` 事件获取选中项
AuSelectTable/multiple
:::

:::demo 设置 `isShowFirstColumn` 属性隐藏首列单选框
AuSelectTable/isShowFirstColumn
:::

### 分页功能

:::demo 设置 `isShowPagination` 开启分页功能，通过 `@page-change` 事件监听页码变化
AuSelectTable/isShowPagination
:::

:::demo 切换分页后保持选中状态，通过 `toggleRowSelection` 方法恢复选中项
AuSelectTable/restoreSelection
:::

:::demo 多选模式下设置 `multipleDisableDelete` 隐藏删除图标，适用于分页或条件查询后数据源变化场景
AuSelectTable/multipleDisableDelete
:::

### 数据加载

:::demo 动态加载表格数据，单选模式下的数据加载示例
AuSelectTable/dynamic
:::

:::demo 动态加载表格数据，多选模式下的数据加载示例
AuSelectTable/dynamicMultiple
:::

### 默认值与回显

:::demo 设置 `defaultSelectVal` 配置第一页默认选中项，支持单选默认值回显
AuSelectTable/radioDefaultSelectVal
:::

:::demo 多选模式下设置 `defaultSelectVal` 配置默认选中项
AuSelectTable/multipleDefaultSelectVal
:::

:::demo 动态赋值单选默认选中项
AuSelectTable/radioDynamicDefaultSelectVal
:::

:::demo 动态赋值多选默认选中项
AuSelectTable/multipleDynamicDefaultSelectVal
:::

:::demo 编辑场景下回显非第一页数据，通过 `radioSelectValLabel` 设置显示文本
AuSelectTable/radioSelectValLabel
:::

### 查询条件

:::demo 设置 `isShowQuery` 开启查询条件配置，继承 AuQueryCondition 组件的所有属性
AuSelectTable/isShowQuery
:::

:::demo 设置 `isShowBlurBtn` 控制查询条件组件是否显示隐藏下拉框按钮
AuSelectTable/isShowQueryMultiple
:::

:::demo 通过 `btnBind` 配置隐藏下拉框按钮，继承 el-button 所有属性
AuSelectTable/isShowQueryBtnBind
:::

:::demo 配置 `tableWidth` 和 `labelWidth` 调整查询条件区域宽度，重点设置 `opts.span`
AuSelectTable/isShowQuerySpan
:::

### 样式配置

:::demo 设置 `isShowInput` 显示输入框，通过 `v-model:input-value` 双向绑定输入值
AuSelectTable/isShowInput
:::

:::demo 设置 `border` 属性控制是否显示边框，默认显示
AuSelectTable/border
:::

:::demo 设置 `tableSize` 属性调整表格尺寸，可选值为 large、default、small
AuSelectTable/tableSize
:::

:::demo 使用 `toolbar` 和 `footer` 插槽自定义表格头部和底部内容
AuSelectTable/slotUse
:::

### 高级功能

:::demo 设置 `selfExpanded` 或 `isExpanded` 为 true，下拉框将始终保持展开状态
AuSelectTable/expanded
:::

:::demo 设置 `isKeyup` 开启键盘操作，支持上下键高亮、回车选中，需配合 `max-height` 使用
AuSelectTable/radioKeyup
:::

:::demo 启用远程搜索功能，设置 `filterable` 和 `remote` 为 true，通过 `remote-method` 从服务器搜索数据
AuSelectTable/remoteMethod
:::

:::demo 设置 `tableLoading` 和 `loadingText` 显示加载状态和提示文字
AuSelectTable/tableLoading
:::

### 组件配置

<au-select-table-tabs />
