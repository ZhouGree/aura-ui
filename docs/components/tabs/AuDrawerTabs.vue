<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-drawer Attributes</p>
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
              <td>modelValue / v-model</td>
              <td>是否显示</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>title</td>
              <td>标题</td>
              <td>string</td>
              <td>''</td>
            </tr>
            <tr>
              <td>showFooter</td>
              <td>是否显示底部按钮</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>confirmText</td>
              <td>确认按钮文案</td>
              <td>string</td>
              <td>'确认'</td>
            </tr>
            <tr>
              <td>cancelText</td>
              <td>取消按钮文案</td>
              <td>string</td>
              <td>'取消'</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>确认按钮 loading</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>resetOnClose</td>
              <td>关闭后是否调用 reset</td>
              <td>boolean</td>
              <td>true</td>
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
              <td>confirm</td>
              <td>点击确认</td>
              <td>() => Promise / void</td>
            </tr>
            <tr>
              <td>close</td>
              <td>点击取消/关闭</td>
              <td>-</td>
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
              <td>header</td>
              <td>顶部</td>
              <td>-</td>
            </tr>
            <tr>
              <td>default</td>
              <td>内容</td>
              <td>-</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>底部</td>
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
              <td>open</td>
              <td>打开</td>
              <td>(initData?: any, title?: string)</td>
            </tr>
            <tr>
              <td>close</td>
              <td>关闭</td>
              <td>-</td>
            </tr>
            <tr>
              <td>reset</td>
              <td>重置（可被覆盖）</td>
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
