---
layout: doc
---

# AuTable 表格

### 简介

功能丰富的数据表格组件，扩展虚拟滚动、单元格编辑、行拖拽排序、列动态显隐、表头合并等能力。提供 10+ 个操作 API，满足复杂数据展示和交互需求。

#### 代码示例

```html
<au-table
  :table="table"
  :columns="table.columns"
  @size-change="handlesSizeChange"
  @page-change="handlesCurrentChange"
/>
```

#### 基础用法

:::demo 展示表格组件的基本使用方式，支持数据展示和分页
AuTable/base
:::

### 基础功能

:::demo 基础表格功能，支持数据展示和分页操作
AuTable/base
:::

### 表格样式配置

:::demo 通过 `header-cell-style` 属性自定义表头样式
AuTable/headerCellStyle
:::

:::demo 设置 `stripe` 属性显示斑马纹效果
AuTable/stripe
:::

:::demo 通过 `tableLoading` 和 `loadingText` 属性设置加载状态
AuTable/tableLoading
:::

:::demo 在 `table` 对象中设置 `border: true` 显示表格边框
AuTable/border
:::

:::demo 在组件标签上设置 `border` 属性显示边框
AuTable/borderCom
:::

:::demo 通过 `size` 属性设置表格尺寸，可选值为 large、default、small
AuTable/size
:::

:::demo 通过 `align` 属性设置表格对齐方式，支持 left、center、right
AuTable/align
:::

### 表尾合计

:::demo 设置 `show-summary` 属性显示合计行，自动对数值列求和
AuTable/showSummary
:::

:::demo 通过 `summary-method` 属性自定义合计逻辑，返回自定义的合计值数组
AuTable/summaryMethod
:::

### 数据排序

:::demo 在 `columns` 中设置 `sort` 或 `sortable` 属性开启列排序
AuTable/sort
:::

:::demo 通过 `sortMethod` 属性自定义排序规则
AuTable/sortMethod
:::

:::demo 设置 `sort:custom` 实现远程排序，通过 `sort-change` 事件处理排序逻辑
AuTable/sortCellChange
:::

:::demo 设置 `sortable:custom` 实现自定义排序，监听 `sort-change` 事件
AuTable/sortable
:::

### 数据选择

:::demo 通过 `firstColumn.type='selection'` 开启多选功能
AuTable/selection
:::

:::demo 设置 `isPaging: true` 实现跨页多选
AuTable/pageCheck
:::

:::demo 通过 `selectable` 函数控制每行是否可勾选
AuTable/selectionDisabled
:::

:::demo 通过 `firstColumn.type='radio'` 开启单选功能，点击整行选中
AuTable/radio
:::

:::demo 设置 `defaultRadioCol` 配置默认选中项
AuTable/radioDefault
:::

:::demo 通过 `isRadioDisabled` 属性禁用特定行的单选
AuTable/isRadioDisabled
:::

:::demo 通过 `firstColumn.type='index'` 添加序号列
AuTable/serialNum
:::

:::demo 多选模式下的序号列
AuTable/selectionIndex
:::

:::demo 单选模式下的序号列
AuTable/radioIndex
:::

### 数据展示优化

:::demo 通过 empty 插槽自定义空数据提示内容
AuTable/emptySlot
:::

:::demo 通过 `empty-text` 属性设置空数据提示文字
AuTable/emptyText
:::

:::demo 设置 `isCopy` 属性开启单元格内容复制功能
AuTable/isCopy
:::

:::demo 通过 `isShowPagination` 控制分页器的显示与隐藏
AuTable/isShowPagination
:::

:::demo 通过 pagination 插槽自定义分页器
AuTable/paginationSlot
:::

### 数据筛选

:::demo 通过 `filters` 和 `filter-method` 属性实现列筛选功能
AuTable/filterMethod
:::

:::demo 通过字典数据源实现下拉筛选
AuTable/filters
:::

### 列渲染方式

:::demo 通过 render 函数自定义列内容渲染
AuTable/render
:::

:::demo 通过 slot 插槽自定义列内容
AuTable/slotName
:::

:::demo 通过 renderHeader 自定义表头渲染
AuTable/renderHeader
:::

### 列动态管理

:::demo 通过 `isShowCol` 属性动态控制列的显示与隐藏，支持布尔值或函数
AuTable/isShowCol
:::

:::demo 通过 `columnSetting` 开启列设置功能，支持列的显隐切换
AuTable/columnSetting
:::

### 行拖拽排序

:::demo 设置 `isRowSort` 属性开启行拖拽排序，通过 `@rowSort` 事件获取排序结果
AuTable/rowSort
:::

:::demo 设置 `isRowSortIcon` 仅在图标上触发拖拽，提升交互体验
AuTable/isRowSortIcon
:::

### 表头合并

:::demo 通过 `children` 属性配置多级表头，实现表头合并
AuTable/multileHead
:::

:::demo 表头合并结合插槽自定义
AuTable/slotNameMerge
:::

:::demo 可编辑的合并表头
AuTable/multileHeadEdit
:::

:::demo 通过 `renderHeader` 自定义合并表头渲染
AuTable/multileHeadRenderHeader
:::

### 操作栏

:::demo 通过 `operator` 数组配置操作按钮，支持多条件控制按钮显示
AuTable/operator
:::

:::demo 通过 `bind` 属性配置操作按钮样式，继承 el-button 属性
AuTable/operatorBtn
:::

:::demo 通过 render 函数自定义操作按钮（TSX 方式）
AuTable/operatorRender
:::

:::demo 通过插槽自定义操作栏内容
AuTable/operatorSlotName
:::

:::demo 设置 `isMore` 显示更多按钮，下拉展示额外操作
AuTable/operatorMore
:::

### TreeTable

:::demo 设置 `isTree` 属性启用树形表格功能
AuTable/treeTable
:::

:::demo 树形菜单表格
AuTable/treeMenuTable
:::

:::demo 菜单管理场景的树形表格
AuTable/menuMange
:::

### 单元格编辑

:::demo 配置单元格编辑功能
AuTable/configEdit
:::

:::demo 使用单元格编辑功能
AuTable/configEditUse
:::

:::demo 设置 `isKeyup` 开启键盘导航，支持方向键和回车操作
AuTable/singleEditKeyup
:::

:::demo 通过 `eventHandle` 继承第三方组件事件
AuTable/eventHandle
:::

:::demo 通过 `rules` 属性配置单元格编辑校验规则
AuTable/rules
:::

:::demo 列级别的校验规则配置
AuTable/rulesCol
:::

:::demo 单元格编辑结合选择表格
AuTable/rulesSelectTable
:::

:::demo 选择表格数据回显
AuTable/echoSelectTable
:::

:::demo 调用 `resetTselectTable` 方法重置选择表格数据
AuTable/rulesSelectTableRefs
:::

:::demo 设置 `isShowFooterBtn` 显示底部保存按钮，通过 `footerBtnAlign` 控制对齐方式
AuTable/footerSlot
:::

:::demo 单行编辑模式
AuTable/editSingle
:::

### 展开行

:::demo 通过 `firstColumn.type='expand'` 开启行展开功能
AuTable/expand
:::

### 组件配置

<AuTableTabs />
