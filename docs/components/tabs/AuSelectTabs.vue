<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-select&amp;el-select-v2 Attributes</p>
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
              <td>boolean / string / number/Array</td>
              <td>无</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>是否多选</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>optionSource</td>
              <td>下拉数据源</td>
              <td>Array</td>
              <td>无</td>
            </tr>
            <tr>
              <td>customLabel</td>
              <td>是否自定义设置下拉 label</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>valueCustom</td>
              <td>传入的 option 数组中，要作为最终选择项的键值 key</td>
              <td>String</td>
              <td>'key'</td>
            </tr>
            <tr>
              <td>labelCustom</td>
              <td>传入的 option 数组中，要作为显示项的键值名称</td>
              <td>String</td>
              <td>'label'</td>
            </tr>
            <tr>
              <td>useVirtual</td>
              <td>是否开启虚拟列表</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isShowPagination</td>
              <td>是否开启分页</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>paginationOption</td>
              <td>分页配置</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>returnObject</td>
              <td>选中值是否返回对象必须设置`value-key`</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isCached</td>
              <td>分页是否开启缓存选中项</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（Events）继承 el-select&amp;el-pagination&amp;el-select-v2 Events</p>
        <table class="api-table">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>change</td>
              <td>选中值发生变化时触发</td>
              <td>返回选中的值</td>
            </tr>
            <tr>
              <td>input</td>
              <td>分页器输入框触发</td>
              <td>返回输入的值</td>
            </tr>
            <tr>
              <td>select-input</td>
              <td>选择输入框触发</td>
              <td>返回输入的值</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <p class="title">插槽（Slots）继承 el-select&amp;el-select-v2 Slots</p>
      </div>
    </template>

    <template #Methods>
      <div class="api-table-wrapper">
        <p class="title">方法（Methods）继承 el-select&amp;el-select-v2 Methods</p>
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
