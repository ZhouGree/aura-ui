---
layout: doc
---

# AuDrawer 抽屉组件

### 基础用法

:::demo
AuDrawer/base
:::

### 表单场景

:::demo
AuDrawer/form
:::

### 方向与尺寸

:::demo
AuDrawer/placement
:::

### 通过方法控制开关

:::demo
AuDrawer/methods
:::

### 遮罩逻辑

:::demo
AuDrawer/mask
:::

### 插槽

:::demo
AuDrawer/slot
:::

### Attributes

| 参数               | 说明                                | 类型                        | 默认值 |
| :----------------- | :---------------------------------- | :-------------------------- | :----- |
| modelValue         | 是否显示抽屉（v-model）             | boolean                     | false  |
| visible            | 兼容旧版显示控制                    | boolean                     | —      |
| title              | 抽屉标题                            | string                      | —      |
| placement          | 抽屉弹出方向                        | left / right / top / bottom | right  |
| size               | 抽屉尺寸（推荐使用）                | string / number             | 40%    |
| width              | 尺寸兼容字段                        | string / number             | 40%    |
| showMask           | 是否显示遮罩层                      | boolean                     | true   |
| maskClosable       | 点击遮罩是否关闭抽屉                | boolean                     | true   |
| closeOnEsc         | 按下 ESC 键是否关闭                 | boolean                     | true   |
| destroyOnClose     | 关闭时是否销毁内部内容              | boolean                     | false  |
| showClose          | 是否显示右上角关闭按钮              | boolean                     | true   |
| zIndex             | 抽屉层级                            | number                      | 2000   |
| footer             | 是否显示默认底部按钮栏              | boolean                     | true   |
| footerAlign        | 底部按钮对齐方式                    | left / center / right       | right  |
| confirm            | 确认前异步校验，返回 false 阻止关闭 |                             | —      |
| cancelText         | 取消按钮文字                        | string                      | 取消   |
| confirmText        | 确认按钮文字                        | string                      | 确定   |
| confirmButtonProps | 确认按钮属性配置                    | object                      | —      |
| cancelButtonProps  | 取消按钮属性配置                    | object                      | —      |

<!-- () => boolean | Promise<boolean> -->

### Events

| 事件名            | 说明             |
| :---------------- | :--------------- |
| update:modelValue | 显示状态同步     |
| update:visible    | 兼容旧版状态同步 |
| confirm           | 点击确认按钮     |
| cancel            | 点击取消按钮     |
| open              | 抽屉开始打开     |
| opened            | 抽屉打开动画完成 |
| close             | 抽屉开始关闭     |
| closed            | 抽屉关闭动画完成 |

### Slots

| 插槽名  | 说明       |
| :------ | :--------- |
| header  | 自定义头部 |
| default | 主体内容   |
| footer  | 自定义底部 |

### Exposes 方法

| 方法名  | 说明     |
| :------ | :------- |
| open()  | 打开抽屉 |
| close() | 关闭抽屉 |
