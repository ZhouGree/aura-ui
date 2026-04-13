---
layout: doc
---

# AuSelectIcon elemnt-plus 图标选择组件

### 基本使用

:::demo
AuSelectIcon/base
:::

### 是否显示弹窗搜索框

:::demo
AuSelectIcon/isShowSearch
:::

### 是否显示选中后的图标

:::demo
AuSelectIcon/isShowIcon
:::

### selectBind 属性配置

:::demo
AuSelectIcon/selectBind
:::

### AuSelectIcon Attributes

---

### 1、代码示例

```html
<au-select-icon v-model="selectVlaue" />
```

### 2、配置参数（Attributes）继承 el-input Attributes

| 参数         | 说明                 | 类型       | 默认值                                                                                                             |
| :----------- | :------------------- | :--------- | :----------------------------------------------------------------------------------------------------------------- |
| v-model      | 绑定值               | string     | -                                                                                                                  |
| prefixIcon   | 输入框前缀 icon      | string     | Search                                                                                                             |
| isShowSearch | 是否显示搜索图标     | Boolean    | true                                                                                                               |
| isShowIcon   | 是否显示选中后的图标 | Boolean    | true                                                                                                               |
| selectBind   | Attributes           | selectBind | `"prefix-icon": props.prefixIcon, placeholder: "请选择图标",dialogTitle:'请选择图标',clearable: true,width: "50%"` |

### 3、事件（events）继承 el-input 属事件

| 事件名 | 说明       | 回调参数            |
| :----- | :--------- | :------------------ |
| select | 选择完图标 | 返回选中的图标 name |

### Exposes（Method）

| Method    | 说明       |
| :-------- | :--------- |
| clearIcon | 重置选中项 |
