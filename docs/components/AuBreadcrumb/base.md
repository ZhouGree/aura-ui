---
layout: doc
---

# AuBreadcrumb 面包屑组件

### 手动配置

::: demo
AuBreadcrumb/base
:::

### 自动路由生成

::: demo
AuBreadcrumb/auto
:::

### 自动路由过滤（ignoreRoutes）

::: demo
AuBreadcrumb/ignoreRoutes
:::

### 隐藏当前层级

::: demo
AuBreadcrumb/hideCurrent
:::

### 自定义渲染（item + separator 插槽）

::: demo
AuBreadcrumb/slotRender
:::

> 说明：`ignoreRoutes`、`customMetaKey` 依赖真实路由 `meta` 数据，在业务项目中效果更明显。

### Attributes

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| items | 手动面包屑数据 | BreadcrumbItem[] | [] |
| auto | 是否根据路由生成 | boolean | true |
| separator | 分隔符 | string \| Component | "/" |
| replace | 是否 replace 跳转 | boolean | false |
| hideCurrent | 是否隐藏当前路由（最后一项） | boolean | false |
| ignoreRoutes | 忽略的路由 name/path 列表 | string[] | [] |
| customMetaKey | 路由 meta 自定义标题字段 | string | breadcrumb |
| hideMetaKey | 路由 meta 隐藏字段 | string | breadcrumbHidden |
| titleMetaKey | 路由 meta 默认标题字段 | string | title |
| showHome | 自动模式是否显示首页 | boolean | false |
| homeLabel | 首页文案 | string | 首页 |
| homePath | 首页 path | string | / |
| clickableLast | 最后一项是否可点击 | boolean | false |

### Events

| 事件名 | 说明 | 参数 |
| :-- | :-- | :-- |
| item-click | 点击面包屑项时触发 | `(item: BreadcrumbItem)` |

### Slots

| 插槽名 | 说明 | 作用域 |
| :-- | :-- | :-- |
| item | 自定义每一项渲染 | `{ item, index }` |
| separator | 自定义分隔符 | - |

