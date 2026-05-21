<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-breadcrumb Attributes</p>
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
              <td>items</td>
              <td>手动面包屑数据</td>
              <td>BreadcrumbItem[]</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>auto</td>
              <td>是否根据路由生成</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>separator</td>
              <td>分隔符</td>
              <td>string / Component</td>
              <td>'/'</td>
            </tr>
            <tr>
              <td>replace</td>
              <td>是否 replace 跳转</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>hideCurrent</td>
              <td>是否隐藏当前路由（最后一项）</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>ignoreRoutes</td>
              <td>忽略的路由 name/path 列表</td>
              <td>string[]</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>customMetaKey</td>
              <td>路由 meta 自定义标题字段</td>
              <td>string</td>
              <td>'breadcrumb'</td>
            </tr>
            <tr>
              <td>hideMetaKey</td>
              <td>路由 meta 隐藏字段</td>
              <td>string</td>
              <td>'breadcrumbHidden'</td>
            </tr>
            <tr>
              <td>titleMetaKey</td>
              <td>路由 meta 默认标题字段</td>
              <td>string</td>
              <td>'title'</td>
            </tr>
            <tr>
              <td>showHome</td>
              <td>自动模式是否显示首页</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>homeLabel</td>
              <td>首页文案</td>
              <td>string</td>
              <td>'首页'</td>
            </tr>
            <tr>
              <td>homePath</td>
              <td>首页 path</td>
              <td>string</td>
              <td>'/'</td>
            </tr>
            <tr>
              <td>clickableLast</td>
              <td>最后一项是否可点击</td>
              <td>boolean</td>
              <td>false</td>
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
              <td>item-click</td>
              <td>点击面包屑项时触发</td>
              <td>(item: BreadcrumbItem)</td>
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
              <td>item</td>
              <td>自定义每一项渲染</td>
              <td>{ item, index }</td>
            </tr>
            <tr>
              <td>separator</td>
              <td>自定义分隔符</td>
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
