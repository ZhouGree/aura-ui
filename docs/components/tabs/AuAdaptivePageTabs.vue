<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 AuTable 及 AuQueryCondition Attributes</p>
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
              <td>leftWidth</td>
              <td>左侧宽度</td>
              <td>number,String</td>
              <td>260</td>
            </tr>
            <tr>
              <td>pageStyle</td>
              <td>au-layout-page 行内样式</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>queryPageStyle</td>
              <td>查询条件组件的 au-layout-page-item 行内样式</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>tablePageStyle</td>
              <td>table 组件的 au-layout-page-item 行内样式</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isAuTableSelfFilling</td>
              <td>一屏组件 AuTable 自动撑满（即分页器显示最下，table 内容撑满）</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>columnSetting</td>
              <td>AuTable 是否开启列设置</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>name</td>
              <td>表格开启 columnSetting 后，设置缓存数据唯一标识</td>
              <td>string</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（Events）继承 AuTable 及 AuQueryCondition Events</p>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <p class="title">插槽（Slots）继承 AuTable 及 AuQueryCondition Slots</p>
        <table class="api-table">
          <thead>
            <tr>
              <th>插槽名</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>leftContent</td>
              <td>左侧具名插槽</td>
            </tr>
            <tr>
              <td>content</td>
              <td>au-layout-page 条件查询与 AuTable 组件之间具名插槽</td>
            </tr>
            <tr>
              <td>-</td>
              <td>内部 au-layout-page 默认插槽</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>最外层底部具名插槽</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Methods>
      <div class="api-table-wrapper">
        <p class="title">方法（Methods）继承 AuTable 及 AuQueryCondition Methods</p>
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
