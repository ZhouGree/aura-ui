<template>
  <au-query-table
    :search-config="searchConfig"
    :table-config="tableConfig"
    :columns="columns"
    :request="request"
    @query="onQuery"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"

const searchConfig = reactive({
  fields: [
    {
      label: "关键词",
      key: "keyword",
      component: "el-input",
      props: {
        placeholder: "请输入关键词"
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
  { label: "ID", prop: "id", width: 90 },
  { label: "名称", prop: "name" }
]

const mockData = [
  { id: 1, name: "审批中心" },
  { id: 2, name: "采购平台" },
  { id: 3, name: "库存模块" },
  { id: 4, name: "财务系统" },
  { id: 5, name: "人事管理" },
  { id: 6, name: "合同管理" },
  { id: 7, name: "资产管理" },
  { id: 8, name: "项目管理" },
  { id: 9, name: "数据分析" },
  { id: 10, name: "日志中心" },
  { id: 11, name: "消息推送" },
  { id: 12, name: "权限管理" },
  { id: 13, name: "流程设计" },
  { id: 14, name: "报表中心" },
  { id: 15, name: "任务调度" }
]

// 标记：是否手动点击查询
const manualQuery = ref(false)

const request = async (params: { keyword?: string; currentPage?: number; pageSize?: number }) => {
  let list = [...mockData]
  
  if (params.keyword) {
    // 类型安全：非空断言 !，确保 TS 认为 keyword 一定是 string
    list = list.filter(item => item.name.includes(params.keyword!))
  }

  const currentPage = params.currentPage ?? 1
  const pageSize = params.pageSize ?? 10
  const total = list.length
  const start = (currentPage - 1) * pageSize
  const pageList = list.slice(start, start + pageSize)

  const result = { list: pageList, total }

  // 只在【点击查询】时输出
  if (manualQuery.value) {
    console.log("查询结果：", result)
    manualQuery.value = false
  }

  return result
}

// 绑定查询事件
const onQuery = () => {
  manualQuery.value = true
}
</script>