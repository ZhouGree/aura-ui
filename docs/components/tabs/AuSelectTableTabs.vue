<template>
  <au-tabs :tabs="tabs">
    <template #Attributes>
      <div class="api-table-wrapper">
        <p class="title">配置参数（Attributes）继承 el-table 及 el-select Attributes</p>
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
              <td>v-model:input-value</td>
              <td>输入框回显值（isShowInput 为 true 时生效）</td>
              <td>Array/ String/Number/Boolean/Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isShowInput</td>
              <td>是否输入框显示</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>table</td>
              <td>表格数据对象</td>
              <td>Object</td>
              <td>{}</td>
            </tr>
            <tr>
              <td>---data</td>
              <td>展示下拉数据源</td>
              <td>Array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>---total</td>
              <td>数据总条数</td>
              <td>Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>---pageSize</td>
              <td>每页显示条目个数</td>
              <td>Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>---currentPage</td>
              <td>当前页数</td>
              <td>Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>columns</td>
              <td>表头信息</td>
              <td>Array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>----bind</td>
              <td>el-table-column Attributes</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----fixed</td>
              <td>列是否固定( left, right)</td>
              <td>string, boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----align</td>
              <td>对齐方式(left/center/right)</td>
              <td>String</td>
              <td>center</td>
            </tr>
            <tr>
              <td>----render</td>
              <td>返回三个参数(text：当前值,row：当前整条数据 ,index：当前行)</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>----slotName</td>
              <td>插槽显示此列数据（其值是具名作用域插槽）</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>------scope</td>
              <td>具名插槽获取此行数据必须用解构接收{scope}</td>
              <td>Object</td>
              <td>当前行数据</td>
            </tr>
            <tr>
              <td>keywords</td>
              <td>关键字配置（value-key 配置）</td>
              <td>Object</td>
              <td>无</td>
            </tr>
            <tr>
              <td>------label</td>
              <td>选项的标签</td>
              <td>String</td>
              <td>'label'</td>
            </tr>
            <tr>
              <td>------value</td>
              <td>选项的值</td>
              <td>String / number</td>
              <td>'value'</td>
            </tr>
            <tr>
              <td>radioTxt</td>
              <td>单选文案</td>
              <td>String</td>
              <td>单选</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>是否开启多选</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>filterMethod</td>
              <td>自定义过滤</td>
              <td>function</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rowClickRadio</td>
              <td>是否开启整行选中(单选)</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>isShowFirstColumn</td>
              <td>是否显示首列(单选)</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>defaultSelectVal</td>
              <td>设置第一页默认选中项--keywords.value 值</td>
              <td>Array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>filterable</td>
              <td>是否开启过滤(根据 keywords 的 label 值进行过滤)</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>reserveSelection</td>
              <td>是否支持翻页选中</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>isShowPagination</td>
              <td>开启分页</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>tableWidth</td>
              <td>table 宽度(单位：px) 若设置 0，宽度 100%</td>
              <td>Number/String</td>
              <td>550</td>
            </tr>
            <tr>
              <td>selectWidth</td>
              <td>select 宽度(单位：px) 若设置 0，宽度 100%</td>
              <td>Number/String</td>
              <td>550</td>
            </tr>
            <tr>
              <td>inputWidth</td>
              <td>input 输入框的宽度(单位：px) 若设置 0，宽度 100%</td>
              <td>Number/String</td>
              <td>550</td>
            </tr>
            <tr>
              <td>inputAttr</td>
              <td>继承所有 el-input 的属性</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isKeyup</td>
              <td>单选是否开启键盘事件</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isShowQuery</td>
              <td>是否允许配置查询条件</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isShowBlurBtn</td>
              <td>条件查询组件是否显示隐藏下拉框按钮</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>btnBind</td>
              <td>显示下拉框按钮配置，继承`el-button`所有属性</td>
              <td>Object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isClearQuery</td>
              <td>关闭下拉框是否清空搜索条件</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>selfExpanded</td>
              <td>是否始终显示下拉框</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>isExpanded</td>
              <td>是否显示下拉框</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>toolbar</td>
              <td>el-table 头部插槽（位置：查询条件下面）</td>
              <td>slot</td>
              <td>-</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>el-table 底部插槽（位置：分页器下面）</td>
              <td>slot</td>
              <td>-</td>
            </tr>
            <tr>
              <td>multipleFixed</td>
              <td>table 是否固定多选</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>radioFixed</td>
              <td>table 是否固定单选</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>useVirtual</td>
              <td>table 是否开启虚拟滚动</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>virtualShowSize</td>
              <td>虚拟列表的渲染行数</td>
              <td>Number</td>
              <td>30</td>
            </tr>
            <tr>
              <td>multipleDisableDelete</td>
              <td>多选--之前选中的数据不在新数据源下，是否隐藏`tag`删除 icon</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>defaultValIsOpenRadioChange</td>
              <td>默认赋值--是否开启单选事件</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>radioSameIsCancel</td>
              <td>单选选中同一条数据，是否取消选中</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>border</td>
              <td>下拉表格是否显示边框</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>tableSize</td>
              <td>下拉表格大小可选值：`large`、`default`、`small`</td>
              <td>String</td>
              <td>''</td>
            </tr>
            <tr>
              <td>radioSelectValLabel</td>
              <td>单选回显 label 需要动态配置 defaultSelectVal 才有选中效果</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isRadioEchoLabel</td>
              <td>单选--是否开启回显 label</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>remote</td>
              <td>是否开启远程搜索</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>remoteMethod</td>
              <td>自定义远程搜索方法</td>
              <td>Function</td>
              <td>搜索输入的值</td>
            </tr>
            <tr>
              <td>tableLoading</td>
              <td>table loading</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loadingText</td>
              <td>table loading 文字</td>
              <td>String</td>
              <td>'加载中...'</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Events>
      <div class="api-table-wrapper">
        <p class="title">事件（Events）继承 el-table 及 el-select Events</p>
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
              <td>page-change</td>
              <td>页码改变事件(避免与 el-table 的 current-change 事件冲突)</td>
              <td>返回选中的页码</td>
            </tr>
            <tr>
              <td>selectionChange</td>
              <td>多选事件</td>
              <td>返回选中的项数据及选中项的 keywords.value 集合</td>
            </tr>
            <tr>
              <td>radioChange</td>
              <td>单选</td>
              <td>返回当前项所有数据</td>
            </tr>
            <tr>
              <td>input-focus</td>
              <td>输入框聚焦</td>
              <td>-</td>
            </tr>
            <tr>
              <td>input-blur</td>
              <td>输入框失焦</td>
              <td>-</td>
            </tr>
            <tr>
              <td>input-click</td>
              <td>输入框点击</td>
              <td>-</td>
            </tr>
            <tr>
              <td>input-clear</td>
              <td>输入框清空</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template #Slots>
      <div class="api-table-wrapper">
        <p class="title">插槽（Slots）继承 el-table 及 el-select Slots</p>
      </div>
    </template>

    <template #Methods>
      <div class="api-table-wrapper">
        <p class="title">方法（Methods）继承 el-table 及 el-select Methods</p>
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
              <td>清空选中项</td>
            </tr>
            <tr>
              <td>focus</td>
              <td>使 input 获取焦点</td>
            </tr>
            <tr>
              <td>blur</td>
              <td>使 input 失去焦点，并隐藏下拉框</td>
            </tr>
            <tr>
              <td>tQueryConditionRef</td>
              <td>条件查询组件实例</td>
            </tr>
            <tr>
              <td>selectRef</td>
              <td>下拉选择实例</td>
            </tr>
            <tr>
              <td>selectTable</td>
              <td>el-table 实例</td>
            </tr>
            <tr>
              <td>state</td>
              <td>组件内定义的参数对象</td>
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
