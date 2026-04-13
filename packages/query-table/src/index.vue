<template>
  <div class="au-query-table">
    <au-query-condition
      v-if="showSearch"
      ref="queryRef"
      v-bind="normalizedQueryProps"
      @submit="handleQuerySubmit"
      @reset="handleQueryReset"
      @handleEvent="(type: string, val: any, form: Record<string, any>) => emits('query-change', type, val, form)"
    >
      <template v-for="name in querySlotNames" #[name]="data">
        <slot :name="name" v-bind="data" />
      </template>
      <template #querybar>
        <slot name="querybar" />
        <slot name="search-extra" :search-values="state.queryForm" :reset-search="reset" :search="query" />
      </template>
    </au-query-condition>

    <slot
      v-if="$slots.table"
      name="table"
      :data="state.tableData"
      :loading="loading"
      :pagination="normalizedTableProps.table"
    />
    <au-table v-else ref="tableRef" v-bind="innerTableProps" @page-change="handlePageChange">
      <template #toolbar>
        <slot name="toolbar" />
        <el-button v-if="showExport" v-bind="exportButtonProps" @click="handleExport">
          {{ exportButtonText }}
        </el-button>
      </template>
      <template #empty>
        <slot name="empty" />
      </template>
      <template v-for="name in tableSlotNames" #[name]="data">
        <slot :name="name" v-bind="data" />
      </template>
    </au-table>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, useSlots } from "vue"
import AuQueryCondition from "../../query-condition/src/index.vue"
import AuTable from "../../table/src/index.vue"
import type { AuQueryTableExpose, AuQueryTableProps, PaginationProps } from "./type"

defineOptions({ name: "AuQueryTable" })

const props = withDefaults(defineProps<AuQueryTableProps>(), {
  showSearch: true,
  autoLoad: true,
  immediate: true,
  autoQueryOnReset: true,
  resetToFirstPage: true,
  showExport: false,
  exportButtonProps: () => ({}),
  exportButtonText: "导出",
  defaultPageSize: 10,
  pageSizes: () => [10, 20, 50, 100],
  requestDataPath: "list",
  requestTotalPath: "total"
})

const emits = defineEmits([
  "query",
  "reset",
  "export",
  "request-success",
  "request-error",
  "query-change",
  "page-change",
  "search",
  "load"
])

const slots = useSlots()
const queryRef = ref<InstanceType<typeof AuQueryCondition> | null>(null)
const tableRef = ref<InstanceType<typeof AuTable> | null>(null)
const loading = ref(false)
let requestSerial = 0

const state = reactive({
  queryForm: {} as Record<string, any>,
  tableData: [] as any[],
  total: 0,
  pagination: {
    currentPage: 1,
    pageSize: props.defaultPageSize,
    pageSizes: props.pageSizes,
    total: 0
  } as PaginationProps
})

const buildQueryOptsBySearchConfig = (searchConfig: AuQueryTableProps["searchConfig"]) => {
  const fields = searchConfig?.fields ?? []
  return fields.reduce((acc: Record<string, any>, field) => {
    acc[field.key] = {
      label: field.label,
      comp: field.component,
      bind: field.props || {},
      defaultVal: field.defaultValue,
      span: field.span
    }
    return acc
  }, {})
}

const normalizedQueryProps = computed(() => {
  if (props.queryProps) return props.queryProps
  return {
    opts: buildQueryOptsBySearchConfig(props.searchConfig),
    labelWidth: (props.searchConfig?.labelWidth || "120px") as string | undefined,
    isShowOpen: props.searchConfig?.collapse ?? true
  } as const
})

const normalizedTableProps = computed(() => {
  if (props.tableProps) return props.tableProps
  const tableConfig = props.tableConfig as any
  return {
    table: {
      ...(tableConfig || {}),
      data: tableConfig?.data || [],
      currentPage: state.pagination.currentPage,
      pageSize: state.pagination.pageSize,
      total: state.total,
      pageSizes: props.pageSizes
    },
    columns: props.columns || []
  } as any
})

const innerTableProps = computed(() => {
  return {
    ...normalizedTableProps.value,
    tableLoading: loading.value || normalizedTableProps.value.tableLoading,
    table: {
      ...normalizedTableProps.value.table,
      data: state.tableData,
      total: state.total
    }
  }
})

const querySlotNames = computed(() => {
  return Object.keys(slots).filter(name => name !== "toolbar" && name !== "querybar")
})

const tableSlotNames = computed(() => {
  return Object.keys(slots).filter(name => name !== "toolbar")
})

const getByPath = (source: Record<string, any>, path: string) => {
  return path.split(".").reduce((acc: any, key: string) => acc?.[key], source)
}

const buildRequestParams = (extraParams?: Record<string, any>) => {
  return {
    ...state.queryForm,
    currentPage: state.pagination.currentPage,
    pageSize: state.pagination.pageSize,
    ...(extraParams ?? {})
  }
}

const query = async (extraParams?: Record<string, any>) => {
  emits("query", state.queryForm)
  emits("search", state.queryForm)
  if (!props.request) return
  loading.value = true
  const currentSerial = ++requestSerial
  try {
    const result = await props.request(buildRequestParams(extraParams))
    if (currentSerial !== requestSerial) return
    const list = getByPath(result as Record<string, any>, props.requestDataPath) ?? result?.list ?? []
    const total = getByPath(result as Record<string, any>, props.requestTotalPath) ?? result?.total ?? 0
    state.tableData = list
    state.total = total
    state.pagination.total = total
    emits("request-success", result)
    emits("load", list, total)
  } catch (error) {
    if (currentSerial !== requestSerial) return
    emits("request-error", error)
  } finally {
    if (currentSerial === requestSerial) {
      loading.value = false
    }
  }
}

const handleQuerySubmit = (form: Record<string, any>) => {
  state.queryForm = { ...form }
  if (props.resetToFirstPage) {
    state.pagination.currentPage = 1
  }
  query()
}

const handleQueryReset = (form: Record<string, any>) => {
  state.queryForm = { ...form }
  emits("reset", form)
  if (props.resetToFirstPage) {
    state.pagination.currentPage = 1
  }
  if (props.autoQueryOnReset) {
    query()
  }
}

const handlePageChange = (page: number) => {
  state.pagination.currentPage = page
  emits("page-change", page, state.pagination.pageSize)
  query()
}

// 补上 pagination，完全匹配类型
const handleExport = async () => {
  const payload = {
    queryForm: state.queryForm,
    tableData: state.tableData,
    pagination: { ...state.pagination }
  }
  if (props.exportHandler) {
    await props.exportHandler(payload)
  }
  emits("export", payload)
}

const reset = () => {
  queryRef.value?.resetHandle()
}

const reload = async () => {
  await query()
}

const getQueryForm = () => {
  return { ...state.queryForm }
}

onMounted(() => {
  const currentForm = queryRef.value?.queryState?.form ?? {}
  state.queryForm = { ...currentForm }
  if (props.tableConfig?.data) {
    state.tableData = props.tableConfig.data
    state.total = props.tableConfig.total ?? 0
    state.pagination.total = state.total
  }
  if (props.autoLoad ?? props.immediate) {
    query()
  }
})

defineExpose<AuQueryTableExpose>({
  query,
  reset,
  reload,
  getQueryForm
})
</script>

<style lang="scss" scoped>
.au-query-table {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
</style>