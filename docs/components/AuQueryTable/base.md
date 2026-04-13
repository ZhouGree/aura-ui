---
layout: doc
---

# AuQueryTable 查询表格组件

### 基础用法

::: demo
AuQueryTable/base
:::

### 手动加载（autoLoad=false）

::: demo
AuQueryTable/autoLoad
:::

### 导出处理（exportHandler + export 事件）

::: demo
AuQueryTable/export
:::

### 插槽扩展（search-extra / toolbar / empty）

::: demo
AuQueryTable/slots
:::

### Attributes

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| searchConfig | 查询配置（新） | SearchConfig | - |
| tableConfig | 表格配置（新） | object | - |
| columns | 列配置（新） | array | [] |
| queryProps | 查询条件配置（兼容旧） | object | - |
| tableProps | 表格配置（兼容旧） | object | - |
| request | 请求函数，返回 data/list + total | function | - |
| autoLoad | 是否自动加载（新） | boolean | true |
| showSearch | 是否显示查询区（新） | boolean | true |
| immediate | 是否初始化自动查询（兼容） | boolean | true |
| autoQueryOnReset | 重置后是否自动查询 | boolean | true |
| showExport | 是否显示导出按钮 | boolean | false |
| exportHandler | 自定义导出处理函数（新） | function | - |
| defaultPageSize | 默认每页条数（新） | number | 10 |
| pageSizes | 分页选项（新） | number[] | [10,20,50,100] |

### Events

| 事件名 | 说明 | 参数 |
| :-- | :-- | :-- |
| search | 搜索时触发 | `(form)` |
| reset | 重置时触发 | `(form)` |
| load | 加载成功后触发 | `(list, total)` |
| page-change | 翻页触发 | `(page, size)` |
| export | 点击导出触发 | `({queryForm, tableData})` |

### Slots

| 插槽名 | 说明 | 作用域 |
| :-- | :-- | :-- |
| search-extra | 查询区域扩展 | `{ searchValues, resetSearch, search }` |
| toolbar | 表格工具栏 | - |
| table | 完全自定义表格区 | `{ data, loading, pagination }` |
| empty | 自定义空状态 | - |

### Exposes（Methods）

| 方法名 | 说明 |
| :-- | :-- |
| query | 手动触发查询 |
| reset | 重置查询条件 |
| reload | 按当前条件重新加载 |
| getQueryForm | 获取当前查询参数 |

