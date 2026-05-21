<template>
  <au-query-table
    :search-config="searchConfig"
    :table-config="tableConfig"
    :columns="columns"
    :request="request"
    :show-export="true"
    :export-handler="exportHandler"
    @export="handleExport"
  />
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"
import { reactive } from "vue"

const searchConfig = reactive({
  fields: [
    {
      label: "状态",
      key: "status",
      component: "el-input",
      props: {
        placeholder: "输入启用或停用"
      }
    }
  ],
  labelWidth: "88px"
})

const tableConfig = reactive({
  data: [],
  currentPage: 1,
  pageSize: 10,
  total: 0
})

const columns = [
  { label: "编码", prop: "code", width: 120 },
  { label: "状态", prop: "statusText", width: 120 }
]

// ==============================================
// 增加了 20 条模拟数据（你要的多数据）
// ==============================================
const request = async (params: { status?: string }) => {
  const source = [
    { code: "A-001", statusText: "启用" },
    { code: "A-002", statusText: "停用" },
    { code: "A-003", statusText: "启用" },
    { code: "A-004", statusText: "停用" },
    { code: "A-005", statusText: "启用" },
    { code: "A-006", statusText: "停用" },
    { code: "A-007", statusText: "启用" },
    { code: "A-008", statusText: "停用" },
    { code: "A-009", statusText: "启用" },
    { code: "A-010", statusText: "停用" },
    { code: "A-011", statusText: "启用" },
    { code: "A-012", statusText: "停用" },
    { code: "A-013", statusText: "启用" },
    { code: "A-014", statusText: "停用" },
    { code: "A-015", statusText: "启用" },
    { code: "A-016", statusText: "停用" },
    { code: "A-017", statusText: "启用" },
    { code: "A-018", statusText: "停用" },
    { code: "A-019", statusText: "启用" },
    { code: "A-020", statusText: "停用" },
  ]
  
  const list = source.filter(item => 
    !params.status || item.statusText.includes(params.status)
  )
  
  return {
    list,
    total: list.length
  }
}

// ==============================================
// 导出处理函数 + 控制台输出完整数据
// ==============================================
const exportHandler = async (payload: Record<string, any>) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  
  // ✅ 控制台输出完整导出数据
  console.log("✅ 导出的数据列表：", payload.tableData)
  console.log("✅ 导出条数：", payload.tableData.length)
  console.log("✅ 导出查询条件：", payload.queryForm)

  ElMessage.success(`导出完成，共 ${payload.tableData.length} 条`)
}

// ==============================================
// 导出事件触发
// ==============================================
const handleExport = (payload: Record<string, any>) => {
  ElMessage.info(`当前筛选条件：${payload.queryForm.status || "全部"}`)
}
</script>