<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-tabs Attributes</p>
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
              <td>当前选中 tab 的 key</td>
              <td>string / number</td>
              <td>''</td>
            </tr>
            <tr>
              <td>tabs</td>
              <td>tabs 数据数组</td>
              <td>Tab[]</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>lazy</td>
              <td>是否懒加载</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>keepAlive</td>
              <td>是否缓存</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>keepAliveProps</td>
              <td>KeepAlive 配置</td>
              <td>object</td>
              <td>{}</td>
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
              <td>tab-change</td>
              <td>切换前触发</td>
              <td>(paneName)</td>
            </tr>
            <tr>
              <td>tab-click</td>
              <td>点击时触发</td>
              <td>(tab)</td>
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
              <td>prefix</td>
              <td>标签左侧</td>
              <td>-</td>
            </tr>
            <tr>
              <td>suffix</td>
              <td>标签右侧</td>
              <td>-</td>
            </tr>
            <tr>
              <td>label</td>
              <td>自定义标签</td>
              <td>{ tab, index }</td>
            </tr>
            <tr>
              <td>content</td>
              <td>自定义内容</td>
              <td>{ tab, index }</td>
            </tr>
            <tr>
              <td>[tab.key]</td>
              <td>按 key 命名插槽</td>
              <td>{ tab, index }</td>
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
