<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-table Attributes</p>
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
              <td>table</td>
              <td>表格数据对象</td>
              <td>Object</td>
              <td>{}</td>
            </tr>
            <tr>
              <td>columns</td>
              <td>表头信息</td>
              <td>Array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>listTypeInfo</td>
              <td>下拉选择数据源</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>btnPermissions</td>
              <td>按钮权限数据集</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isShowPagination</td>
              <td>是否显示分页</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>tableLoading</td>
              <td>table loading</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loadingTxt</td>
              <td>table loading 文字提示</td>
              <td>string</td>
              <td>加载中...</td>
            </tr>
            <tr>
              <td>useVirtual</td>
              <td>table 是否开启虚拟滚动</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>virtualShowSize</td>
              <td>虚拟列表的渲染行数</td>
              <td>Number</td>
              <td>30</td>
            </tr>
            <tr>
              <td>border</td>
              <td>是否开启边框线</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>title</td>
              <td>表格左上标题</td>
              <td>String /slot</td>
              <td>-</td>
            </tr>
            <tr>
              <td>tableTitle</td>
              <td>表格左上标题</td>
              <td>String /slot</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isPaginationCumulative</td>
              <td>序列号显示是否分页累加</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isCopy</td>
              <td>是否允许双击单元格复制</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>defaultRadioCol</td>
              <td>设置默认选中项（单选）</td>
              <td>Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowClickRadio</td>
              <td>是否开启点击整行选中单选框</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>columnSetting</td>
              <td>是否显示设置（隐藏/显示列）</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>name</td>
              <td>开启列拖拽，缓存唯一性标识</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isRowSort</td>
              <td>是否开启行拖拽</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isRowSortIcon</td>
              <td>是否第一列显示行拖拽图标</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>rowSortIconBind</td>
              <td>第一列显示拖拽的配置</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isTree</td>
              <td>是否开启 Tree-table 样式</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>columnSetBind</td>
              <td>列设置按钮配置</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>align</td>
              <td>table 对齐方式</td>
              <td>String</td>
              <td>'center'</td>
            </tr>
            <tr>
              <td>isSlotToolbar</td>
              <td>AuAdaptivePage 组件是否使用了 Toolbar 插槽</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isSlotTitle</td>
              <td>AuAdaptivePage 组件是否使用了 title 插槽</td>
              <td>Boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>sortable</td>
              <td>设置为 'custom',需要监听 Table 的 sort-change 事件</td>
              <td>Boolean/string</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（Events）继承 el-table Events</p>
        <table class="api-table">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>page-change</td>
              <td>当前页码</td>
              <td>当前选中的页码</td>
            </tr>
            <tr>
              <td>save</td>
              <td>保存按钮</td>
              <td>编辑后的所有数据</td>
            </tr>
            <tr>
              <td>handleEvent</td>
              <td>单个输入触发事件</td>
              <td>configEdit 中的 event 值和对应输入的 value 值</td>
            </tr>
            <tr>
              <td>radioChange</td>
              <td>单选选中事件</td>
              <td>返回当前选中的整行数据</td>
            </tr>
            <tr>
              <td>rowSort</td>
              <td>行拖拽排序后触发事件</td>
              <td>返回排序后的 table 数据</td>
            </tr>
            <tr>
              <td>validateError</td>
              <td>单元格编辑保存校验不通过触发</td>
              <td>返回校验不通过的 prop--label 集合</td>
            </tr>
            <tr>
              <td>getRefs</td>
              <td>获取 AuTable 单元格编辑使用组件的 ref</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Methods>
      <div class="api-table-wrapper">
        <p class="title">方法（Methods）继承 el-table Methods</p>
        <table class="api-table">
          <thead>
            <tr>
              <th>方法名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>saveMethod</td>
              <td>单元格编辑保存方法</td>
              <td>callback(tableData)</td>
            </tr>
            <tr>
              <td>save</td>
              <td>单元格编辑后调用 save 方法返回 Promise</td>
              <td>Promise(tableData)</td>
            </tr>
            <tr>
              <td>resetFields</td>
              <td>对表单进行重置，并移除校验结果</td>
              <td>—</td>
            </tr>
            <tr>
              <td>clearValidate</td>
              <td>清空校验规则</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultRadioSelect</td>
              <td>单选默认选中</td>
              <td>-</td>
            </tr>
            <tr>
              <td>reSetColumnSet</td>
              <td>开启 columnSetting，调用此方法 columnSet 显示修改后缓存数据</td>
              <td>-</td>
            </tr>
            <tr>
              <td>clearRadioHandle</td>
              <td>清除单选框选中状态</td>
              <td>-</td>
            </tr>
            <tr>
              <td>resetTselectTable</td>
              <td>单元格编辑时清除下拉选择表格数据</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <p class="title">插槽（Slots）继承 el-table Slots</p>
        <table class="api-table">
          <thead>
            <tr>
              <th>插槽名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>AuTable 左侧 Title</td>
              <td>-</td>
            </tr>
            <tr>
              <td>titleTip</td>
              <td>AuTable 头部 tip</td>
              <td>-</td>
            </tr>
            <tr>
              <td>toolbar</td>
              <td>AuTable 右侧 toolbar</td>
              <td>-</td>
            </tr>
            <tr>
              <td>expand</td>
              <td>展开行插槽</td>
              <td>scope</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>底部操作区具名插槽</td>
              <td>-</td>
            </tr>
            <tr>
              <td>pagination</td>
              <td>分页器自定义内容</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </au-tabs>
</template>

<script setup lang="ts">
const tabs = [
  { key: "Attributes", title: "Attributes" },
  { key: "Events", title: "Events" },
  { key: "Methods", title: "Methods" },
  { key: "Slots", title: "Slots" },
]
</script>

<style scoped>
.api-table-wrapper {
  width: 100%;
}
.title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
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
