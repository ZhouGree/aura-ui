<template>
  <el-space style="margin-bottom: 10px">
    <el-button type="primary" @click="handleManualLoad">手动加载</el-button>
    <el-button @click="handleResetClear">重置数据</el-button>
  </el-space>

  <au-query-table
    ref="queryRef"
    :search-config="searchConfig"
    :table-config="tableConfig"
    :columns="columns"
    :request="request"
    :auto-load="false"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"

const queryRef = ref<any>(null)

// 搜索配置
const searchConfig = reactive({
  fields: [
    {
      label: "模块名",
      key: "module",
      component: "el-input",
      props: { placeholder: "输入模块名过滤" }
    }
  ],
  labelWidth: "88px"
})

// 表格配置
const tableConfig = reactive({
  data: [],
  currentPage: 1,
  pageSize: 10,
  total: 0
})

// 列配置
const columns = [
  { label: "ID", prop: "id", width: 100 },
  { label: "模块", prop: "module" }
]

// 基础数据源（每次手动加载追加5条）
const baseData = [
  { id: 1, module: "资产中心" },
  { id: 2, module: "消息中心" },
  { id: 3, module: "组织中心" },
  { id: 4, module: "流程中心" },
  { id: 5, module: "权限中心" }
]

// ==============================================
// 核心状态：仅手动加载时修改，彻底隔离其他操作
// ==============================================
const loadedData = ref<any[]>([])

// ==============================================
// 请求方法：仅做筛选+分页，绝不修改loadedData
// ==============================================
const request = async (params: { module?: string; currentPage?: number; pageSize?: number }) => {
  // 1. 基于当前已加载数据做筛选（不修改原数据）
  let list = [...loadedData.value]
  if (params.module) {
    list = list.filter(item => item.module.includes(params.module!))
  }

  // 2. 分页计算
  const currentPage = params.currentPage ?? 1
  const pageSize = params.pageSize ?? 10
  const total = list.length
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const pageList = list.slice(start, end)

  const result = { list: pageList, total }
  // 仅在手动加载时输出
  if (isManualLoad.value) {
    console.log("✅ 手动加载结果：", result)
    isManualLoad.value = false
  }

  return result
}

// ==============================================
// 手动加载标记：仅handleManualLoad触发时为true
// ==============================================
const isManualLoad = ref(false)

// ==============================================
// 1. 手动加载：唯一修改loadedData的入口
// ==============================================
const handleManualLoad = () => {
  isManualLoad.value = true
  // 追加5条新数据（ID不重复）
  const newBatch = baseData.map(item => ({
    ...item,
    id: item.id + loadedData.value.length
  }))
  loadedData.value = [...loadedData.value, ...newBatch]
  // 触发表格刷新
  queryRef.value?.query()
}

// ==============================================
// 2. 重置数据：彻底清空所有状态
// ==============================================
const handleResetClear = () => {
  // 1. 清空搜索框
  queryRef.value?.reset()
  // 2. 清空已加载数据（核心！彻底切断数据来源）
  loadedData.value = []
  // 3. 清空表格数据
  tableConfig.data = []
  tableConfig.total = 0
  // 4. 重置页码到第1页
  tableConfig.currentPage = 1
  // 5. 触发表格刷新（显示空数据）
  queryRef.value?.query()
}
</script>