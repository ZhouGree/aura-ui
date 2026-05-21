<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-checkbox Attributes</p>
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
              <td>model-value / v-model</td>
              <td>绑定值</td>
              <td>Array</td>
              <td>无</td>
            </tr>
            <tr>
              <td>option</td>
              <td>单选数据源</td>
              <td>Array</td>
              <td>无</td>
            </tr>
            <tr>
              <td>size</td>
              <td>多选框的尺寸</td>
              <td>'large' / 'default' / 'small'</td>
              <td>'default'</td>
            </tr>
            <tr>
              <td>type</td>
              <td>按钮样式</td>
              <td>'check' / 'button'</td>
              <td>'check'</td>
            </tr>
            <tr>
              <td>props</td>
              <td>配置选项</td>
              <td>object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>border</td>
              <td>是否显示边框</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（Events）继承 el-checkbox&el-checkboxGroup Events</p>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <p class="title">插槽（Slots）继承 el-checkbox Slots</p>
      </div>
    </template>
  </au-tabs>
</template>

<script setup lang="ts">
const tabs = [
  { key: "Attributes", title: "Attributes" },
  { key: "Events", title: "Events" },
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
