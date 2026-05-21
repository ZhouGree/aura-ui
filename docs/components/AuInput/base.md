---
layout: doc
---

# AuInput 输入框组件

### 简介

增强型输入框组件，支持金额千分位、手机号、身份证等特定格式自动格式化和校验。采用策略模式设计，通过 inputType 属性灵活切换不同输入类型的处理逻辑，减少重复代码，提升表单开发效率。

#### 代码示例

```html
<au-input v-model="value" placeholder="请输入内容" :input-type="'text'" />
```

#### 基础用法

:::demo 展示输入框的基本使用方式，支持多种输入类型和格式化
AuInput/base
:::

### 格式化输入

:::demo 设置 `inputType="amount"` 实现金额输入，支持千分位显示和小数点限制
AuInput/amount
:::

:::demo 设置 `inputType="amount"` 并开启 `isTip` 显示中文提示，注意此时不支持千分位
AuInput/amountTip
:::

:::demo 使用 `formatter` 和 `parser` 自定义输入输出格式
AuInput/formatter
:::

### 类型校验

:::demo 设置 `inputType="phone"` 进行手机号格式校验
AuInput/phone
:::

:::demo 设置 `inputType="integer"` 只允许输入整数
AuInput/integer
:::

:::demo 设置 `inputType="decimal"` 限制小数位数，默认 2 位
AuInput/decimal
:::

:::demo 设置 `inputType="idCard"` 进行身份证号码校验
AuInput/idCard
:::

### 特殊类型

:::demo 设置 `type="textarea"` 转换为文本域，通过 `rows` 属性控制高度
AuInput/textarea
:::

:::demo 通过 prepend 和 append 插槽添加前置和后置元素
AuInput/compoundType
:::

### 样式配置

:::demo 通过 `size` 属性指定输入框尺寸，可选值为 medium、small、mini
AuInput/size
:::

:::demo 使用插槽自定义输入框内容，遵循 el-input 的插槽用法
AuInput/slot
:::

### 组件配置

<AuInputTabs />
