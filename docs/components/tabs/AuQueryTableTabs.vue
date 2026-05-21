<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）</p>
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
              <td>searchConfig</td>
              <td>查询配置（新）</td>
              <td>SearchConfig</td>
              <td>-</td>
            </tr>
            <tr>
              <td>tableConfig</td>
              <td>表格配置（新）</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>columns</td>
              <td>列配置（新）</td>
              <td>array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>queryProps</td>
              <td>查询条件配置（兼容旧）</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>tableProps</td>
              <td>表格配置（兼容旧）</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>request</td>
              <td>请求函数，返回 data/list + total</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>autoLoad</td>
              <td>是否自动加载（新）</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>showSearch</td>
              <td>是否显示查询区（新）</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>immediate</td>
              <td>是否初始化自动查询（兼容）</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>autoQueryOnReset</td>
              <td>重置后是否自动查询</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>showExport</td>
              <td>是否显示导出按钮</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>exportHandler</td>
              <td>自定义导出处理函数（新）</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>defaultPageSize</td>
              <td>默认每页条数（新）</td>
              <td>number</td>
              <td>10</td>
            </tr>
            <tr>
              <td>pageSizes</td>
              <td>分页选项（新）</td>
              <td>number[]</td>
              <td>[10,20,50,100]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（Events）</p>
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
              <td>search</td>
              <td>搜索时触发</td>
              <td>(form)</td>
            </tr>
            <tr>
              <td>reset</td>
              <td>重置时触发</td>
              <td>(form)</td>
            </tr>
            <tr>
              <td>load</td>
              <td>加载成功后触发</td>
              <td>(list, total)</td>
            </tr>
            <tr>
              <td>page-change</td>
              <td>翻页触发</td>
              <td>(page, size)</td>
            </tr>
            <tr>
              <td>export</td>
              <td>点击导出触发</td>
              <td>({queryForm, tableData})</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <p class="title">插槽（Slots）</p>
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
              <td>search-extra</td>
              <td>查询区域扩展</td>
              <td>{ searchValues, resetSearch, search }</td>
            </tr>
            <tr>
              <td>toolbar</td>
              <td>表格工具栏</td>
              <td>-</td>
            </tr>
            <tr>
              <td>table</td>
              <td>完全自定义表格区</td>
              <td>{ data, loading, pagination }</td>
            </tr>
            <tr>
              <td>empty</td>
              <td>自定义空状态</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Methods>
      <div class="api-table-wrapper">
        <p class="title">方法（Methods）</p>
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
              <td>query</td>
              <td>手动触发查询</td>
              <td>-</td>
            </tr>
            <tr>
              <td>reset</td>
              <td>重置查询条件</td>
              <td>-</td>
            </tr>
            <tr>
              <td>reload</td>
              <td>按当前条件重新加载</td>
              <td>-</td>
            </tr>
            <tr>
              <td>getQueryForm</td>
              <td>获取当前查询参数</td>
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
  { key: "Slots", title: "Slots" },
  { key: "Methods", title: "Methods" },
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
