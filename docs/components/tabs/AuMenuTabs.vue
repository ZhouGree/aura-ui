<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-menu Attributes</p>
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
              <td>当前选中菜单项</td>
              <td>string / number</td>
              <td>''</td>
            </tr>
            <tr>
              <td>items</td>
              <td>菜单数据</td>
              <td>MenuItem[]</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>collapse</td>
              <td>是否折叠</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>unique-opened</td>
              <td>是否只保持一个子菜单展开</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>menu-trigger</td>
              <td>子菜单触发方式</td>
              <td>'hover' / 'click'</td>
              <td>'hover'</td>
            </tr>
            <tr>
              <td>ellipsis</td>
              <td>是否省略多余项（横向菜单）</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>auto-route</td>
              <td>是否自动跳转路由</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>icon-field</td>
              <td>图标字段名</td>
              <td>string</td>
              <td>'icon'</td>
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
              <td>select</td>
              <td>选中菜单项时触发</td>
              <td>(item: MenuItem)</td>
            </tr>
            <tr>
              <td>open</td>
              <td>展开子菜单时触发</td>
              <td>(index: string[])</td>
            </tr>
            <tr>
              <td>close</td>
              <td>关闭子菜单时触发</td>
              <td>(index: string[])</td>
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
              <td>title</td>
              <td>菜单项标题</td>
              <td>{ item, level }</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>菜单项图标</td>
              <td>{ item, level }</td>
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
