---
layout: doc
---

# AuDetail 详情组件

### 基础用法

:::demo
AuDetail/base
:::

### 加边框

:::demo
AuDetail/border
:::

### 每行展示多少项

:::demo
AuDetail/descColumn
:::

### 垂直布局

:::demo
AuDetail/vertical
:::

### 插槽显示

:::demo
AuDetail/slotName
:::

### 字典回显

:::demo 需要配置：`listTypeInfo`和`dataList`
AuDetail/echo
:::

### tooltip 显示

:::demo
AuDetail/tooltip
:::

### label 不显示冒号

:::demo
AuDetail/isColon
:::

### label 文字不加粗

:::demo
AuDetail/isLabelBold
:::

### label render 显示

:::demo
AuDetail/labelRender
:::

### AuDetail Attributes

---

### 1、代码示例

> `详情组件————可实现表单回显`

```html
<!-- 常规模式 -->
<au-detail :descData="descData" />
<!-- 字典回显模式 -->
<au-detail :descData="descData" :dataList="dataList" :listTypeInfo=="listTypeInfo" />
```

### 2、配置参数（Attributes）继承 el-descriptions el-descriptions-item Attributes

| 参数          | 说明                                               | 类型            | 默认值       |
| :------------ | :------------------------------------------------- | :-------------- | :----------- |
| descData      | 详情页面数据源                                     | Array           | -            |
| ----label     | 详情字段说明标题                                   | String          | -            |
| ----value     | 详情字段返回值                                     | String          | -            |
| ----fieldName | value 返回值的字段                                 | String          | -            |
| ----slotName  | 插槽（自定义 value）                               | slot            | -            |
| ----bind      | 继承 el-descriptions-item 属性                     | Object          | -            |
| ----span      | 占用的列宽，默认占用 1 列，最多 4 列               | Number          | 1            |
| ----unit      | value 值后面占位（通常:单位）                      | String          | -            |
| ----tooltip   | value 值的提示语                                   | String/function | -            |
| ----iconSize  | tooltip 提示语的 icon 大小                         | String/Number   | 继承字体大小 |
| ----iconColor | tooltip 提示语的 icon 颜色                         | String          | 继承颜色     |
| ----filters   | 字典类型（即后台返回的是数字类型）过滤转成中文     | Object          | -            |
| -------list   | 字典 list 定义的数据名即 listTypeInfo 里面对应的值 | String          | -            |
| -------key    | 下拉数据源的 key 字段                              | String          | 'value'      |
| -------label  | 下拉数据源的 label 字段                            | String          | 'label'      |
| descColumn    | 布局一行显示几列（默认：一行显示 4 列）            | Number          | 4            |
| isColon       | 是否显示冒号                                       | Boolean         | true         |
| isLabelBold   | label 是否加粗显示                                 | Boolean         | true         |
| labelRender   | 自定义 label                                       | function        | -            |
| dataList      | 开启 filters 时详情接口返回的数据                  | Object          | {}           |
| listTypeInfo  | 开启 filters 时下拉数据源                          | Object          | {}           |

### 3、继承 el-descriptions events
