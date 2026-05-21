<template>
  <au-query-table
    :search-config="searchConfig"
    :table-config="tableConfig"
    :columns="columns"
    :request="request"
    :show-export="true"
  >
    <template #search-extra="{ search }">
      <el-button link type="primary" @click="search()">立即搜索</el-button>
    </template>

    <template #toolbar>
      <el-tag type="success">自定义工具栏区域</el-tag>
      <el-button type="primary" size="small" style="margin-left: 12px">
        新增员工
      </el-button>
      <el-button size="small">批量操作</el-button>
    </template>

    <template #empty>
      <el-empty
        :image-size="100"
        description="暂无匹配的员工数据，请调整搜索条件"
      />
    </template>
  </au-query-table>
</template>

<script setup lang="ts">
import { reactive } from "vue"

const searchConfig = reactive({
  fields: [
    {
      label: "姓名",
      key: "name",
      component: "el-input",
      props: { placeholder: "请输入员工姓名", clearable: true }
    }
  ],
  labelWidth: "70px"
})

const tableConfig = reactive({
  data: [],
  currentPage: 1,
  pageSize: 10,
  total: 0
})

const columns = [
  { label: "工号", prop: "jobNo", width: 120 },
  { label: "姓名", prop: "name", minWidth: 180 }
]

const request = async (params: { name?: string }) => {
  const source = [
    { jobNo: "U1001", name: "王一" },
    { jobNo: "U1002", name: "李二" },
    { jobNo: "U1003", name: "张三" },
    { jobNo: "U1004", name: "李四" },
    { jobNo: "U1005", name: "王五" },
    { jobNo: "U1006", name: "赵六" },
    { jobNo: "U1007", name: "钱七" },
    { jobNo: "U1008", name: "孙八" },
    { jobNo: "U1009", name: "周九" },
    { jobNo: "U1010", name: "吴十" },
    { jobNo: "U1011", name: "郑十一" },
    { jobNo: "U1012", name: "王十二" },
    { jobNo: "U1013", name: "冯十三" },
    { jobNo: "U1014", name: "陈十四" },
    { jobNo: "U1015", name: "褚十五" }
  ]

  const list = source.filter(item => !params.name || item.name.includes(params.name))
  return { list, total: list.length }
}
</script>