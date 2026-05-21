<template>
  <au-tabs :tabs="tabs">
    <!-- 代码示例 -->
    <template #CodeExample>
      <div class="api-table-wrapper">
        <p class="title">代码示例</p>
        <div class="code-block">
          <pre><code>&lt;au-select-icon v-model="selectVlaue" /&gt;</code></pre>
        </div>
      </div>
    </template>

    <!-- 配置参数 -->
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
              <td>prefixIcon</td>
              <td>输入框前缀 icon</td>
              <td>string</td>
              <td>Search</td>
            </tr>
            <tr>
              <td>isShowSearch</td>
              <td>是否显示搜索图标</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>isShowIcon</td>
              <td>是否显示选中后的图标</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>selectBind</td>
              <td>Attributes</td>
              <td>selectBind</td>
              <td>`"prefix-icon": props.prefixIcon, placeholder: "请选择图标",dialogTitle:'请选择图标',clearable: true,width: "50%"`</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <!-- Events -->
    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（events）继承 el-input 属事件</p>
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
              <td>select</td>
              <td>选择完图标</td>
              <td>返回选中的图标 name</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <!-- Methods -->
    <template #Methods>
      <div class="api-table-wrapper">
        <p class="title">Exposes（Method）</p>
        <table class="api-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>clearIcon</td>
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
  { key: "CodeExample", title: "代码示例" },
  { key: "Attributes", title: "配置参数" },
  { key: "Events", title: "Events" },
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
.code-block {
  background: #f7f8fa;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
}
.code-block pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.5;
  color: #333;
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
