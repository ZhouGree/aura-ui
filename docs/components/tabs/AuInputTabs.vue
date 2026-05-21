<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-input Attributes</p>
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
              <td>v-model</td>
              <td>绑定值</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>placeholder 提示语</td>
              <td>string</td>
              <td>'请输入'</td>
            </tr>
            <tr>
              <td>decimalLimit</td>
              <td>小数点位数</td>
              <td>Number</td>
              <td>2</td>
            </tr>
            <tr>
              <td>appendTitle</td>
              <td>插槽 append 显示文案</td>
              <td>string</td>
              <td>'元'</td>
            </tr>
            <tr>
              <td>showThousands</td>
              <td>是否显示千分号</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isTip</td>
              <td>是否提示金额中文</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>inputType</td>
              <td>特性类型标注（文字:text,金额:amount,电话:phone,整数:integer,小数:decimal,身份证:idCard）</td>
              <td>string</td>
              <td>text</td>
            </tr>
            <tr>
              <td>isShowErrorTip</td>
              <td>输入错误是否弹出弹窗提示</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（Events）继承 el-input Events</p>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <p class="title">插槽（Slots）继承 el-input Slots</p>
      </div>
    </template>

    <template #Methods>
      <div class="api-table-wrapper">
        <p class="title">方法（Methods）继承 el-input Methods</p>
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
