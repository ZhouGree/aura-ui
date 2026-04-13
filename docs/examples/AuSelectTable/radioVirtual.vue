<template>
  <au-layout-page>
    <au-layout-page-item>
      <au-select-table
        ref="singleTableRef"
        :table="table"
        :columns="table.columns"
        :max-height="400"
        :use-virtual="true"
        :virtual-show-size="20"
        placeholder="请选择（虚拟滚动--单选）"
        :keywords="{ label: 'name', value: 'id' }"
        @radio-change="(...args) => radioChange(args, '单选')"
      >
        <!-- 空状态兜底，避免空表触发虚拟滚动报错 -->
        <template #empty>
          <el-empty description="暂无数据" />
        </template>
      </au-select-table>
    </au-layout-page-item>
  </au-layout-page>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue"

const singleTableRef = ref<any>(null)
const table = ref({
  data: [] as any[],
  columns: [
    { label: "物料编号", minWidth: 100, prop: "code" },
    { label: "物料名称", minWidth: 150, prop: "name" },
    { label: "规格", minWidth: 150, prop: "spec" },
    { label: "单位", minWidth: 110, prop: "unitName" }
  ]
})

onMounted(async () => {
  // 关键：等 DOM 完全渲染后，再加载数据，避免虚拟滚动访问空 DOM
  await nextTick()
  initData()
})

const initData = () => {
  const tableData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    code: i + 1,
    name: `物料名称${i + 1}`,
    spec: `物料规格${i + 1}`,
    unitName: "吨"
  }))
  table.value.data = tableData
}

const radioChange = (args: any[], type: string) => {
  console.log("单选--传给后台的值", args, type)
}
</script>