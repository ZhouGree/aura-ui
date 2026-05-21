<template>
  <au-tabs :tabs="tabs">
    <template #代码示例>
      <div class="api-table-wrapper">
        <pre class="language-html"><code class="language-html">&lt;au-query-condition
  :opts="opts"
  @submit="conditionEnter"
  @handleEvent="handleEvent"
  :loading="loading"
/&gt;</code></pre>
      </div>
    </template>

    <template #配置参数>
      <div class="api-table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>opts</td>
              <td>接收筛选器组件配置</td>
              <td>object</td>
              <td>无</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>查询按钮 loading 状态，请求数据时需要体现</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>reset</td>
              <td>是否显示“重置”按钮</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>maxVisibleRows</td>
              <td>收起时设置默认展示行数</td>
              <td>Number</td>
              <td>1</td>
            </tr>
            <tr>
              <td>boolEnter</td>
              <td>是否敲回车查询</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>isShowOpen</td>
              <td>是否显示“收起和展开”</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>packUpTxt</td>
              <td>收起文案</td>
              <td>String</td>
              <td>'收起'</td>
            </tr>
            <tr>
              <td>unfoldTxt</td>
              <td>展开文案</td>
              <td>String</td>
              <td>'展开'</td>
            </tr>
            <tr>
              <td>isExpansion</td>
              <td>是否默认展开</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>labelWidth</td>
              <td>labelWidth 宽度</td>
              <td>String</td>
              <td>'120px'</td>
            </tr>
            <tr>
              <td>btnCheckBind</td>
              <td>查询按钮配置（继承`el-button`所有属性）</td>
              <td>object</td>
              <td>`{type: primary, size: default,btnTxt:'查询'}`</td>
            </tr>
            <tr>
              <td>btnResetBind</td>
              <td>重置按钮配置（继承`el-button`所有属性）</td>
              <td>object</td>
              <td>`{ size: default,btnTxt:'重置'}`</td>
            </tr>
            <tr>
              <td>isFooter</td>
              <td>自定义按钮(设置:footer="false"不显示按钮)</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>configChangedReset</td>
              <td>更新 opts 是否重置（默认重置）</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isShowWidthSize</td>
              <td>是否开启动态设置每行显示数</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>widthSize</td>
              <td>每行显示多少项，最小值 2</td>
              <td>Number</td>
              <td>4</td>
            </tr>
            <tr>
              <td>isDropDownSelectMore</td>
              <td>是否以下拉方式展示更多条件</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
        <h4>以下拉方式展示更多条件--配置参数（Attributes）</h4>
        <table class="api-table">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>popoverAttrs</td>
              <td>el-popover 配置及中文文案</td>
              <td>object</td>
              <td>具体看源码</td>
            </tr>
            <tr>
              <td>moreCheckList</td>
              <td>数据源</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-----label</td>
              <td>标题</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-----comp</td>
              <td>组件名称，可直接指定全局注册的组件</td>
              <td>string/component</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-----isSelfCom</td>
              <td>是否使用自己封装的下拉组件（即没有 el-option）</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>-----prop</td>
              <td>接收字段（即后台接收字段）</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-----bind</td>
              <td>组件配置参数（Attributes）function 传出 form</td>
              <td>object/Function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-----slotName</td>
              <td>自定义输入框插槽</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-----span</td>
              <td>控件占用的列宽，默认占用 1 列，最大值 4 (独占一行)</td>
              <td>number</td>
              <td>1</td>
            </tr>
            <tr>
              <td>-----changeEvent</td>
              <td>事件名称</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-----defaultVal</td>
              <td>默认值</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-----type</td>
              <td>element 组件 type(radio,checkbox,select-arr,select-obj)</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-----arrLabel</td>
              <td>el-select/el-checkbox-group/el-radio-group 组件 options label 显示</td>
              <td>string</td>
              <td>label</td>
            </tr>
            <tr>
              <td>-----arrKey</td>
              <td>el-select/el-checkbox-group/el-radio-group 组件 options key 显示</td>
              <td>string</td>
              <td>key</td>
            </tr>
            <tr>
              <td>-----list</td>
              <td>el-select 组件 options 数据标识</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-----listTypeInfo</td>
              <td>el-select 组件 options 数据源</td>
              <td>object</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <h4>opts Attributes</h4>
        <table class="api-table">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>label</td>
              <td>表单字段说明标题</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义 class</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isSelfCom</td>
              <td>是否使用自己封装的组件（即不需要 el-option）</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>placeholder 提示语</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>labelRender</td>
              <td>自定义 label（render 函数 jsx 方式编写）</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>slotName</td>
              <td>自定义输入框插槽(作用域插槽解构接收{param/scope}返回当前所有表单初始值)</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>comp</td>
              <td>组件名称，可直接指定全局注册的组件，也可引入'elmentUI'如：Button 或者'el-button'</td>
              <td>string/component</td>
              <td>-</td>
            </tr>
            <tr>
              <td>span</td>
              <td>控件占用的列宽，默认占用 1 列，最多 4 列 (独占一行)</td>
              <td>number</td>
              <td>1</td>
            </tr>
            <tr>
              <td>arrLabel</td>
              <td>type=select-arr/radio/checkbox 时，每个下拉显示的中文</td>
              <td>String</td>
              <td>label</td>
            </tr>
            <tr>
              <td>arrKey</td>
              <td>type=select-arr/radio/checkbox 时，每个下拉显示的中文传后台的数字</td>
              <td>String</td>
              <td>key</td>
            </tr>
            <tr>
              <td>defaultVal</td>
              <td>默认值</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>bind</td>
              <td>继承第三方 UI 的 Attributes,function 传出 form</td>
              <td>object/function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>eventHandle</td>
              <td>配置组件事件，与写组件时 change 等同理</td>
              <td>object</td>
              <td>本身值，当前 formData 数据</td>
            </tr>
            <tr>
              <td>ref</td>
              <td>可以通过 getRefs 获取对应的 ref</td>
              <td>String</td>
              <td>当前项的 ref 标识</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #事件>
      <div class="api-table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>返回值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>handleEvent</td>
              <td>筛选器数据发生变化时触发</td>
              <td>event 标识, val：输入值,form:整个查询条件数据</td>
            </tr>
            <tr>
              <td>submit</td>
              <td>点击筛选器查询按钮时触发</td>
              <td>form:整个查询条件数据</td>
            </tr>
            <tr>
              <td>reset</td>
              <td>点击筛选器重置按钮时触发</td>
              <td>-</td>
            </tr>
            <tr>
              <td>getCheckList</td>
              <td>下拉动态添加条件（isDropDownSelectMore:true 生效）</td>
              <td>返回选中的条件项</td>
            </tr>
            <tr>
              <td>getRefs<el-tag>v1.5.1</el-tag></td>
              <td>获取 AuQueryCondition 使用组件的 ref</td>
              <td>opts 中 最好需要传 ref 标识来区分是哪个组件的 ref</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>插槽名</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>querybar</td>
              <td>按钮操作插槽（位置基于重置后面）</td>
            </tr>
            <tr>
              <td>footerBtn</td>
              <td>按钮操作插槽</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Exposes>
      <div class="api-table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>说明</th>
              <th>类型</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>queryState</td>
              <td>初始化表单数据</td>
              <td>object</td>
            </tr>
            <tr>
              <td>resetData</td>
              <td>重置表单不调用查询接口</td>
              <td>Function</td>
            </tr>
            <tr>
              <td>resetHandle</td>
              <td>重置表单调用查询接口</td>
              <td>Function</td>
            </tr>
            <tr>
              <td>checkHandle</td>
              <td>查询操作</td>
              <td>Function</td>
            </tr>
            <tr>
              <td>handleEvent</td>
              <td>动态修改查询条件值</td>
              <td>Function<au-tip content='(flag: boolean, {val: 需要修改的值}, dataIndex: string) => void'/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </au-tabs>
</template>

<script setup lang="ts">
const tabs = [
  { key: "代码示例", title: "代码示例" },
  { key: "配置参数", title: "配置参数（Attributes）" },
  { key: "事件", title: "事件（events）" },
  { key: "Slots", title: "Slots" },
  { key: "Exposes", title: "Exposes（Method）" },
]
</script>

<style scoped>
.api-table-wrapper {
  width: 100%;
}
.api-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
}
.api-table th,
.api-table td {
  padding: 12px 16px;
  border: 1px solid #e5e6eb;
  text-align: left;
  font-size: 14px;
}
.api-table th {
  background-color: #f7f8fa;
  font-weight: 500;
}
</style>
