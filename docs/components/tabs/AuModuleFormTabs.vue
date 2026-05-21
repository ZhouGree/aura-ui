<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 AuForm 及 AuDetail Attributes</p>
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
              <td>title</td>
              <td>头部返回按钮标题</td>
              <td>string</td>
              <td>无</td>
            </tr>
            <tr>
              <td>titleSlot</td>
              <td>是否使用插槽显示 title</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>subTitle</td>
              <td>头部副标题</td>
              <td>string</td>
              <td>无</td>
            </tr>
            <tr>
              <td>extra</td>
              <td>操作区，位于 title 行的行尾(右侧)</td>
              <td>slot</td>
              <td>无</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>底部操作区（默认展示"取消/保存"按钮；优先渲染插槽）设置`:footer="null"`隐藏底部操作</td>
              <td>String/slot</td>
              <td>无</td>
            </tr>
            <tr>
              <td>isShowHeader</td>
              <td>不显示 header</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isTabMargin</td>
              <td>tabs 是否跟模块分离</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>tabMarginNum</td>
              <td>tabs 跟模块分离距离</td>
              <td>Number</td>
              <td>10</td>
            </tr>
            <tr>
              <td>tabs</td>
              <td>页面展示是否需要页签（并且 tabs 的 key 是插槽）——只显示在最后一个模块下</td>
              <td>Array</td>
              <td>无</td>
            </tr>
            <tr>
              <td>btnCancelBind</td>
              <td>取消按钮配置（继承`el-button`所有属性）</td>
              <td>object</td>
              <td>`{btnTxt:'取消'}`</td>
            </tr>
            <tr>
              <td>btnSaveBind</td>
              <td>保存按钮配置（继承`el-button`所有属性）</td>
              <td>object</td>
              <td>`{type: primary, btnTxt:'保存'}`</td>
            </tr>
            <tr>
              <td>titleBold</td>
              <td>模块 Title 文字是否加粗</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isShowBack</td>
              <td>header 不显示返回 icon</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isGoBackEvent</td>
              <td>点击头部返回（默认返回上一页，设置此值可以自定义 back 事件）</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>handleType</td>
              <td>显示方式（'edit':form 表单操作，'desc':表详情页面）</td>
              <td>string</td>
              <td>edit</td>
            </tr>
            <tr>
              <td>formOpts</td>
              <td>表单配置描述，支持多分组表单（handleType=edit）</td>
              <td>Object</td>
              <td>无</td>
            </tr>
            <tr>
              <td>submit</td>
              <td>点击保存时返回所有表单数据（数据格式 promise 且可显示 loading 状态）</td>
              <td>function</td>
              <td>所有表单数据</td>
            </tr>
            <tr>
              <td>descColumn</td>
              <td>详情页面展示每行显示几列（handleType=desc）</td>
              <td>Number</td>
              <td>4</td>
            </tr>
            <tr>
              <td>descData</td>
              <td>详情页面配置描述，支持多分组表 （handleType=desc）</td>
              <td>Object</td>
              <td>无</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（Events）继承 AuForm 及 AuDetail Events</p>
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
              <td>fieldList 中的 event 值和对应输入的 value 值</td>
            </tr>
            <tr>
              <td>tabsChange</td>
              <td>点击 tab 切换触发</td>
              <td>被选中的标签 tabs</td>
            </tr>
            <tr>
              <td>validateError</td>
              <td>校验失败抛出事件</td>
              <td>obj——每个收缩块的对象</td>
            </tr>
            <tr>
              <td>back</td>
              <td>头部标题点击返回事件</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <p class="title">插槽（Slots）继承 AuForm 及 AuDetail Slots</p>
      </div>
    </template>

    <template #Methods>
      <div class="api-table-wrapper">
        <p class="title">方法（Methods）继承 AuForm 及 AuDetail Methods</p>
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
              <td>resetFormFields</td>
              <td>重置表单</td>
              <td>-</td>
            </tr>
            <tr>
              <td>clearValidate</td>
              <td>清空校验</td>
              <td>-</td>
            </tr>
            <tr>
              <td>setSelectedTab</td>
              <td>默认选中 tab</td>
              <td>默认选中 tab 插槽名</td>
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
