---
layout: doc
---

# AuModuleForm 模块表单/详情组件

### 简介

复杂表单场景解决方案，支持多分组折叠/展开、表单/详情模式切换和标签页集成。适用于字段较多、需要分组展示或需要查看/编辑模式切换的业务场景。

#### 代码示例

```html
<au-module-form :form-modules="formModules" :mode="'form'" @submit="handleSubmit" />
```

#### 基础用法

:::demo 展示模块表单的基本使用方式，支持多分组折叠和表单/详情模式切换
AuModuleForm/index
:::

### 表单模式

:::demo 通过插槽自定义模块内容
AuModuleForm/slotName
:::

:::demo 通过 `disabled` 属性控制模块是否可展开
AuModuleForm/disabled
:::

:::demo 通过 `labelPosition` 属性设置标签对齐方式
AuModuleForm/labelPosition
:::

:::demo 通过 `rules` 属性配置表单校验规则
AuModuleForm/rules
:::

:::demo 配置校验错误提示样式
AuModuleForm/validateError
:::

:::demo 通过 footer 插槽自定义底部按钮
AuModuleForm/footer
:::

:::demo 通过 tabs 属性在最后一个模块显示标签页
AuModuleForm/tabs
:::

:::demo 通过 extra 插槽自定义标题右侧内容
AuModuleForm/extra
:::

:::demo 通过 titleBtn 插槽自定义模块标题右侧按钮
AuModuleForm/titleBtn
:::

### 详情模式

:::demo 详情模式的基本使用
AuModuleForm/detail
:::

:::demo 通过 `span` 属性配置详情展示的列数
AuModuleForm/detailspan
:::

:::demo 通过 tooltip 属性显示提示信息
AuModuleForm/tooltip
:::

:::demo 通过插槽自定义详情模块内容
AuModuleForm/detailslot
:::

:::demo 通过 value 插槽自定义字段值显示
AuModuleForm/detailslotName
:::

:::demo 设置模块禁止收缩
AuModuleForm/detaildisabled
:::

:::demo 通过 detailTitleBtn 插槽自定义详情模块标题右侧按钮
AuModuleForm/detailTitleBtn
:::

### 通用配置

:::demo 通过 `isGoBackEvent` 自定义返回事件处理
AuModuleForm/isGoBackEvent
:::

:::demo 通过 `isShowBack` 控制是否显示返回图标
AuModuleForm/isShowBack
:::

:::demo 通过 `isShowHeader` 控制是否显示头部
AuModuleForm/isShowHeader
:::

### 组件配置

<AuModuleFormTabs />
