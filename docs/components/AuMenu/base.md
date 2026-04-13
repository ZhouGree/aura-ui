---
layout: doc
---

# AuMenu 菜单组件

### 基础用法

::: demo
AuMenu/base
:::

### 权限过滤

::: demo
AuMenu/permission
:::

### Attributes

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| menuList | 菜单数据 | MenuItem[] | [] |
| permissions | 权限码数组 | string[] | [] |
| permissionKey | 权限字段名（meta） | string | permission |
| defaultOpeneds | 默认展开菜单 | string[] | [] |
| uniqueOpened | 是否保持只展开一个父菜单 | boolean | true |
