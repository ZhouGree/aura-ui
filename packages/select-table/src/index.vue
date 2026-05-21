<template>
  <el-input
    v-if="isShowInput"
    v-model="selectInputVal"
    v-bind="{ clearable: true, ...inputAttr }"
    @focus="() => emits('input-focus')"
    @blur="() => emits('input-blur')"
    @click="() => emits('input-click')"
    @clear="() => emits('input-clear')"
    :style="{ width: inputWidth ? `${inputWidth}px` : '100%' }"
  >
    <template v-for="(index, name) in slots" v-slot:[name]="data">
      <slot :name="name" v-bind="data" />
    </template>
  </el-input>
  <el-select
    v-else
    ref="selectRef"
    :model-value="multiple ? state.defaultValue : selectDefaultLabel"
    popper-class="au-select-table"
    :style="{ width: selectWidth ? `${selectWidth}px` : '100%' }"
    :value-key="keywords.value"
    :filter-method="filterMethod || filterMethodHandle"
    v-click-outside="closeBox"
    @visible-change="visibleChange"
    @remove-tag="removeTag"
    @clear="clear"
    @keyup="selectKeyup"
    v-bind="{ clearable: true, multiple, filterable, remote, remoteMethod, ...$attrs }"
  >
    <template #empty>
      <div
        class="au-table-select__table"
        :style="{ width: tableWidth ? `${tableWidth}px` : '100%' }"
      >
        <div class="table_query_condition" v-if="isShowQuery">
          <au-query-condition
            ref="auQueryConditionRef"
            :boolEnter="false"
            @handleEvent="handleEvent"
            v-bind="$attrs"
          >
            <template v-for="(index, name) in slots" v-slot:[name]="data">
              <slot :name="name" v-bind="data"></slot>
            </template>
            <template #querybar v-if="isShowBlurBtn">
              <el-button v-bind="{ type: 'danger', ...btnBind }" @click="blur">
                {{ btnBind.btnTxt || "关闭下拉框" }}
              </el-button>
              <slot name="querybar"></slot>
            </template>
          </au-query-condition>
        </div>
        <div class="header_wrap" :style="{ paddingBottom: isShowSlot('toolbar') ? '10px' : 0 }">
          <slot name="toolbar"></slot>
        </div>
        <div class="table_content" v-loading="tableLoading" :element-loading-text="loadingTxt">
          <el-table
            ref="selectTable"
            :data="state.tableData"
            :class="{
              radioStyle: !multiple,
              highlightCurrentRow: isRadio,
              keyUpStyle: isKeyup,
              au_select_table_multiple: useVirtual && multiple,
              au_select_table_radio: useVirtual && !multiple
            }"
            :row-class-name="getRowClassName"
            :row-key="getRowKey"
            @row-click="rowClick"
            @cell-dblclick="cellDblclick"
            @selection-change="handlesSelectionChange"
            v-bind="{ border, size: tableSize, 'highlight-current-row': true, ...$attrs }"
          >
            <el-table-column
              v-if="multiple"
              type="selection"
              :width="tableSize === 'large' ? 65 : 55"
              :align="align || 'center'"
              :reserve-selection="reserveSelection"
              :selectable="selectable"
              :fixed="multipleFixed"
            ></el-table-column>
            <el-table-column
              type="radio"
              :width="tableSize === 'large' ? 65 : 55"
              :label="radioTxt"
              :fixed="radioFixed"
              :align="align || 'center'"
              v-if="!multiple && isShowFirstRadio"
            >
              <template #default="scope">
                <el-radio
                  v-model="radioVal"
                  :label="scope.$index + 1"
                  :disabled="scope.row.isRadioDisabled"
                  @click.stop="radioChangeHandle($event, scope.row, scope.$index + 1)"
                ></el-radio>
              </template>
            </el-table-column>
            <el-table-column
              v-for="(item, index) in columns"
              :key="index + 'i'"
              :type="item.type"
              :label="item.label"
              :prop="item.prop"
              :min-width="item['min-width'] || item.minWidth"
              :width="item.width"
              :align="item.align || align || 'center'"
              :fixed="item.fixed"
              v-bind="{ 'show-overflow-tooltip': true, ...item.bind }"
            >
              <template #default="scope">
                <template v-if="item.render">
                  <render-col
                    :column="item"
                    :row="scope.row"
                    :render="item.render"
                    :index="scope.$index"
                  />
                </template>
                <template v-if="item.slotName">
                  <slot :name="item.slotName" :scope="scope"></slot>
                </template>
                <div v-if="!item.render && !item.slotName">
                  <span>{{ scope.row[item.prop] }}</span>
                </div>
              </template>
            </el-table-column>
            <slot></slot>
          </el-table>
          <div class="au-table-select__page" v-if="isShowPagination">
            <el-pagination
              v-model:current-page="table.currentPage"
              v-model:page-size="table.pageSize"
              @current-change="handlesCurrentChange"
              layout="total, prev, pager, next, jumper"
              :pager-count="table['pager-count'] || 5"
              :total="table.total"
              v-bind="{ background: true, size: paginationSize || 'small', ...$attrs }"
            />
          </div>
        </div>
        <slot name="footer"></slot>
      </div>
    </template>
  </el-select>
</template>

<script setup lang="ts">
import AuQueryCondition from "../../query-condition/src/index.vue"
import RenderCol from "./renderCol.vue"
import {
  computed,
  useAttrs,
  useSlots,
  ref,
  watch,
  nextTick,
  reactive,
  onMounted,
  onUpdated,
  onBeforeUnmount
} from "vue"
import type { AuSelectTableProps } from "@/select-table/src/type"
import { ElMessage } from "element-plus"
import ClickOutside from "../../utils/directives/click-outside/index"

import { useVirtualized } from "./useVirtualized"
const {
  scrollContainerEl,
  updateRenderedItemCache,
  updateOffset,
  getDom,
  saveDATA,
  getItemHeightFromCache
} = useVirtualized()

const props = withDefaults(defineProps<AuSelectTableProps>(), {
  modelValue: undefined,
  inputValue: undefined,
  defaultSelectVal: () => [],
  radioSelectValLabel: "",
  table: () => ({
    data: [],
    currentPage: 1,
    pageSize: 10,
    total: 0
  }),
  keywords: () => ({
    value: "value",
    label: "label"
  }),
  columns: () => [],
  multiple: false,
  filterable: true,
  remote: false,
  remoteMethod: undefined,
  filterMethod: undefined,
  isShowInput: false,
  inputAttr: () => ({}),
  inputWidth: 550,
  selectWidth: 550,
  tableWidth: 550,
  isShowQuery: false,
  isShowBlurBtn: false,
  btnBind: () => ({ btnTxt: "关闭下拉框" }),
  align: "center",
  reserveSelection: true,
  selectable: undefined,
  multipleFixed: true,
  radioTxt: "单选",
  radioFixed: true,
  tableSize: "default",
  border: true,
  isShowFirstColumn: true,
  useVirtual: false,
  virtualShowSize: 30,
  isShowPagination: false,
  paginationSize: "small",
  selfExpanded: false,
  isClearQuery: false,
  isRadioEchoLabel: true,
  defaultValIsOpenRadioChange: false,
  radioSameIsCancel: true,
  rowClickRadio: true,
  isKeyup: false,
  isExpanded: false,
  multipleDisableDelete: true,
  tableLoading: false,
  loadingTxt: "加载中..."
})
defineOptions({
  name: "AuSelectTable"
})
const vClickOutside = ClickOutside
export type Emits = {
  (event: "page-change", val: any): void
  (event: "selectionChange", val: any[], ids: any[]): void
  (event: "radioChange", row: any, value: any): void
  (event: "update:inputValue", val: string): void
  (event: "input-focus"): void
  (event: "input-blur"): void
  (event: "input-clear"): void
  (event: "input-click"): void
}
const emits = defineEmits<Emits>()
const slots = useSlots()
const isDefaultSelectVal = ref(true)
const forbidden = ref(true)
const isRadio = ref(false)
const isQueryVisible = ref(false)
const isVisible = ref(false)
const radioVal = ref<any>("")
const isShowFirstRadio = ref(props.isShowFirstColumn)
const selectDefaultLabel: any = ref(props.modelValue)
const scrollTopNum = ref(0)
let selectInputVal = computed({
  get() {
    return props.inputValue
  },
  set(val) {
    emits("update:inputValue", val)
  }
})
interface InitState {
  defaultSelectValue: any[]
  tableData: any[]
  defaultValue: any
  ids: any[]
  tabularMap: any
}
const state = reactive<InitState>({
  defaultSelectValue: props.defaultSelectVal,
  tableData: props.table.data,
  defaultValue: props.value,
  ids: [],
  tabularMap: {}
})
const selectRef = ref<HTMLElement | any>(null)
const selectTable = ref<HTMLElement | any>(null)
const auQueryConditionRef = ref<HTMLElement | any>(null)
const nowIndex = ref(-1)
const tableDataLabelList = computed(() => {
  return state.tableData.map((item: any) => item[props.keywords.label])
})

watch(
  () => props.table.data,
  val => {
    if (props.useVirtual) {
      saveDATA.value = val
      updateRenderData(scrollTopNum.value)
    } else {
      state.tableData = val
      if (props.multiple && props.multipleDisableDelete) {
        selectRef.value?.$el?.querySelectorAll(".el-tag").forEach(item => {
          if (
            tableDataLabelList.value?.includes(
              item.querySelector(".el-select__tags-text")?.innerText
            )
          ) {
            item.querySelector(".el-tag__close").style = "display: block"
          } else {
            item.querySelector(".el-tag__close").style = "display: none"
          }
        })
      }
    }
    nextTick(() => {
      state.tableData &&
        state.tableData.length > 0 &&
        state.tableData.forEach((item: { [x: string]: any }) => {
          state.tabularMap[item[props.keywords.value]] = item[props.keywords.label]
        })
    })
  },
  { deep: true }
)

watch(
  () => props.defaultSelectVal,
  val => {
    state.defaultSelectValue = val
    if (val.length > 0) {
      if (props.multiple) {
        if (isDefaultSelectVal.value) {
          defaultSelect(state.defaultSelectValue)
        }
      } else {
        defaultSelect(state.defaultSelectValue)
      }
    }
  },
  { deep: true }
)

watch(
  () => props.radioSelectValLabel,
  val => {
    if (val) findLabel()
  },
  { deep: true }
)

onMounted(() => {
  if (state.defaultSelectValue && state.defaultSelectValue.length > 0 && isDefaultSelectVal.value) {
    defaultSelect(state.defaultSelectValue)
  }
  if (props.selfExpanded) {
    selectRef.value.expanded = true
  }
  if (props.useVirtual) {
    saveDATA.value = props.table.data
    isShowFirstRadio.value = false
    getDom(props)
    if (scrollContainerEl.value) {
      scrollContainerEl.value.addEventListener("scroll", handleScroll)
    }
  }
  if (props.radioSelectValLabel) findLabel()
})

// ==============================================
// ✅ 修复：滚动前判断 DOM 存在（最关键！！！）
// ==============================================
const updateRenderData = (scrollTop: number) => {
  if (!scrollContainerEl.value) return // 加这个就不报错了
  let startIndex = 0
  let offsetHeight = 0
  for (let i = 0; i < saveDATA.value.length; i++) {
    offsetHeight += getItemHeightFromCache(i)
    if (offsetHeight >= scrollTop) {
      startIndex = i
      break
    }
  }
  state.tableData = saveDATA.value.slice(startIndex, startIndex + props.virtualShowSize)
  updateRenderedItemCache(startIndex)
  updateOffset(offsetHeight - getItemHeightFromCache(startIndex))
}

const handleScroll = (e: any) => {
  if (!scrollContainerEl.value) return // 加这个
  scrollTopNum.value = e.target.scrollTop
  updateRenderData(scrollTopNum.value)
}

onBeforeUnmount(() => {
  if (props.useVirtual && scrollContainerEl.value) {
    scrollContainerEl.value.removeEventListener("scroll", handleScroll)
    scrollContainerEl.value = null // 置空 DOM
  }
})

onUpdated(() => {
  if (props.isShowQuery) {
    selectTable.value.doLayout()
  }
})

// ==============================================
// ✅ 修复：关闭下拉时清空虚拟滚动状态
// ==============================================
const visibleChange = (visible: boolean) => {
  isVisible.value = visible
  if (isQueryVisible.value) {
    selectRef.value.expanded = true
  }
  if (visible) {
    initTableData()
    if (props.useVirtual) {
      saveDATA.value = props.table.data
      updateRenderData(scrollTopNum.value)
    }
  } else {
    if (auQueryConditionRef.value && props.isShowQuery && props.isClearQuery && !selectRef.value.expanded && !props.selfExpanded) {
      auQueryConditionRef.value?.resetData()
    }
    findLabel()
    filterMethodHandle("")

    // ✅ 修复：关闭时清空虚拟滚动
    if (props.useVirtual) {
      state.tableData = []
      saveDATA.value = []
      scrollContainerEl.value = null
    }
  }
  if (props.selfExpanded) {
    selectRef.value.expanded = true
  }
}

const handleEvent = () => {
  selectRef.value.expanded = true
}
const queryVisibleChange = (val: boolean) => {
  isQueryVisible.value = val
}
const closeBox = () => {
  if (auQueryConditionRef.value && props.isShowQuery) {
    selectRef.value.expanded = true
    Object.values(auQueryConditionRef.value?.props?.opts).map((val: any) => {
      if (val.comp.includes("select") || val.comp.includes("picker") || val.comp.includes("date")) {
        val.eventHandle = {
          "visible-change": ($event: boolean) => queryVisibleChange($event)
        }
        selectRef.value.expanded = true
      }
    })
    if (isVisible.value && props.isShowQuery) {
      selectRef.value.expanded = true
    } else {
      selectRef.value.expanded = false
    }
  }
}
const attrs: any = useAttrs()
const selectKeyup = (e: { keyCode: any }) => {
  if (!props.multiple && props.isKeyup && state.tableData.length > 0) {
    const newIndex = nowIndex.value * 1
    const nextIndex = e.keyCode === 40 ? newIndex + 1 : e.keyCode === 38 ? newIndex - 1 : newIndex
    const rowHeight = selectTable.value.$el.querySelectorAll(".el-table__row")[0]?.clientHeight || 0
    const headerHeight =
      selectTable.value.$el.querySelectorAll(".el-table__header")[0]?.clientHeight || 0
    const attrsMaxHeight =
      (typeof (attrs["max-height"] || attrs["maxHeight"]) === "number"
        ? attrs["max-height"] || attrs["maxHeight"]
        : parseFloat(attrs["max-height"] || attrs["maxHeight"])) || 0
    const maxHeight = attrsMaxHeight ? attrsMaxHeight - headerHeight : 0
    const height = rowHeight * (nextIndex + 3)
    const scrollTop = height > maxHeight ? height - maxHeight : 0
    if (attrsMaxHeight) {
      selectTable.value.setScrollTop(scrollTop)
    }
    const validNextIndex = Math.max(0, Math.min(nextIndex, state.tableData.length - 1))
    selectTable.value.setCurrentRow(state.tableData[validNextIndex])
    nowIndex.value = validNextIndex
    if (e.keyCode === 13) {
      rowClick(state.tableData[validNextIndex])
    }
  }
}
const findLabel = () => {
  nextTick(() => {
    if (props.multiple) {
      selectRef.value.selected?.forEach((item: { currentLabel: any; value: any }) => {
        item.currentLabel = item.value
      })
    } else {
      if (props.isRadioEchoLabel) {
        selectDefaultLabel.value =
          (state.defaultValue && state.defaultValue[props.keywords.label]) ||
          props.radioSelectValLabel
      } else {
        selectDefaultLabel.value =
          (state.defaultValue && state.defaultValue[props.keywords.label]) || ""
      }
    }
  })
}
const handlesCurrentChange = (val: any) => {
  if (props.multiple) {
    if (!props.reserveSelection) {
      clear()
    }
  } else {
    reset()
  }
  emits("page-change", val)
}
const reset = () => {
  if (!props.multiple) {
    selectTable.value.setCurrentRow(-1)
    nowIndex.value = -1
    radioVal.value = ""
    isDefaultSelectVal.value = true
    forbidden.value = false
  }
}
const defaultSelect = (defaultSelectVal: any[]) => {
  if (props.multiple) {
    const multipleList = defaultSelectVal
      .map(val => state.tableData.find(row => row[props.keywords.value] === val))
      .filter(Boolean) as any[]
    setTimeout(() => {
      state.defaultValue = multipleList.map(item => item[props.keywords.label])
      multipleList.forEach(row => {
        selectTable.value.toggleRowSelection(row, true)
      })
      selectRef.value?.selected?.forEach(item => {
        item.currentLabel = item.value
      })
    }, 0)
  } else {
    setTimeout(() => {
      const row = state.tableData.find(item => item[props.keywords.value] === defaultSelectVal[0])
      if (row) {
        radioVal.value = state.tableData.indexOf(row) + 1
        state.defaultValue = row
        selectDefaultLabel.value = row[props.keywords.label]
        if (!props.defaultValIsOpenRadioChange) {
          emits("radioChange", row, row[props.keywords.value])
        }
      }
    }, 0)
  }
}
const handlesSelectionChange = (val: any[]) => {
  isDefaultSelectVal.value = false
  state.defaultValue = val.map(item => item[props.keywords.label])
  state.ids = val.map(item => item[props.keywords.value])
  if (val.length === 0) {
    isDefaultSelectVal.value = true
    state.defaultSelectValue = []
  }
  emits("selectionChange", val, state.ids)
}
const getRowClassName = ({ row }: any) => {
  if (!props.multiple && JSON.stringify(row) === JSON.stringify(state.defaultValue)) {
    return "selected_row_style"
  }
  return ""
}
const getRowKey = (row: { [x: string]: any }) => {
  return row[props.keywords.value]
}
const filterMethodHandle = (val: string) => {
  if (!props.filterable) return
  if (props.filterable && props.remote && typeof props.remoteMethod === "function") {
    props.remoteMethod(val)
    return
  }
  const tableData = JSON.parse(JSON.stringify(props.table?.data))
  if (!tableData || tableData.length === 0) return
  if (!props.multiple) {
    if (val) {
      radioVal.value = ""
    } else {
      const defaultIndex = tableData.findIndex(
        item => item[props.keywords.label] === selectDefaultLabel.value
      )
      if (defaultIndex !== -1) {
        radioVal.value = defaultIndex + 1
      }
    }
  }
  state.tableData = tableData.filter(item => {
    return item[props.keywords.label]?.includes(val)
  })
  if (selectDefaultLabel.value) {
    const defaultIndex = state.tableData.findIndex(
      item => item[props.keywords.label] === selectDefaultLabel.value
    )
    if (defaultIndex !== -1) {
      radioVal.value = defaultIndex + 1
    }
  }
}
const initTableData = () => {
  nextTick(() => {
    if (props.multiple) {
      state.defaultValue?.forEach(row => {
        const matchedRow = state.tableData.find(
          item => item[props.keywords.value] === row[props.keywords.value]
        )
        if (matchedRow) {
          selectTable.value.toggleRowSelection(matchedRow, true)
        }
      })
    } else {
      const matchedRow = state.tableData?.find(
        item => item[props.keywords.value] === selectDefaultLabel.value
      )
      if (matchedRow) {
        selectTable.value.setCurrentRow(matchedRow)
      }
    }
  })
}
const copyToClipboard = async (text: any) => {
  if (typeof text !== "string" || text.trim() === "") {
    throw new Error("无效的复制内容")
  }
  try {
    await navigator.clipboard.writeText(text)
  } catch (error) {
    if ((error as any).name === "NotAllowedError" || (error as any).name === "SecurityError") {
      throw new Error("复制失败：权限被拒绝")
    } else {
      throw new Error("复制失败：浏览器不支持或发生未知错误")
    }
  }
}
const showMessage = (type: "success" | "error", message: string) => {
  if (type === "success") {
    ElMessage.success(message)
  } else {
    ElMessage.error(message)
  }
}
const cellDblclick = async (row: { [x: string]: any }, column: { property: string | number }) => {
  const value = row[column.property]
  try {
    await copyToClipboard(String(value))
    showMessage("success", "复制成功")
  } catch (error: any) {
    showMessage("error", error.message || "复制失败")
  }
}
const radioChangeHandle = (event: { preventDefault: () => void }, row: any, index: any) => {
  event.preventDefault()
  if (row.isRadioDisabled) return
  isDefaultSelectVal.value = false
  radioClick(row, index)
}
const isForbidden = () => {
  forbidden.value = false
  setTimeout(() => {
    forbidden.value = true
  }, 0)
}
const radioClick = (row: { [x: string]: any }, index: string | number) => {
  forbidden.value = !forbidden.value
  if (radioVal.value === index) {
    if (!props.radioSameIsCancel) return
    clear()
  } else {
    updateState(row, index)
  }
  if (props.isExpanded && state.defaultValue) {
    selectDefaultLabel.value = state.defaultValue[props.keywords.label] || ""
    selectRef.value.expanded = true
  } else {
    blur()
  }
}
const updateState = (row: { [x: string]: any }, index: string | number) => {
  isForbidden()
  radioVal.value = index
  state.defaultValue = row
  emits("radioChange", row, row[props.keywords.value])
}
const rowClick = async (row: { [x: string]: any }) => {
  if (row.isRadioDisabled) return
  if (!props.rowClickRadio) return
  if (!props.multiple) {
    const rowIndex = props.table?.data.findIndex(
      item => item[props.keywords.value] === row[props.keywords.value]
    )
    if (rowIndex !== -1) {
      isDefaultSelectVal.value = false
      await radioClick(row, rowIndex + 1)
      if (radioVal.value) {
        isRadio.value = true
      } else {
        isRadio.value = false
      }
    }
  }
}
const removeTag = (tag: any) => {
  const row = state.tableData.find(
    (item: { [x: string]: any }) => item[props.keywords.label] === tag
  )
  row && selectTable.value.toggleRowSelection(row, false)
  isDefaultSelectVal.value = true
}
const clear = () => {
  const resetDefaultState = () => {
    isDefaultSelectVal.value = true
    state.defaultSelectValue = []
    state.defaultValue = props.multiple ? [] : null
  }
  if (!selectTable.value) {
    console.warn("selectTable.value is not initialized")
    return
  }
  if (props.multiple === true) {
    try {
      selectTable.value.clearSelection()
    } catch (error) {
      console.error("Failed to clear selection:", error)
    }
    resetDefaultState()
  } else if (props.multiple === false) {
    try {
      selectTable.value.setCurrentRow(-1)
    } catch (error) {
      console.error("Failed to set current row:", error)
    }
    nowIndex.value = -1
    radioVal.value = ""
    forbidden.value = false
    selectDefaultLabel.value = null
    resetDefaultState()
    emits("radioChange", null, null)
  } else {
    console.warn("Invalid value for props.multiple:", props.multiple)
  }
}
const blur = () => {
  selectRef.value.blur()
}
const focus = () => {
  selectRef.value.focus()
}
const isShowSlot = (name: string) => {
  return Object.keys(slots).includes(name)
}
defineExpose({
  focus,
  blur,
  clear,
  props,
  state,
  auQueryConditionRef,
  selectRef,
  selectTable
})
</script>

<style lang="scss">
.au-select-table {
  .radioStyle {
    .el-radio {
      .el-radio__label {
        display: none;
      }
      &:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
        box-shadow: none;
      }
    }
    .el-table__row {
      cursor: pointer;
    }
  }
  .keyUpStyle {
    .el-table__body {
      tbody {
        .current-row {
          color: var(--el-color-primary) !important;
          cursor: pointer;
        }
      }
    }
  }
  .selected_row_style {
    color: var(--el-color-primary);
    cursor: pointer;
  }
  .highlightCurrentRow {
    :deep(.current-row) {
      color: var(--el-color-primary);
      cursor: pointer;
    }
  }
  .au-table-select__table {
    padding: 10px;
    .el-table__body,
    .el-table__header {
      margin: 0;
    }
    .table_query_condition {
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 10px;
    }
    .header_wrap {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .au-table-select__page {
    padding-top: 5px;
    padding-right: 10px;
    .el-pagination {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: calc(2% - 20px);
      background-color: var(--el-table-tr-bg-color);
    }
  }
}
</style>