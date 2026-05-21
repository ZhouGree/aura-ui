<template>
  <au-tabs :tabs="tabs">
    <template #代码示例>
      <div class="api-table-wrapper">
        <p class="title">基于 Element-plus el-steps el-step 步骤条组件的二次封装，着重于数据层面，HTML 一行代码</p>
        <pre class="language-html"><code class="language-html">&lt;au-step-wizard
  :stepData="stepData"
  :active="active"
  :successTitle="successTitle"
  @complete="complete"
&gt;
  &lt;template #first&gt;第一步骤&lt;/template&gt;
  .....
&lt;/au-step-wizard&gt;</code></pre>
      </div>
    </template>

    <template #配置参数>
      <div class="api-table-wrapper">
        <p class="title">继承 element-plus el-steps/el-step 提供的属性</p>
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
              <td>stepData</td>
              <td>步骤数据源</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>---id</td>
              <td>步骤 ID 唯一</td>
              <td>Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>---title</td>
              <td>步骤头文字展示</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>---slotName</td>
              <td>每个步骤的具名 slot</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>---icon</td>
              <td>步骤头 icon 展示（element 内置 icon）</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>---description</td>
              <td>步骤头描述</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>---btnArr</td>
              <td>每个步骤的按钮</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----- btnTitle</td>
              <td>按钮文字信息</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----- params</td>
              <td>每个按钮传参信息（可以随意定义字段)</td>
              <td>String/Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----- fn</td>
              <td>按钮事件</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isShowLastSuccess</td>
              <td>是否显示默认 icon 最后一步</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>active</td>
              <td>设置当前激活步骤</td>
              <td>Number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>---lastBtnArr</td>
              <td>最后一步若按钮需要多个则设置，不设置仅一个完成按钮</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----- btnTitle</td>
              <td>按钮文字信息</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----- params</td>
              <td>每个按钮传参信息（可以随意定义字段)</td>
              <td>String/Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----- fn</td>
              <td>按钮事件</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>lastBtnTitle</td>
              <td>最后一步骤成功按钮文字</td>
              <td>String</td>
              <td>完成</td>
            </tr>
            <tr>
              <td>successTitle</td>
              <td>最后一步骤成功提示语</td>
              <td>String</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #events>
      <div class="api-table-wrapper">
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
              <td>complete</td>
              <td>最后一步按钮点击事件</td>
              <td>当前步骤值</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </au-tabs>
</template>

<script setup lang="ts">
const tabs = [
  { key: "代码示例", title: "简介与代码示例" },
  { key: "配置参数", title: "配置参数（Attributes）" },
  { key: "events", title: "events" },
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
