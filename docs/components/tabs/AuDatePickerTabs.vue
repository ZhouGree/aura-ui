<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 DatePicker DateTimePicker Attributes</p>
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
              <td>[String, Date, Array]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>plusTime</td>
              <td>日期范围是否显示 00:00:00 23:59:59 时分秒</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>type</td>
              <td>时间类型（week 周；month 月；year 年；dates 多个日期；months 多个月；years 多个年；daterange 日期范围；monthrange 月份范围;datetime 日期和时间点;datetimerange 日期和时间点范围）</td>
              <td>String</td>
              <td>date</td>
            </tr>
            <tr>
              <td>shortcuts</td>
              <td>设置快捷选项</td>
              <td>Array&lt;{ text: string, value: Date &amp; Function }&gt;</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isPickerOptions</td>
              <td>是否开启自带快捷方式</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（Events）继承 DatePicker DateTimePicker Events</p>
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
              <td>change</td>
              <td>用户确认选定的值时触发</td>
              <td>组件绑定值</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <p class="title">插槽（Slots）继承 DatePicker DateTimePicker Slots</p>
        <table class="api-table">
          <thead>
            <tr>
              <th>插槽名</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>default</td>
              <td>自定义内容</td>
            </tr>
            <tr>
              <td>range-separator</td>
              <td>自定义范围分割符内容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Methods>
      <div class="api-table-wrapper">
        <p class="title">方法（Methods）继承 DatePicker DateTimePicker Methods</p>
        <table class="api-table">
          <thead>
            <tr>
              <th>方法名</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>clear</td>
              <td>重置选中项</td>
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
