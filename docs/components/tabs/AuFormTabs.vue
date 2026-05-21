<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-form Attributes</p>
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
              <td>className</td>
              <td>自定义类名</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>labelPosition</td>
              <td>改变表单项 label 与输入框的布局方式(`right,left,top`)</td>
              <td>String</td>
              <td>''</td>
            </tr>
            <tr>
              <td>widthSize</td>
              <td>每行显示几个输入项（默认两项） 最大值 6</td>
              <td>Number</td>
              <td>2</td>
            </tr>
            <tr>
              <td>isTrim</td>
              <td>全局是否开启清除前后空格(comp 为 el-input 且 type 不等于'password')</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>formOpts</td>
              <td>表单配置项</td>
              <td>Object</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（Events）继承 el-form Events</p>
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
              <td>单个查询条件触发事件</td>
              <td>fieldList 中 type/查询条件输入的值/fieldList 中 event 值</td>
            </tr>
            <tr>
              <td>getRefs</td>
              <td>获取 AuForm 使用组件的 ref</td>
              <td>fieldList 中 最好需要传 ref 标识来区分是哪个组件的 ref</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <p class="title">插槽（Slots）继承 el-form Slots</p>
      </div>
    </template>

    <template #Methods>
      <div class="api-table-wrapper">
        <p class="title">方法（Methods）继承 el-form Methods</p>
        <table class="api-table">
          <thead>
            <tr>
              <th>方法名</th>
              <th>说明</th>
              <th>返回值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>selfValidate</td>
              <td>自定义校验</td>
              <td>valid:Boolean;formData:object</td>
            </tr>
            <tr>
              <td>selfResetFields</td>
              <td>自定义重置方法（主要清空使用 AuSelectTable 组件）</td>
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
