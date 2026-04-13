---
layout: doc
---

# AuTable 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

### 基础用法

:::demo
AuTable/base
:::

### 表头样式修改

:::demo 参考`element-plus`配置`header-cell-style`属性即可
AuTable/headerCellStyle
:::

### 斑马线表格

:::demo 在`au-table`标签中添加`stripe`
AuTable/stripe
:::

### 表格 loading

:::demo 在`au-table`标签中添加`tableLoading`，loading 文字设置`loadingText`即可
AuTable/tableLoading
:::

### 边框表格--`table`数据方式

:::demo 在`table`对象中添加属性`border:true`
AuTable/border
:::

### 边框表格--`AuTable`标签方式

:::demo 在`AuTable`标签中添加`border`即可
AuTable/borderCom
:::

### 表格大小

:::demo 在`table`标签中添加`size:'small'`设置表格大小，可选值`large`、`default`、`small`
AuTable/size
:::

### 对齐方式

:::demo 在`AuTable`标签中添加`align:'center'`设置整个 table 对齐方式，在`columns`中设置`align`设置每列对齐方式（`columns优先级`高于`整体的对齐方式`）----`align`可选值`left`、`center`、`right`
AuTable/align
:::

### 基本表尾合计

:::demo 在`AuTable`标签中添加`show-summary`,默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过 sum-text 配置），其余列会将本列所有`数值`(不区分`Number`与`String`类型)进行求合操作，并显示出来。
AuTable/showSummary
:::

### 自定义表尾合计

:::demo 在`AuTable`标签中添加`show-summary`,自定义合计逻辑：使用 `summary-method` 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，可以是一个 VNode 或 String。
AuTable/summaryMethod
:::

### 常规排序

:::demo 在`columns`某一项中添加`sort`或`sortable`
AuTable/sort
:::

### 指定数据排序

:::demo 在`columns`某一项中添加`sort:true`或`sortable:true`,在`bind`中添加`sortMethod`来指定按照哪个属性数据排序
AuTable/sortMethod
:::

### 特定项远程排序

:::demo 在`columns`某一项中添加`sort:custom`或`sortable:custom`,则代表用户希望远程排序，需要监听 `Table` 的 `sort-change` 事件
AuTable/sortCellChange
:::

### 自定义排序规则

:::demo 在`AuTable`组件标签中添加`sortable:custom`,则表示需要自定义排序，需要监听 `Table` 的 `sort-change` 事件
AuTable/sortable
:::

### 复选框表格

:::demo 在`table`对象中添加`firstColumn:{ type: 'selection', fixed: true }`
AuTable/selection
:::

### 复选框表格--翻页选中功能 selectionDisabled

:::demo 在`table`对象中添加`firstColumn:{ type: 'selection', isPaging: true , fixed: true }`
AuTable/pageCheck
:::

### 复选框表格--禁用功能

:::demo 在`table`对象中添加`firstColumn:{ type: 'selection', selectable: selectableFun }`;`selectableFun`的返回值用来决定这一行的 `CheckBox` 是否可以勾选。
AuTable/selectionDisabled
:::

### 表格--筛选功能

:::demo 在`columns`列中某一项的`bind`中设置`filters`和`filter-method`属性即可开启该列的筛选，`filters`是一个数组，`filter-method` 是一个方法，它用于决定某些数据是否显示， 会传入`三个参数`：`value`、 `row` 、`column`。
AuTable/filterMethod
:::

### 单选框表格

:::demo 在`table`对象中添加`firstColumn:{ type: 'radio', fixed: true }`,可以再次点击取消选中；添加`@radioChange`事件传当前选中行是数据；默认点击整行选中 可以设置`rowClickRadio：false`,只有点击单选框才选中
AuTable/radio
:::

### 单选框--默认选中项及开启点击整行选中

:::demo 在`table`对象中添加`firstColumn:{ type: 'radio', fixed: true }`,可以再次点击取消选中；添加`@radioChange`事件传当前选中行是数据；默认点击整行选中,defaultRadioCol: 表默认选中项
AuTable/radioDefault
:::

### 单选框--禁用

:::demo `table`的`data` 数据源满足某条件时，新增`isRadioDisabled`属性为`true`，禁用单选。
AuTable/isRadioDisabled
:::

### 序列号表格

:::demo 在`table`对象中添加`firstColumn:{ type: 'index', fixed: true }`；可以新增`label`属性来定义表头名默认'序号'
AuTable/serialNum
:::

### 第一列显示复选框和序列号

:::demo
AuTable/selectionIndex
:::

### 第一列显示单选框和序列号

:::demo
AuTable/radioIndex
:::

### Table empty 插槽使用<el-tag>1.4.15</el-tag>

:::demo
AuTable/emptySlot
:::

### Table empty-text 使用

:::demo
AuTable/emptyText
:::

### 双击单元格复制(默认不开启)

:::demo 若需要关闭（在 AuTable 标签中设置属性：`isCopy:true`）
AuTable/isCopy
:::

### 集成分页器

:::demo
AuTable/isShowPagination
:::

### 分页器-设置 layout 自定义插槽使用

:::demo
AuTable/paginationSlot
:::

### 动态列显示隐藏<el-tag>1.4.16</el-tag>

:::demo 在`columns`中某项动态设置`isShowCol`，默认`false`显示,`true`隐藏,也可以是`function`。
AuTable/isShowCol
:::

### 字典过滤渲染

:::demo `columns`中某项添加`filters: { list: 'statusList', key: 'id', label: 'label' }`；`table`中添加`listTypeInfo: { statusList:[数据源] }`字典类型的数据源
AuTable/filters
:::

### 某列 render 渲染

:::demo
AuTable/render
:::

### 某列 作用域插槽渲染

:::demo
AuTable/slotName
:::

### 自定义表头渲染

:::demo
AuTable/renderHeader
:::

### 列--动态显示隐藏且拖动排序

:::demo 在`AuTable标签`中设置`columnSetting`开启`并且`需要设置`name`属性且在项目中`必须`保持唯一性。属性`columnSetBind`配置更改 button 样式：继承`el-button`所有属性;
AuTable/columnSetting
:::

### 行--拖拽排序

:::demo 属性`isRowSort`是否开启行拖拽排序;事件`@rowSort`，返回最终排序的 table 数据;`注意`: `row-key` 需要设置，否则拖动排序可能显示不正常
AuTable/rowSort
:::

### 行--拖拽排序第一列显示拖拽图标<el-tag>1.4.15</el-tag>

:::demo 属性`isRowSort`是否开启行拖拽排序;属性`isRowSortIcon`是否仅显示第一列显示拖拽图标仅在`图标上进行拖拽`，配置属性`rowSortIconBind`；事件`@rowSort`，返回最终排序的 table 数据;`注意`: `row-key` 需要设置，否则拖动排序可能显示不正常
AuTable/isRowSortIcon
:::

### 表头合并单元格（多级表头）

:::demo 只需要配置`columns`中某项新增`children：Array[]`属性;表头合并自动加边框
AuTable/multileHead
:::

### 表头合并（多级表头）-插槽使用

:::demo 只需要配置`columns`中某项新增`children：Array[]`属性;表头合并自动加边框
AuTable/slotNameMerge
:::

### 多级表头--单元格编辑

:::demo
AuTable/multileHeadEdit
:::

### 多级表头--自定义表头<el-tag>v1.5.1</el-tag>

:::demo 只需在`columns`配置`renderHeader`,建议使用`tsx`或`jsx`编写
AuTable/multileHeadRenderHeader
:::

### 表格操作按钮

:::demo `operator数组`：`operator 数组`是显示按钮数且点击后将当前行数据传出；`operatorConfig` 对象是操作列样式（可以设置宽度/列标题及是否固定在最左/右侧）；按钮的颜色是以 `ElementUI` 内置 `button` 的 `type` 为准；隐藏按钮——`noshow`:多种状态控制按钮的显示与隐藏；例如：`noshow:[{key:'fields',val:'isHasVal'},{key:'status',val:[0,1,99]},{key:'channelCode',val:['bank']}]`；注释： `noshow` 中的 `key` 值(fields/status/channelCode)是表格后台返回的字段； 当 `val` 等于字符串'isHasVal'时,字段'fields'返回为空时，此行操作按钮隐藏； `以上综合：`当'status'为 0/1/99 并且'channelCode'为'bank'及'fields'为空时；`show: { key: 'status', val: [3,4] }`表 status 值为 3 或者 4 时，显示此操作健 根据后台字段返回是数字还是字符串来显示
AuTable/operator
:::

### 自定义操作按钮样式

:::demo 设置`operator`数组中的`bind对象`继承`el-button`所有属性
AuTable/operatorBtn
:::

### 操作按钮 render 方式

:::demo 设置`operator`数组中的` render函数``遵循tsx方式 `
AuTable/operatorRender
:::

### 操作按钮插槽方式

:::demo
AuTable/operatorSlotName
:::

### 操作按钮--显示更多 <el-tag>v1.5.2</el-tag>

:::demo 在`operator`操作列数组中设置`isMore`为 true，即可显示更多按钮，默认鼠标移入显示下拉操作按钮，在`operatorConfig`中设置`dropdownBind`对象，可配置`btnBind`来配置更多按钮样式；`menuBind`来配置下拉菜单`el-dropdown-menu`样式。在`operator`每项中设置`itemBind`来配置`el-dropdown-item`样式

AuTable/operatorMore
:::

### Tree-Table

:::demo 按照`el-table`方式配置；新增`isTree`属性——其作用是布局 AuTable-Tree 样式
AuTable/treeTable
:::

### 超级 TreeTable 使用

:::demo 按照`el-table`方式配置
AuTable/treeMenuTable
:::

### Tree 菜单

:::demo 按照`el-table`方式配置
AuTable/menuMange
:::

### 单元格编辑功能

:::demo
AuTable/configEdit
:::

### 单元格单独编辑

:::demo
AuTable/configEditUse
:::

### 单元格编辑--键盘事件

:::demo `isKeyup` 单元格编辑是否开启键盘事件;向上、向下、回车横向的下一个输入框
AuTable/singleEditKeyup
:::

### 单元格编辑--使用组件事件

:::demo `eventHandle`继承第三方组件事件，根据第三方组件事件传参，若第三方组件事件`本身有参数`则返回`三`个参数不然就是后`两`个参数：第一个就是本身自己带的参数，第二个是`porp`，第三个是`scope`(`scope.row`)--就是当前行的数据；`scope.$index`就是当前行数
AuTable/eventHandle
:::

### 单元格编辑--校验 rules

:::demo `columns`: `columns`某一项的 rules;`table`: rules; `saveMethod方法`:singleEdit.value.saveMethod((data) => {console.log('callback 返回数据', data)})
AuTable/rules
:::

### 单元格编辑--columns 校验

:::demo `columns`: `columns`某一项的 rules;`table`: rules; `saveMethod方法`:singleEdit.value.saveMethod((data) => {console.log('callback 返回数据', data)});`save方法`：`const tableData = await singleEdit.value.save()`接收一个`Promise`对象。
AuTable/rulesCol
:::

### 单元格编辑--AuSelectTable 校验 rules

:::demo
AuTable/rulesSelectTable
:::

### 单元格编辑-- 回显 AuSelectTable

:::demo
AuTable/echoSelectTable
:::

### 单元格编辑--重置 AuSelectTable

:::demo 调用`resetTselectTable`方法，重置 AuSelectTable 数据
AuTable/rulesSelectTableRefs
:::

### 单元格编辑--底部按钮插槽使用

:::demo 标签添加`isShowFooterBtn`属性，展示保存按钮，并点击按钮触发 `save`事件，返回当前可编辑的所有数据；若需要`自定义操作区`则需要使用`footer`插槽；`footerBtnAlign`: AuTable 底部按钮对齐方式,有三个值：`left`、`center`、`right`。
AuTable/footerSlot
:::

### 单元格编辑--单击开启模式

:::demo
AuTable/editSingle
:::

### 展开行

:::demo 在`table`对象中添加`firstColumn:{ type: 'expand', fixed: true }` `expand`作用域插槽，解构传出`{scope}`
AuTable/expand
:::

### AuTable 参数配置

---

### 1、代码示例

```html
<au-table
  :table="table"
  :columns="table.columns"
  @size-change="handlesSizeChange"
  @page-change="handlesCurrentChange"
/>
```

### 2、配置参数（Table Attributes）

| 参数                                                       | 说明                                                                      | 类型             | 默认值                                     |
| :--------------------------------------------------------- | :------------------------------------------------------------------------ | :--------------- | :----------------------------------------- |
| table                                                      | 表格数据对象                                                              | Object           | {}                                         |
| ---layout                                                  | 分页组件布局(参考 el-pagination Api)                                      | String           | `'total,sizes, prev, pager, next, jumper'` |
| ---rules                                                   | 规则（可依据 elementPlus el-form 配置————对应 columns 的 prop 值）        | Object           | -                                          |
| ---border                                                  | 是否开启边框线                                                            | Boolean          | false                                      |
| ---data                                                    | 展示数据                                                                  | Array            | []                                         |
| ---toolbar                                                 | 表格外操作栏选中表格某行，可以将其数据传出                                | Array            | []                                         |
| ---operator                                                | 表格内操作栏数据                                                          | Array            | []                                         |
| -------hasPermi                                            | 表格内操作栏按钮权限资源（必须传`btnPermissions`属性才生效）              | String           | -                                          |
| -------show                                                | 表格内操作栏根据状态显示                                                  | Object           | -                                          |
| -------render                                              | render 函数渲染使用的 Function(val) 可以用 tsx 方式                       | Function         | -                                          |
| -------noshow                                              | 表格内操作栏根据多种状态不显示                                            | Array            | -                                          |
| -------bind                                                | 继承 el-button 所有 Attributes                                            | Object           | -                                          |
| -------fun                                                 | 事件名,参数（当前行数据，scope.$index，整个 table 数据）                  | function         | -                                          |
| -------isDisabled                                          | 操作按钮禁用,参数（当前行数据，当前操作项）                               | function         | -                                          |
| -------isMore                                              | 是否增加在更多按钮下                                                      | Boolean          | false                                      |
| -------itemBind                                            | el-dropdown-item Attributes                                               | Object           | -                                          |
| ---operatorConfig                                          | 表格内操作栏样式                                                          | Object           | -                                          |
| --------fixed                                              | 列是否固定在左侧或者右侧。 true 表示固定在左侧(true / 'left' / 'right')   | string / boolean | -                                          |
| --------label                                              | 显示的标题                                                                | string           | '操作'                                     |
| --------width                                              | 对应列的宽度(固定的)                                                      | string / number  | -                                          |
| --------minWidth                                           | 对应列的最小宽度(会把剩余宽度按比例分配给设置了 min-width 的列)           | string / number  | -                                          |
| --------align                                              | 对齐方式 （left / center / right）                                        | string           | 'center'                                   |
| --------bind                                               | el-table-column Attributes                                                | Object           | -                                          |
| --------style                                              | 操作按钮整行样式                                                          | Object           | -                                          |
| --------dropdownBind                                       | 更多按钮配置项                                                            | Object           | -                                          |
| ---firstColumn                                             | 表格首列(序号 index,复选框 selection,单选 radio,展开行 expand）排列       | object/Array     | -                                          |
| ---total                                                   | 数据总条数                                                                | Number           | -                                          |
| ---pageSize                                                | 页数量                                                                    | Number           | -                                          |
| ---currentPage                                             | 是否需要显示切换页条数                                                    | Number           | -                                          |
| columns                                                    | 表头信息                                                                  | Array            | []                                         |
| ----sort                                                   | 排序 （设置：sort:true）                                                  | Boolean          | false                                      |
| ----sortable                                               | 排序，若设置为 'custom'，需要监听 Table 的 sort-change 事件               | Boolean /string  | false                                      |
| ----align                                                  | 对齐方式 （left / center / right）                                        | string           | 'center'                                   |
| ----renderHeader                                           | 列标题 Label 区域渲染使用的 Function(val) 可以用 jsx 方式                 | Function         | -                                          |
| ----render                                                 | 某列 render 函数渲染使用的 Function(val) 可以用 jsx 方式                  | Function         | -                                          |
| ----bind                                                   | el-table-column Attributes                                                | Object           | -                                          |
| ----width                                                  | 对应列的宽度(固定的)                                                      | string / number  | -                                          |
| ----minWidth                                               | 对应列的最小宽度(会把剩余宽度按比例分配给设置了 min-width 的列)           | string / number  | -                                          |
| ----slotName                                               | 插槽显示此列数据（其值是具名作用域插槽                                    | String           | -                                          |
| ----isShowCol                                              | 动态显示隐藏列                                                            | Boolean/Function | false                                      |
| ----isShowHidden<el-tag type="danger"> deprecated</el-tag> | 是否动态显示隐藏列设置（隐藏/显示列）                                     | Boolean          | false                                      |
| ----slotNameMerge                                          | 合并表头插槽显示此列数据（其值是具名作用域插槽）                          | String           | -                                          |
| ----------scope                                            | 具名插槽获取此行数据必须用解构接收{scope}.row 是当前行数据 }              | Object           | -                                          |
| ----canEdit                                                | 是否开启单元格编辑功能                                                    | Boolean          | false                                      |
| ----isClickEdit                                            | 是否开启单击-单元格编辑功能                                               | Boolean          | false                                      |
| ----isShowEditIcon                                         | 开启单击-单元格编辑后表头是否显示编辑图标                                 | Boolean          | false                                      |
| ----editIconAlign                                          | 编辑 icon 表头的对齐方式(可选值：flex-end、center、flex-start)            | String           | 'center'                                   |
| ----configEdit                                             | 表格编辑配置（开启编辑功能有效）                                          | Object           | -                                          |
| ----------rules                                            | 规则（可依据 elementPlus el-form 配置————对应 columns 的 prop 值）        | Object           | -                                          |
| ----------label                                            | placeholder 显示                                                          | String           | -                                          |
| ----------editComponent                                    | 组件名称可直接指定全局注册的组件，也可引入'element'如：'el-input'         | String/component | -                                          |
| ----------eventHandle                                      | 第三方 UI 的 事件（返回三个参数，需解构获取{val,prop,scope}）             | Object           | -                                          |
| ----------bind                                             | 第三方 UI 的 Attributes，（`Function`返回值 scope）                       | Object/Function  | -                                          |
| ----------event                                            | 触发 handleEvent 事件的标志                                               | String           | -                                          |
| ----------type                                             | 下拉或者复选框显示（select-arr/select-obj/checkbox）                      | String           | -                                          |
| ----------list                                             | 下拉选择数据源名称                                                        | String           | -                                          |
| ----------arrLabel                                         | type:select-arr/radio/checkbox 时对应显示的中文字段                       | String           | label                                      |
| ----------arrKey                                           | type:select-arr/radio/checkbox 时对应显示的数字字段                       | String           | key                                        |
| ----------ref                                              | 当前使用组件的 ref 标识（可以通过 getRefs 事件返回）                      | String           | -                                          |
| ----------isShowTips                                       | 开启单击-单元格编辑后鼠标移入是否显示 tip                                 | Boolean          | false                                      |
| ----------tipbind                                          | 继承 el-tooltip 的所有属性                                                | Object           | -                                          |
| ----filters                                                | 字典过滤                                                                  | Object           | -                                          |
| ----------list                                             | listTypeInfo 里面对应的下拉数据源命名                                     | String           | -                                          |
| ----------key                                              | 数据源的 key 字段                                                         | String           | 'value'                                    |
| ----------label                                            | 数据源的 label 字段                                                       | String           | 'label'                                    |
| btnPermissions                                             | 按钮权限数据集（后台返回的按钮权限集合）                                  | Array            | -                                          |
| listTypeInfo                                               | 下拉选择数据源                                                            | Object           | -                                          |
| footer                                                     | 底部操作区（默认隐藏，使用插槽展示“保存”按钮）                            | slot             | -                                          |
| pagination                                                 | 分页器自定义内容 设置文案(table 设置 layout 才生效)                       | slot             | -                                          |
| isKeyup                                                    | 单元格编辑是否开启键盘事件                                                | Boolean          | false                                      |
| isShowFooterBtn                                            | 是否显示保存按钮                                                          | Boolean          | false                                      |
| title                                                      | 表格左上标题                                                              | String /slot     | -                                          |
| tableTitle                                                 | 表格左上标题（为解决顶层容器会出现原生的 title 属性）同时存在优先展示插槽 | String /slot     | -                                          |
| isShowPagination                                           | 是否显示分页(默认显示分页)                                                | Boolean          | true                                       |
| isPaginationCumulative                                     | 序列号显示是否分页累加                                                    | Boolean          | false                                      |
| isCopy                                                     | 是否允许双击单元格复制                                                    | Boolean          | false                                      |
| defaultRadioCol                                            | 设置默认选中项（单选）defaultRadioCol 值必须大于 0！                      | Number           | -                                          |
| rowClickRadio                                              | 是否开启点击整行选中单选框                                                | Boolean          | true                                       |
| columnSetting                                              | 是否显示设置（隐藏/显示列）                                               | Boolean          | false                                      |
| name                                                       | 开启列拖拽，缓存唯一性标识(如果没有设置 name 取 title 或 tableTitle)      | String           | -                                          |
| isRowSort                                                  | 是否开启行拖拽(`row-key` 需要设置) 可以在整行进行拖拽                     | Boolean          | false                                      |
| isRowSortIcon                                              | 是否第一列显示行拖拽图标，且只能在图标上进行拖拽(`row-key` 需要设置)      | Boolean          | false                                      |
| rowSortIconBind                                            | 第一列显示拖拽的配置                                                      | Object           | -                                          |
| isTree                                                     | 是否开启 Tree-table 样式                                                  | Boolean          | false                                      |
| columnSetBind                                              | 列设置按钮配置（继承`el-button`所有属性）                                 | Object           | -                                          |
| ----btnTxt                                                 | 按钮显示文字                                                              | String           | '列设置'                                   |
| ----title                                                  | 点击按钮下拉显示 title                                                    | String           | '列设置'                                   |
| ----isShowTitle                                            | 点击按钮下拉是否显示 title                                                | Boolean          | true                                       |
| ----size                                                   | el-button 的 size                                                         | String           | 'default'                                  |
| ----icon                                                   | el-button 的 icon                                                         | String           | 'Setting'                                  |
| align                                                      | table 对齐方式 可选值`left`、`center`、`right`                            | String           | 'center'                                   |
| isSlotToolbar                                              | AuAdaptivePage 组件是否使用了 Toolbar 插槽                                | Boolean          | false                                      |
| isSlotTitle                                                | AuAdaptivePage 组件是否使用了 title 插槽                                  | Boolean          | -                                          |
| sortable                                                   | 设置为 'custom',需要监听 Table 的 sort-change 事件                        | Boolean/string   | -                                          |
| border                                                     | 是否开启边框线                                                            | Boolean          | false                                      |
| tableLoading                                               | table loading                                                             | Boolean          | false                                      |
| loadingTxt                                                 | table loading 文字提示                                                    | string           | 加载中...                                  |
| useVirtual                                                 | table 是否开启虚拟滚动                                                    | Boolean          | false                                      |
| virtualShowSize                                            | 虚拟列表的渲染行数                                                        | Number           | 30                                         |
| footerBtnAlign                                             | AuTable 底部插槽操作布局方式有三个值（`left` `center` `right`）           | String           | 'right'                                    |

### 3、events 其他事件按照 el-table 直接使用（如 sort-change 排序事件）

| 事件名        | 说明                                   | 返回值                                        |
| :------------ | :------------------------------------- | :-------------------------------------------- |
| page-change   | 当前页码                               | 当前选中的页码                                |
| save          | 保存按钮                               | 编辑后的所有数据                              |
| handleEvent   | 单个输入触发事件                       | configEdit 中的 event 值和对应输入的 value 值 |
| radioChange   | 单选选中事件                           | 返回当前选中的整行数据                        |
| rowSort       | 行拖拽排序后触发事件                   | 返回排序后的 table 数据                       |
| validateError | 单元格编辑保存校验不通过触发           | 返回校验不通过的 prop--label 集合             |
| getRefs       | 获取 AuTable 单元格编辑 使用组件的 ref | -                                             |

### 4、Methods 方法 继承 el-table 所有方法(Expose)

| 事件名             | 说明                                                           | 返回值              |
| :----------------- | :------------------------------------------------------------- | :------------------ |
| saveMethod         | 单元格编辑保存方法                                             | callback(tableData) |
| save               | 单元格编辑后调用 save 方法返回 Promise                         | Promise(tableData)  |
| resetFields        | 对表单进行重置，并移除校验结果（单元格编辑时生效）             | —                   |
| clearValidate      | 清空校验规则（单元格编辑时生效）                               | -                   |
| defaultRadioSelect | 单选默认选中--且只能默认选中第一页的数据--传入值必须大于等于 1 | -                   |
| reSetColumnSet     | 开启 columnSetting，调用此方法 columnSet 显示修改后缓存数据    | -                   |
| clearRadioHandle   | 清除单选框选中状态                                             | -                   |
| resetTselectTable  | 单元格编辑时清除下拉选择表格数据                               | -                   |

### 5、Slots 插槽

| 插槽名     | 说明                                                | 参数  |
| :--------- | :-------------------------------------------------- | :---- |
| title      | AuTable 左侧 Title                                  | -     |
| titleTip   | AuTable 头部 tip                                    | -     |
| toolbar    | AuTable 右侧 toolbar                                | -     |
| expand     | table.firstColumn.type：`expand` 展开行插槽         | scope |
| -          | el-table-column 某列自定义插槽（slotName 命名）     | scope |
| -          | el-table-column 单元格编辑插槽（editSlotName 命名） | scope |
| -          | el-table-column 表头合并插槽（slotNameMerge 命名）  | scope |
| -          | 操作列前一列自定义默认内容插槽                      | -     |
| footer     | 底部操作区具名插槽需要设置`isShowFooterBtn`         | -     |
| pagination | 分页器自定义内容 设置文案(table 设置 layout 才生效) | -     |
