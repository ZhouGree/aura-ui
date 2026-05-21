---
layout: doc
---

# AuDatePicker 日期组件

### 简介

增强型日期选择器，支持日期、时间、范围等多种选择模式，内置常用快捷选项（今天、本周、本月等）。范围选择支持时分秒精度，满足精细化时间查询需求。

#### 基础用法

::: demo
AuDatePicker/singleDate
:::

#### 代码示例

```html
<au-date-picker v-model="date" type="date" placeholder="请选择日期" />
```

### 基础功能

::: demo
AuDatePicker/singleDate
:::

### 日期范围选择

::: demo
AuDatePicker/dateRange
:::

### 月份范围选择

::: demo
AuDatePicker/month
:::

### 日期时间范围选择

::: demo
AuDatePicker/dateTime
:::

### 插槽自定义功能

::: demo
AuDatePicker/slotCustomize
:::

### 组件配置

<au-date-picker-tabs />
