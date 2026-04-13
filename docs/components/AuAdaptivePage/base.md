---
layout: doc
---

# AuAdaptivePage 组件

### 一屏展示组件

:::demo（页面一屏显示）demo 继承 AuQueryCondition 组件(查询条件组件)与 AuTable 组件的所有属性、事件、插槽、方法
AuAdaptivePage/base
:::

### 操作 AuTable 取消复选功能

:::demo 继承 AuQueryCondition 组件(查询条件组件)与 AuTable 组件的所有属性、事件、插槽、方法
AuAdaptivePage/selection
:::

### 显示左侧 tree 结构

:::demo 使用插槽`leftContent`
AuAdaptivePage/lefttree
:::

### treeTable 综合使用

:::demo
AuAdaptivePage/treeTable
:::

### 动态切换表头

:::demo
AuAdaptivePage/dynamicCol
:::

### 菜单管理（弹窗--最外层 footer 插槽使用）

:::demo
AuAdaptivePage/menuMange
:::

### content 插槽使用

:::demo
AuAdaptivePage/contentSlot
:::

### 解决 AuTable 合计涉及到 AuSelectTable 也出现合计问题解决

:::demo
AuAdaptivePage/showSummary
:::

### AuAdaptivePage 参数配置

---

### 1、代码示例

```html
<au-adaptive-page
  title="用户管理列表"
  :table="state.table"
  :columns="state.table.columns"
  :opts="opts"
  @size-change="handlesSizeChange"
  @page-change="handlesCurrentChange"
  @submit="conditionEnter"
/>
```

### 2、配置参数（Attributes）继承 AuTable 及 AuQueryCondition 组件的所有属性、事件、插槽、方法

| 参数                 | 说明                                                          | 类型          | 默认值 |
| :------------------- | :------------------------------------------------------------ | :------------ | :----- |
| leftWidth            | 左侧宽度                                                      | number,String | 260    |
| pageStyle            | au-layout-page 行内样式                                       | object        | -      |
| queryPageStyle       | 查询条件组件的 au-layout-page-item 行内样式                   | object        | -      |
| tablePageStyle       | table 组件的 au-layout-page-item 行内样式                     | object        | -      |
| isAuTableSelfFilling | 一屏组件 AuTable 自动撑满（即分页器显示最下，table 内容撑满） | Boolean       | false  |
| columnSetting        | AuTable 是否开启列设置                                        | Boolean       | false  |
| name                 | 表格开启 columnSetting 后，设置缓存数据唯一标识               | string        | -      |

### 3、Slots

| 插槽名                          | 说明                                               |
| :------------------------------ | :------------------------------------------------- |
| leftContent                     | 左侧具名插槽                                       |
| content<el-tag>v1.4.13</el-tag> | au-layout-page 条件查询与 AuTable 组件之间具名插槽 |
| -                               | 内部 au-layout-page 默认插槽                       |
| footer                          | 最外层底部具名插槽                                 |
