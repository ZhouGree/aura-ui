<template>
  <au-tabs :tabs="tabs">
    <!-- 代码示例 -->
    <template #CodeExample>
      <div class="api-table-wrapper">
        <p class="title">代码示例</p>
        <p class="desc">详情组件————可实现表单回显</p>
        <div class="code-block">
          <pre><code>&lt;!-- 常规模式 -->
&lt;au-detail :descData="descData" /&gt;
&lt;!-- 字典回显模式 -->
&lt;au-detail :descData="descData" :dataList="dataList" :listTypeInfo=="listTypeInfo" /&gt;</code></pre>
        </div>
      </div>
    </template>

    <!-- 配置参数 -->
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-descriptions el-descriptions-item Attributes</p>
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
              <td>descData</td>
              <td>详情页面数据源</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----label</td>
              <td>详情字段说明标题</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----value</td>
              <td>详情字段返回值</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----fieldName</td>
              <td>value 返回值的字段</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----slotName</td>
              <td>插槽（自定义 value）</td>
              <td>slot</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----bind</td>
              <td>继承 el-descriptions-item 属性</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----span</td>
              <td>占用的列宽，默认占用 1 列，最多 4 列</td>
              <td>Number</td>
              <td>1</td>
            </tr>
            <tr>
              <td>----unit</td>
              <td>value 值后面占位（通常:单位）</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----tooltip</td>
              <td>value 值的提示语</td>
              <td>String/function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----iconSize</td>
              <td>tooltip 提示语的 icon 大小</td>
              <td>String/Number</td>
              <td>继承字体大小</td>
            </tr>
            <tr>
              <td>----iconColor</td>
              <td>tooltip 提示语的 icon 颜色</td>
              <td>String</td>
              <td>继承颜色</td>
            </tr>
            <tr>
              <td>----filters</td>
              <td>字典类型（即后台返回的是数字类型）过滤转成中文</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-------list</td>
              <td>字典 list 定义的数据名即 listTypeInfo 里面对应的值</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-------key</td>
              <td>下拉数据源的 key 字段</td>
              <td>String</td>
              <td>'value'</td>
            </tr>
            <tr>
              <td>-------label</td>
              <td>下拉数据源的 label 字段</td>
              <td>String</td>
              <td>'label'</td>
            </tr>
            <tr>
              <td>descColumn</td>
              <td>布局一行显示几列（默认：一行显示 4 列）</td>
              <td>Number</td>
              <td>4</td>
            </tr>
            <tr>
              <td>isColon</td>
              <td>是否显示冒号</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>isLabelBold</td>
              <td>label 是否加粗显示</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>labelRender</td>
              <td>自定义 label</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>dataList</td>
              <td>开启 filters 时详情接口返回的数据</td>
              <td>Object</td>
              <td>{}</td>
            </tr>
            <tr>
              <td>listTypeInfo</td>
              <td>开启 filters 时下拉数据源</td>
              <td>Object</td>
              <td>{}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <!-- Events -->
    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">继承 el-descriptions events</p>
        <div class="empty-tip">继承 el-descriptions 的所有事件</div>
      </div>
    </template>
  </au-tabs>
</template>

<script setup lang="ts">
const tabs = [
  { key: "CodeExample", title: "代码示例" },
  { key: "Attributes", title: "配置参数" },
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
.desc {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  color: #666;
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
