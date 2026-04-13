<template>
  <au-tabs :tabs="tabs">
    <!-- 属性 -->
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-button Attributes</p>
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
              <td>size</td>
              <td>尺寸</td>
              <td>'large' / 'default' / 'small'</td>
              <td>-</td>
            </tr>
            <tr>
              <td>type</td>
              <td>类型</td>
              <td>'default' / 'primary' / 'success' / 'warning' / 'danger'</td>
              <td>-</td>
            </tr>
            <tr>
              <td>plain</td>
              <td>是否朴素按钮</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>round</td>
              <td>是否圆角按钮</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>circle</td>
              <td>是否圆形按钮</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>time</td>
              <td>防抖的时间</td>
              <td>number</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>isDebounce</td>
              <td>是否开启防抖</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>tip</td>
              <td>提示文字，常用于 type="text" 或拥有 text，link 属性的 button</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>Tooltip 组件出现的位置</td>
              <td>继承 el-tooltip</td>
              <td>top</td>
            </tr>
            <tr>
              <td>tipProps</td>
              <td>Tooltip 组件的配置参数，详情可看 element-plus 官网</td>
              <td>object</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <!-- placement 类型说明 -->
        <div class="tip-block">
          <p class="tip-title">placement 类型</p>
          <p class="tip-content">
            'top' / 'top-start' / 'top-end' / 'bottom' / 'bottom-start' / 'bottom-end' /
            'left' / 'left-start' / 'left-end' / 'right' / 'right-start' / 'right-end'
          </p>
        </div>
      </div>
    </template>

    <!-- 事件（你之后要加我也能直接帮你写） -->
    <template #Events>
      <div class="empty-tip">暂无事件</div>
    </template>
  </au-tabs>
</template>

<script setup lang="ts">
const tabs = [
  { key: "Attributes", title: "Attributes" },
  { key: "Events", title: "Events" },
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

.tip-block {
  background: #f7f8fa;
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 13px;
}
.tip-title {
  font-weight: 500;
  margin-bottom: 4px;
}
.tip-content {
  color: #4e5969;
  line-height: 1.5;
}

.empty-tip {
  padding: 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
}
</style>