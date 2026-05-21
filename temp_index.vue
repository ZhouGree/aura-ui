<template>
  <div class="au-table" ref="AuTableBox" v-loading="tableLoading" :element-loading-text="loadingTxt">
    <div
      class="header_wrap"
      :style="{
        paddingBottom:
          tableTitle ||
          title ||
          isShow('title') ||
          isShow('toolbar') ||
          isSlotToolbar ||
          columnSetting
            ? '10px'
            : 0
      }"
    >
      <div class="header_title" v-if="tableTitle || title || $slots.title || isSlotTitle">
        <template v-if="$slots.title || isSlotTitle">
          <slot name="title" />
        </template>
        <template v-else>
          <span v-if="tableTitle">{{ tableTitle }}</span>
          <span v-else>{{ title }}</span>
        </template>
      </div>
      <div class="toolbar_top">
        <!-- 琛ㄦ牸澶栨搷浣?-->
        <slot name="toolbar"></slot>
        <!--鍒楄缃寜閽?->
        <div
          class="header_right_wrap"
          :style="{
            marginLeft: isShow('toolbar') || isSlotToolbar ? '12px' : 0
          }"
        >
          <slot name="btn" />
          <column-set
            v-if="columnSetting && !isTableHeader"
            v-bind="$attrs"
            :title="title || tableTitle"
            :columns="renderColumns"
            ref="columnSetRef"
            @columnSetting="v => (state.columnSet = v)"
          />
        </div>
      </div>
    </div>
    <div class="title-tip" v-if="isShow('titleTip')">
      <slot name="titleTip" />
    </div>
    <el-table
      ref="AuTable"
      :data="state.tableData"
      :class="{
        cursor: isCopy,
        row_sort: isRowSort,
        row_sort_none: isRowSortIcon,
        tree_style: isTree,
        highlightCurrentRow: highlightCurrentRow,
        radioStyle: radioStyleClass,
        multile_head_column: isTableHeader,
        au_table_use_virtual: useVirtual
      }"
      v-bind="$attrs"
      :highlight-current-row="highlightCurrentRow"
      :border="border || table.border || isTableBorder || useVirtual"
      @cell-dblclick="cellDblclick"
      @row-click="rowClick"
    >
      <el-table-column
        v-if="isRowSortIcon"
        v-bind="{
          width: rowSortIconBind.width || 55,
          'min-width': rowSortIconBind['min-width'] || rowSortIconBind.minWidth,
          label: rowSortIconBind.label || '鎷栧姩',
          fixed: rowSortIconBind.fixed,
          align: rowSortIconBind.align || align,
          ...rowSortIconBind
        }"
      >
        <template #default>
          <el-icon class="row_drag" :color="rowSortIconBind.color" :size="rowSortIconBind.size"
            ><Rank
          /></el-icon>
        </template>
      </el-table-column>
      <!-- 澶嶉€夋/鍗曢€夋/搴忓垪鍙?-->
      <template v-if="!Array.isArray(table.firstColumn) && table.firstColumn">
        <!-- 澶嶉€夋 -->
        <el-table-column
          v-if="table.firstColumn.type === 'selection'"
          v-bind="{
            type: 'selection',
            width: table.firstColumn.width || 55,
            label: table.firstColumn.label,
            fixed: table.firstColumn.fixed,
            align: table.firstColumn.align || align,
            'reserve-selection': table.firstColumn.isPaging || false,
            selectable: table.firstColumn.selectable,
            ...table.firstColumn.bind
          }"
        />
        <el-table-column
          v-else
          v-bind="{
            type: table.firstColumn.type,
            width: table.firstColumn.width || 55,
            label:
              table.firstColumn.label ||
              (table.firstColumn.type === 'radio' && '鍗曢€?) ||
              (table.firstColumn.type === 'index' && '搴忓彿') ||
              (table.firstColumn.type === 'expand' && '') ||
              '',
            fixed: table.firstColumn.fixed,
            align: table.firstColumn.align || align,
            ...table.firstColumn.bind
          }"
        >
          <template #default="scope" v-if="table.firstColumn.type !== 'selection'">
            <el-radio
              v-if="table.firstColumn.type === 'radio'"
              v-model="radioVal"
              :label="scope.$index + 1"
              :disabled="scope.row.isRadioDisabled"
              @click="radioHandleChange(scope.row, scope.$index + 1)"
            ></el-radio>
            <template v-if="table.firstColumn.type === 'index'">
              <span v-if="isPaginationCumulative && isShowPagination">
                {{ (table.currentPage - 1) * table.pageSize + scope.$index + 1 }}
              </span>
              <span v-else>{{ scope.$index + 1 }}</span>
            </template>
            <template v-if="table.firstColumn.type === 'expand'">
              <slot name="expand" :scope="scope"></slot>
            </template>
          </template>
        </el-table-column>
      </template>
      <template v-if="Array.isArray(table.firstColumn)">
        <template v-for="(item, index) in table.firstColumn">
          <!-- 澶嶉€夋 -->
          <el-table-column
            :key="index + 1"
            v-if="item.type === 'selection'"
            v-bind="{
              type: 'selection',
              width: item.width || 55,
              label: item.label,
              fixed: item.fixed,
              align: item.align || align,
              'reserve-selection': item.isPaging || false,
              selectable: item.selectable,
              ...item.bind
            }"
          />
          <el-table-column
            v-else
            :key="index + 'k'"
            v-bind="{
              type: item.type,
              width: item.width || 55,
              label:
                item.label ||
                (item.type === 'radio' && '鍗曢€?) ||
                (item.type === 'index' && '搴忓彿') ||
                (item.type === 'expand' && '') ||
                '',
              fixed: item.fixed,
              align: item.align || align,
              ...item.bind
            }"
          >
            <template #default="scope" v-if="item.type !== 'selection'">
              <el-radio
                v-if="item.type === 'radio'"
                v-model="radioVal"
                :label="scope.$index + 1"
                :disabled="scope.row.isRadioDisabled"
                @click="radioHandleChange(scope.row, scope.$index + 1)"
              ></el-radio>
              <template v-if="item.type === 'index'">
                <span v-if="isPaginationCumulative && isShowPagination">
                  {{ (table.currentPage - 1) * table.pageSize + scope.$index + 1 }}
                </span>
                <span v-else>{{ scope.$index + 1 }}</span>
              </template>
              <template v-if="item.type === 'expand'">
                <slot name="expand" :scope="scope"></slot>
              </template>
            </template>
          </el-table-column>
        </template>
      </template>
      <!-- 涓讳綋鍐呭 -->
      <template v-for="(item, index) in renderColumns">
        <template v-if="!item.children">
          <!-- 甯歌鍒?-->
          <el-table-column
            v-if="typeof item.isShowCol == 'function' ? item.isShowCol(item) : !item.isShowCol"
            :key="index + 'i'"
            :type="item.type"
            :label="item.label"
            :prop="item.prop"
            :min-width="item['min-width'] || item.minWidth"
            :width="item.width"
            :sortable="item.sortable || item.sort || sortable"
            :align="item.align || align"
            :fixed="item.fixed"
            v-bind="{ 'show-overflow-tooltip': true, ...item.bind }"
          >
            <template #header v-if="item.headerRequired || item.renderHeader || item.isClickEdit">
              <render-header v-if="item.renderHeader" :column="item" :render="item.renderHeader" />
              <div style="display: inline" v-if="item.headerRequired">
                <span style="color: #f56c6c; font-size: 16px; margin-right: 3px">*</span>
                <span>{{ item.label }}</span>
              </div>
              <div
                v-if="item.isClickEdit"
                class="click_edit"
                :style="{ justifyContent: item.editIconAlign || align || 'center' }"
              >
                <span>{{ item.label }}</span>
                <el-icon v-if="!item.isShowEditIcon" v-bind="{ size: 14, ...item.editIconBind }">
                  <Edit />
                </el-icon>
              </div>
            </template>
            <template #default="scope">
              <!-- render娓叉煋 -->
              <template v-if="item.render">
                <render-col
                  :column="item"
                  :row="scope.row"
                  :render="item.render"
                  :index="scope.$index"
                />
              </template>
              <!-- 鑷畾涔夋彃妲?-->
              <template v-if="item.slotName">
                <slot :name="item.slotName" :scope="scope"></slot>
              </template>
              <!-- 鍗曚釜鍗曞厓鏍肩紪杈?-->
              <template v-if="item.canEdit">
                <el-form
                  :model="state.tableData[scope.$index]"
                  :rules="isEditRules ? table.rules : {}"
                  class="au_edit_cell_form"
                  :class="{
                    au_edit_cell_form_rules: isEditRules
                  }"
                  :ref="(el:any) => handleRef(el, scope,item)"
                  @submit.prevent
                >
                  <single-edit-cell
                    :configEdit="item.configEdit"
                    v-model="scope.row[item.prop]"
                    :prop="item.prop"
                    :scope="scope"
                    :indexColumns="index"
                    :ref="(el:any) => handleEditTableRef(el, scope,item)"
                    @handleEvent="handleEvent($event, scope.$index)"
                    @keyup-handle="handleKeyup"
                    v-bind="$attrs"
                  >
                    <template v-for="(index, name) in slots" v-slot:[name]="data">
                      <slot :name="name" v-bind="data"></slot>
                    </template>
                  </single-edit-cell>
                </el-form>
              </template>
              <!-- 鍗曞嚮鍗曞厓鏍肩紪杈?-->
              <template v-if="item.isClickEdit">
                <single-edit
                  :isClickEdit="item.isClickEdit"
                  :configEdit="item.configEdit"
                  v-model="scope.row[scope.column.property]"
                  v-bind="$attrs"
                  ref="editClickCell"
                >
                  <template v-for="(index, name) in slots" v-slot:[name]="data">
                    <slot :name="name" v-bind="data"></slot>
                  </template>
                </single-edit>
              </template>
              <!-- 瀛楀吀杩囨护 -->
              <template v-if="item.filters && item.filters.list">
                {{
                  constantEscape(
                    scope.row[item.prop],
                    table.listTypeInfo[item.filters.list],
                    item.filters.key || "value",
                    item.filters.label || "label"
                  )
                }}
              </template>
              <div
                v-if="
                  !item.render &&
                  !item.slotName &&
                  !item.canEdit &&
                  !item.filters &&
                  !item.isClickEdit
                "
              >
                <span>{{ scope.row[item.prop] }}</span>
              </div>
            </template>
          </el-table-column>
        </template>
        <!-- 琛ㄥご鍚堝苟鍗曞厓鏍?-->
        <au-table-column v-else :key="index + 'm'" :item="item" :align="align" v-bind="$attrs">
          <template v-for="(index, name) in slots" v-slot:[name]="data">
            <slot :name="name" v-bind="data"></slot>
          </template>
        </au-table-column>
      </template>
      <slot></slot>
      <Operator
        :table="table"
        :btnPermissions="btnPermissions"
        :tableData="state.tableData"
        :align="align"
      />
      <template v-for="(index, name) in slots" v-slot:[name]="data">
        <slot :name="name" v-bind="data"></slot>
      </template>
    </el-table>
    <!-- 鍒嗛〉鍣?-->
    <el-pagination
      v-if="state.tableData && state.tableData.length && isShowPagination"
      v-model:current-page="table.currentPage"
      @current-change="handlesCurrentChange"
      :page-sizes="table.pageSizes || [10, 20, 50, 100]"
      v-model:page-size="table.pageSize"
      :layout="table.layout || 'total,sizes, prev, pager, next, jumper'"
      :prev-text="table.prevText"
      :next-text="table.nextText"
      :total="table.total || 0"
      :size="table.size || 'small'"
      v-bind="$attrs"
      background
    >
      <slot name="pagination"></slot>
    </el-pagination>
    <!-- 琛ㄦ牸搴曢儴鎸夐挳 -->
    <footer
      class="handle_wrap"
      :style="{ textAlign: footerBtnAlign as any }"
      v-if="isShowFooterBtn && state.tableData && state.tableData.length > 0"
    >
      <slot name="footer" />
      <div v-if="!slots.footer">
        <el-button type="primary" @click="save">淇濆瓨</el-button>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  watch,
  useSlots,
  reactive,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  useAttrs
} from "vue"
import { Rank, Edit, ArrowDown } from "@element-plus/icons-vue"
import { ElMessage } from "element-plus"
import Sortable from "sortablejs"
import AuTableColumn from "./AuTableColumn.vue"
import SingleEditCell from "./singleEditCell.vue"
import SingleEdit from "./singleEdit.vue"
import ColumnSet from "./ColumnSet.vue"
import RenderCol from "./renderCol.vue"
import Operator from "./operator.vue"
import RenderHeader from "./renderHeader.vue"
// 铏氭嫙婊氬姩
import { useVirtualized } from "./useVirtualized"
const {
  scrollContainerEl,
  updateRenderedItemCache,
  updateOffset,
  getDom,
  saveDATA,
  getItemHeightFromCache
} = useVirtualized()
import { useExpose } from "./useExpose"
const {
  AuTable,
  clearSelection,
  getSelectionRows,
  toggleRowSelection,
  toggleAllSelection,
  toggleRowExpansion,
  setCurrentRow,
  clearSort,
  clearFilter,
  doLayout,
  sort,
  scrollTo,
  setScrollTop,
  setScrollLeft
} = useExpose()
import { tableProps } from "./tableProps"
const props = defineProps(tableProps)
defineOptions({
  name: "AuTable"
})
// 鍒濆鍖栨暟鎹?let state = reactive({
  tableData: props.table.data,
  columnSet: [],
  copyTableData: [] // 閿洏浜嬩欢
})
// 鍗曢€夋
const radioVal = ref<number | any>("")
// 鍒ゆ柇鍗曢€夐€変腑鍙婂彇娑堥€変腑
const forbidden = ref(true)
// 鑾峰彇au-table ref
const AuTableBox = ref<HTMLElement | any>(null)
// 鑾峰彇columnSet Ref
const columnSetRef = ref<HTMLElement | any>(null)
// 鑾峰彇form ref
const formRef = ref({})
// 鍔ㄦ€乫orm ref
const handleRef = (
  el: any,
  scope: { $index: number; column: { property: string } },
  item: { prop: any }
) => {
  if (el) {
    formRef.value[`formRef-${scope.$index}-${item.prop || scope.column.property}`] = el
  }
}
// 鑾峰彇鎵€鏈夊崟鍏冩牸缂栬緫缁勪欢 ref
const editTableRef: any = ref({})
// 鍔ㄦ€佸崟鍏冩牸缂栬緫缁勪欢 ref
const handleEditTableRef = (
  el: any,
  scope: { $index: number; column: { property: string } },
  item: { prop: any }
) => {
  if (el) {
    editTableRef.value[`singleEditRef-${scope.$index}-${item.prop || scope.column.property}`] = el
  }
}
// 鎶涘嚭浜嬩欢
const emits = defineEmits([
  "save",
  "page-change",
  "handleEvent",
  "radioChange",
  "rowSort",
  "validateError"
])
// 鑾峰彇鎵€鏈夋彃妲?const slots = useSlots()
watch(
  () => props.table.data,
  val => {
    // console.log(111, val)
    if (props.useVirtual) {
      saveDATA.value = val
      updateRenderData(0)
    } else {
      state.tableData = val
    }
  },
  { deep: true }
)
watch(
  () => props.isRowSort,
  val => {
    if (val) {
      initSort()
    }
  }
)
onMounted(() => {
  // console.log('onMounted', props.table.firstColumn)
  // 璁剧疆榛樿閫変腑椤癸紙鍗曢€夛級
  if (props.defaultRadioCol) {
    defaultRadioSelect(props.defaultRadioCol)
  }
  initSort()
  if (props.useVirtual) {
    saveDATA.value = props.table.data
    getDom()
    scrollContainerEl.value?.addEventListener("scroll", handleScroll)
  }
})
// 鏇存柊瀹為檯娓叉煋鏁版嵁
const updateRenderData = (scrollTop: number) => {
  let startIndex = 0
  let offsetHeight = 0
  for (let i = 0; i < saveDATA.value.length; i++) {
    offsetHeight += getItemHeightFromCache(i)
    if (offsetHeight >= scrollTop) {
      startIndex = i
      break
    }
  }
  // 璁＄畻寰楀嚭鐨勬覆鏌撴暟鎹?  state.tableData = saveDATA.value.slice(startIndex, startIndex + props.virtualShowSize)
  // 缂撳瓨鏈€鏂扮殑鍒楄〃椤归珮搴?  updateRenderedItemCache(startIndex)
  // 鏇存柊鍋忕Щ鍊?  updateOffset(offsetHeight - getItemHeightFromCache(startIndex))
}
// 婊氬姩浜嬩欢
const handleScroll = (e: any) => {
  // 娓叉煋姝ｇ‘鐨勬暟鎹?  updateRenderData(e.target.scrollTop)
  // console.log("婊氬姩浜嬩欢---handleScroll")
}
// 绉婚櫎婊氬姩浜嬩欢
onBeforeUnmount(() => {
  // console.log("绉婚櫎婊氬姩浜嬩欢")
  if (props.useVirtual) {
    scrollContainerEl.value?.removeEventListener("scroll", handleScroll)
  }
})
onUpdated(() => {
  AuTable.value.doLayout()
})
// 榛樿閫変腑锛堝崟閫夐」锛?--index蹇呴』鏄ぇ浜庣瓑浜?锛堜笖鍙兘榛樿閫変腑绗竴椤电殑鏁版嵁锛?const defaultRadioSelect = (index: number | any) => {
  radioVal.value = index
  emits("radioChange", state.tableData[index - 1], radioVal.value)
}
// 琛屾嫋鎷?const initSort = () => {
  if (!props.isRowSort) return
  const el = AuTableBox.value?.querySelector(".el-table__body-wrapper tbody")
  // console.log('3333', el)
  const handle = props.isRowSortIcon ? ".row_drag" : ".el-table__row"
  Sortable.create(el, {
    animation: 150, // 鍔ㄧ敾
    handle, // 鎸囧畾鎷栨嫿鐩爣锛岀偣鍑绘鐩爣鎵嶅彲鎷栨嫿鍏冪礌(姝や緥涓缃搷浣滄寜閽嫋鎷?
    // filter: '.disabled', // 鎸囧畾涓嶅彲鎷栧姩鐨勭被鍚嶏紙el-table涓彲閫氳繃row-class-name璁剧疆琛岀殑class锛?    // dragClass: 'dragClass', // 璁剧疆鎷栨嫿鏍峰紡绫诲悕
    // ghostClass: 'ghostClass', // 璁剧疆鎷栨嫿鍋滈潬鏍峰紡绫诲悕
    // chosenClass: 'chosenClass', // 璁剧疆閫変腑鏍峰紡绫诲悕
    onEnd: (evt: { oldIndex: any; newIndex: any }) => {
      const curRow = state.tableData.splice(evt.oldIndex, 1)[0]
      state.tableData.splice(evt.newIndex, 0, curRow)
      emits("rowSort", state.tableData)
    }
  })
}

// 杩囨护瀛楀吀
/**
 * 涓嬫媺鏁版嵁鍥炴樉涓枃杩囨护鍣? * @param [String,Number] value 闇€瑕佽浆涓枃鐨刱ey鍊? * @param {String} list  鏁版嵁婧? * @param [String,Number] key  鏁版嵁婧愮殑key瀛楁锛堥粯璁わ細value锛? * @param {String} label  鏁版嵁婧愮殑label瀛楁锛堥粯璁わ細label锛? */
const constantEscape = (value: any, list: any[], key: string | number, label: string | number) => {
  const res = list.find(item => {
    return item[key] === value
  })
  return res && res[label]
}
// // 绗竴鍒楀崟閫夋樉绀虹被
const radioStyleClass = computed(() => {
  if (Array.isArray(props.table.firstColumn)) {
    return props.table.firstColumn.some((item: { type: string }) => item.type === "radio")
  } else {
    return props.table.firstColumn && props.table.firstColumn.type === "radio"
  }
})
// 鍗曞厓鏍肩紪杈戞槸鍚﹀瓨鍦ㄦ牎楠?const isEditRules = computed(() => {
  return (
    (props.table.rules && Object.keys(props.table.rules).length > 0) ||
    props.columns.some((item: any) => item?.configEdit?.rules)
  )
})
// 鎵€鏈夊垪锛堣〃澶存暟鎹級
const renderColumns = computed(() => {
  if (state.columnSet.length === 0) {
    return props.columns
  }
  const columnByProp: any = props.columns.reduce((acc: any, cur: any) => {
    acc[cur.prop] = cur
    return acc
  }, {})
  return state.columnSet.filter((cur: any) => !cur.hidden).map((cur: any) => columnByProp[cur.prop])
})

// 鍒ゆ柇鏄惁鏄绾ц〃澶?const isTableHeader = computed(() => {
  return renderColumns.value.some((item: any) => item.children)
})
// 鍒ゆ柇濡傛灉鏈夎〃澶村悎骞跺氨鑷姩寮€鍚崟鍏冩牸缂╂斁
const isTableBorder = computed(() => {
  return props.columns.some((item: any) => item.children)
})
// 鍗曞厓鏍肩紪杈戦敭鐩樹簨浠?const handleKeyup = (event: { keyCode: number }, index: number, key: string) => {
  if (!props.isKeyup) return
  const copyTableData = JSON.parse(JSON.stringify(state.tableData))
  const doms = document.getElementsByClassName(key)
  const focusNextElement = (nextIndex: number) => {
    const nextDom =
      doms[nextIndex]?.getElementsByTagName("input")[0] ||
      doms[nextIndex]?.getElementsByTagName("textarea")[0]
    if (nextDom) nextDom.focus()
  }
  switch (event.keyCode) {
    case 38: // 鍚戜笂閿?      if (!index) index = copyTableData.length
      focusNextElement(index - 1)
      break
    case 40: // 鍚戜笅閿?      if (index === copyTableData.length - 1) index = -1
      focusNextElement(index + 1)
      break
    case 13: // 鍥炶溅閿?      let keyName = props.columns.map((val: any) => val.prop)
      let num = keyName.indexOf(key)
      if (num === -1) {
        num = 0
      } else if (num === keyName.length - 1) {
        if (index === state.copyTableData.length - 1) {
          index = 0
        } else {
          ++index
        }
      } else {
        ++num
      }
      let doms = document.getElementsByClassName(keyName[num])
      if (doms.length) {
        let dom =
          doms[index].getElementsByTagName("input")[0] ||
          doms[index].getElementsByTagName("textarea")[0]
        dom.focus()
      }
      break
  }
}

// forbidden鍙栧€硷紙閫夋嫨鍗曢€夋垨鍙栨秷鍗曢€夛級
const isForbidden = () => {
  forbidden.value = false
  setTimeout(() => {
    forbidden.value = true
  }, 0)
}
// 鍗曢€夋姏鍑轰簨浠秗adioChange
const radioClick = (row: any, index: any) => {
  forbidden.value = !forbidden.value
  const isCurrentlySelected = radioVal.value === index
  if (isCurrentlySelected) {
    radioVal.value = null
  } else {
    radioVal.value = index
  }
  isForbidden()
  emits("radioChange", radioVal.value ? row : null, radioVal.value)
}

// 鐐瑰嚮鍗曢€夋鍗曞厓鏍艰Е鍙戜簨浠?const radioHandleChange = (row: any, index: any) => {
  if (row?.isRadioDisabled) return
  if (props.rowClickRadio) {
    return
  }
  radioClick(row, index)
}
// 鐐瑰嚮鏌愯浜嬩欢
const rowClick = (row: any) => {
  if (row.isRadioDisabled) return
  if (!props.rowClickRadio) {
    return
  }
  radioClick(row, state.tableData.indexOf(row) + 1)
}
// 娓呴櫎鍗曢€夋閫変腑鐘舵€?const clearRadioHandle = () => {
  radioVal.value = null
  AuTable.value.setCurrentRow(-1)
}
// 澶嶅埗鍐呭鍒板壀鍒囨澘
const copyToClipboard = async (text: any) => {
  // 纭繚浼犲叆鐨勫唴瀹规槸瀛楃涓茬被鍨?  if (typeof text !== "string" || text.trim() === "") {
    throw new Error("鏃犳晥鐨勫鍒跺唴瀹?)
  }
  try {
    // 浣跨敤鐜颁唬鍓创鏉?API 杩涜澶嶅埗
    await navigator.clipboard.writeText(text)
  } catch (error) {
    // 鎹曡幏骞舵姏鍑哄叿浣撶殑閿欒淇℃伅
    if ((error as any).name === "NotAllowedError" || (error as any).name === "SecurityError") {
      throw new Error("澶嶅埗澶辫触锛氭潈闄愯鎷掔粷")
    } else {
      throw new Error("澶嶅埗澶辫触锛氭祻瑙堝櫒涓嶆敮鎸佹垨鍙戠敓鏈煡閿欒")
    }
  }
}

// 鏄剧ず娑堟伅鎻愮ず
const showMessage = (type: "success" | "error", message: string) => {
  if (type === "success") {
    ElMessage.success(message)
  } else {
    ElMessage.error(message)
  }
}

// 鍙屽嚮澶嶅埗鍗曞厓鏍煎唴瀹?const cellDblclick = async (row: { [x: string]: any }, column: { property: string | number }) => {
  if (!props.isCopy) {
    return false
  }
  const value = row[column.property]
  try {
    // 璋冪敤澶嶅埗鍑芥暟
    await copyToClipboard(String(value)) // 纭繚鍊艰浆鎹负瀛楃涓?    showMessage("success", "澶嶅埗鎴愬姛")
  } catch (error: any) {
    // 鎹曡幏骞舵樉绀洪敊璇俊鎭?    showMessage("error", error.message || "澶嶅埗澶辫触")
  }
}
// 鍒ゆ柇鏄惁浣跨敤浜嗘煇涓彃妲?const isShow = (name: string) => {
  return Object.keys(slots).includes(name)
}

// 鏁磋缂栬緫杩斿洖鏁版嵁
// const save = () => {
//   if (!isEditRules.value) {
//     emits("save", state.tableData)
//     return
//   }
//   // 琛ㄥ崟瑙勫垯鏍￠獙
//   let successLength = 0
//   let rulesList: string[] = []
//   let rulesError: (string | number)[] = []
//   let propError: string[] = []
//   let propLabelError = [] as any
//   // 鑾峰彇鎵€鏈夌殑form ref
//   const refList = Object.keys(formRef.value).filter(item => item.includes("formRef"))
//   // 鑾峰彇鍗曠嫭璁剧疆瑙勫垯椤?//   const arr = renderColumns.value
//     .filter((val: { configEdit: { rules: any } }) => {
//       if (val.configEdit?.rules) {
//         return val
//       }
//     })
//     .map((item: { prop: any }) => item.prop)
//   // 鑾峰彇鏁翠綋璁剧疆瑙勫垯
//   const arr1 = (props.table.rules && Object.keys(props.table.rules)) ?? []
//   // 鑾峰彇鏈€缁堣缃簡鍝簺瑙勫垯锛堝叾鍊兼槸璁剧疆鐨?-prop锛?//   const newArr = [...arr, ...arr1]
//   // 鏈€缁堥渶瑕佹牎楠岀殑ref
//   newArr.map(val => {
//     refList.map((item: any) => {
//       if (typeof item === "string" && item.includes(val)) {
//         rulesList.push(item)
//       }
//     })
//   })
//   // console.log('鏈€缁堥渶瑕佹牎楠岀殑鏁版嵁', rulesList, formRef.value)
//   // 琛ㄥ崟閮芥牎楠?//   rulesList.map((val: string | number) => {
//     formRef.value[val].validate((valid: boolean) => {
//       if (valid) {
//         successLength = successLength + 1
//       } else {
//         rulesError.push(val)
//       }
//     })
//   })
//   setTimeout(() => {
//     // 鎵€鏈夎〃鍗曢兘鏍￠獙鎴愬姛
//     if (successLength == rulesList.length) {
//       if (isEditRules.value) {
//         console.log("鎵€鏈夎〃鍗曢兘鏍￠獙鎴愬姛--", state.tableData)
//         if (props.isSelfSave) {
//           return state.tableData
//         } else {
//           emits("save", state.tableData)
//         }
//       }
//     } else {
//       // 鏍￠獙鏈€氳繃鐨刾rop
//       rulesError.map(item => {
//         newArr.map(val => {
//           if (typeof item === "string" && item.includes(val)) {
//             propError.push(val)
//           }
//         })
//       })
//       // 鍘婚噸鑾峰彇鏍￠獙鏈€氳繃鐨刾rop--label
//       Array.from(new Set(propError)).map(item => {
//         renderColumns.value.map((val: { prop: string; label: string }) => {
//           if (item === val.prop) {
//             propLabelError.push(val.label)
//           }
//         })
//       })
//       console.log("鏍￠獙鏈€氳繃鐨刾rop--label", propLabelError)
//       emits("validateError", propLabelError)
//     }
//   }, 300)
// }
const save = (): Promise<any> => {
  return new Promise(resolve => {
    if (!isEditRules.value) {
      emits("save", state.tableData)
      resolve(state.tableData)
      return
    }

    // 琛ㄥ崟瑙勫垯鏍￠獙
    let successLength = 0
    let rulesList: string[] = []
    let rulesError: (string | number)[] = []
    let propError: string[] = []
    let propLabelError = [] as any

    // 鑾峰彇鎵€鏈夌殑form ref
    const refList = Object.keys(formRef.value).filter(item => item.includes("formRef"))

    // 鑾峰彇鍗曠嫭璁剧疆瑙勫垯椤?    const arr = renderColumns.value
      .filter((val: { configEdit: { rules: any } }) => {
        if (val.configEdit?.rules) {
          return val
        }
      })
      .map((item: { prop: any }) => item.prop)

    // 鑾峰彇鏁翠綋璁剧疆瑙勫垯
    const arr1 = (props.table.rules && Object.keys(props.table.rules)) ?? []

    // 鑾峰彇鏈€缁堣缃簡鍝簺瑙勫垯锛堝叾鍊兼槸璁剧疆鐨?-prop锛?    const newArr = [...arr, ...arr1]

    // 鏈€缁堥渶瑕佹牎楠岀殑ref
    newArr.map(val => {
      refList.map((item: any) => {
        if (typeof item === "string" && item.includes(val)) {
          rulesList.push(item)
        }
      })
    })

    // 琛ㄥ崟閮芥牎楠?    rulesList.map((val: string | number) => {
      formRef.value[val].validate((valid: boolean) => {
        if (valid) {
          successLength = successLength + 1
        } else {
          rulesError.push(val)
        }
      })
    })

    setTimeout(() => {
      // 鎵€鏈夎〃鍗曢兘鏍￠獙鎴愬姛
      if (successLength == rulesList.length) {
        if (isEditRules.value) {
          emits("save", state.tableData)
          resolve(state.tableData)
        }
      } else {
        // 鏍￠獙鏈€氳繃鐨刾rop
        rulesError.map(item => {
          newArr.map(val => {
            if (typeof item === "string" && item.includes(val)) {
              propError.push(val)
            }
          })
        })

        // 鍘婚噸鑾峰彇鏍￠獙鏈€氳繃鐨刾rop--label
        Array.from(new Set(propError)).map(item => {
          renderColumns.value.map((val: { prop: string; label: string }) => {
            if (item === val.prop) {
              propLabelError.push(val.label)
            }
          })
        })

        console.log("鏍￠獙鏈€氳繃鐨刾rop--label", propLabelError)
        emits("validateError", propLabelError)
      }
    }, 300)
  })
}
// 鍗曚釜缂栬緫浜嬩欢
const handleEvent = ({ type, val }: any, index: any) => {
  emits("handleEvent", type, val, index)
}
// 褰撳墠椤电爜
const handlesCurrentChange = (val: any) => {
  emits("page-change", val)
}
/**
 * 鍏叡鏂规硶
 */
// 鍗曞厓鏍肩紪杈戣皟鐢╯ave鏂规硶杩斿洖鏁版嵁
const saveMethod = (callback: (arg0: any) => any) => {
  if (!isEditRules.value) {
    callback && callback(state.tableData)
    return
  }
  // 琛ㄥ崟瑙勫垯鏍￠獙
  let successLength = 0
  let rulesList: any = []
  let rulesError: any = []
  let propError: any = []
  let propLabelError: any = []
  // 鑾峰彇鎵€鏈夌殑form ref
  const refList = Object.keys(formRef.value).filter(item => item.includes("formRef"))
  // 鑾峰彇鍗曠嫭璁剧疆瑙勫垯椤?  const arr = renderColumns.value
    .filter((val: { configEdit: { rules: any } }) => {
      if (val.configEdit?.rules) {
        return val
      }
    })
    .map((item: { prop: any }) => item.prop)
  // 鑾峰彇鏁翠綋璁剧疆瑙勫垯
  const arr1 = (props.table.rules && Object.keys(props.table.rules)) ?? []
  // 鑾峰彇鏈€缁堣缃簡鍝簺瑙勫垯锛堝叾鍊兼槸璁剧疆鐨?-prop锛?  const newArr = [...arr, ...arr1]
  // 鏈€缁堥渶瑕佹牎楠岀殑ref
  newArr.map(val => {
    refList.map((item: any) => {
      if (item.includes(val)) {
        rulesList.push(item)
      }
    })
  })
  // console.log('鏈€缁堥渶瑕佹牎楠岀殑鏁版嵁', rulesList, formRef.value)
  // 琛ㄥ崟閮芥牎楠?  rulesList.map((val: string | number) => {
    formRef.value[val].validate((valid: any) => {
      if (valid) {
        successLength = successLength + 1
      } else {
        rulesError.push(val)
      }
    })
  })
  setTimeout(() => {
    // 鎵€鏈夎〃鍗曢兘鏍￠獙鎴愬姛
    if (successLength == rulesList.length) {
      if (isEditRules.value) {
        // console.log('鎵€鏈夎〃鍗曢兘鏍￠獙鎴愬姛--', state.tableData)
        callback && callback(state.tableData)
      }
    } else {
      // 鏍￠獙鏈€氳繃鐨刾rop
      rulesError.map((item: string | any[]) => {
        newArr.map(val => {
          if (item.includes(val)) {
            propError.push(val)
          }
        })
      })
      // 鍘婚噸鑾峰彇鏍￠獙鏈€氳繃鐨刾rop--label
      Array.from(new Set(propError)).map(item => {
        renderColumns.value.map((val: { prop: unknown; label: any }) => {
          if (item === val.prop) {
            propLabelError.push(val.label)
          }
        })
      })
      console.log("鏍￠獙鏈€氳繃鐨刾rop--label", propLabelError)
      emits("validateError", propLabelError)
    }
  }, 300)
}
// 娓呯┖鏍￠獙瑙勫垯
const clearValidate = () => {
  const refList = Object.keys(formRef.value).filter(item => item.includes("formRef"))
  refList.length > 0 &&
    refList.map(val => {
      formRef.value[val].clearValidate()
    })
}
// 琛ㄥ崟杩涜閲嶇疆骞剁Щ闄ゆ牎楠岀粨鏋?const resetFields = () => {
  const refList = Object.keys(formRef.value).filter(item => item.includes("formRef"))
  refList.length > 0 &&
    refList.map(val => {
      formRef.value[val].resetFields()
    })
  // 閲嶇疆涓嬫媺琛ㄦ牸
  const refEditList = Object.keys(editTableRef.value).filter(item => item.includes("singleEditRef"))
  refEditList.length > 0 &&
    refEditList.map(val => {
      editTableRef.value[val].resetTselectTableFields()
    })
}
// 閲嶇疆涓嬫媺琛ㄦ牸--鍗曞厓鏍肩紪杈?const resetTselectTable = () => {
  // 閲嶇疆涓嬫媺琛ㄦ牸
  const refEditList = Object.keys(editTableRef.value).filter(item => item.includes("singleEditRef"))
  refEditList.length > 0 &&
    refEditList.map(val => {
      editTableRef.value[val].resetTselectTableFields()
    })
}
// 鑾峰彇columnSet缂撳瓨鏁版嵁
const reSetColumnSet = () => {
  return columnSetRef.value?.reSetColumnSet()
}
// 鏆撮湶鏂规硶鍑哄幓
defineExpose({
  defaultRadioSelect,
  clearSelection,
  getSelectionRows,
  toggleRowSelection,
  toggleAllSelection,
  toggleRowExpansion,
  setCurrentRow,
  clearSort,
  clearFilter,
  doLayout,
  sort,
  scrollTo,
  setScrollTop,
  setScrollLeft,
  state,
  radioVal,
  clearValidate,
  resetFields,
  save,
  saveMethod,
  reSetColumnSet,
  clearRadioHandle,
  resetTselectTable
})
</script>
<style lang="scss" scoped>
.au-table {
  z-index: 0;
  background-color: var(--el-bg-color);
  :deep(.el-table__header-wrapper) {
    .el-table__header {
      margin: 0;
    }
  }
  :deep(.el-table__body-wrapper) {
    .el-table__body {
      margin: 0;
    }
  }
  :deep(.el-pagination) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    // margin-right: 60px;
    margin-right: calc(2% - 20px);
    background-color: var(--el-bg-color);
  }
  // autable杩囬暱鐪佺暐鍙?  .el-table {
    .el-tooltip {
      div {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      .single_edit_cell {
        overflow: visible;
        margin-bottom: 0;
      }
    }
  }
  // 澶氱骇琛ㄥご杩囬暱鐪佺暐鍙?  .multile_head_column {
    :deep(.el-table__row) {
      .el-tooltip {
        div {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
        }
      }
    }
  }
  // 鍗曞厓鏍肩紪杈戜笖鏃犺鍒欐牎楠?  .el-table {
    .cell {
      div {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      .single_edit_cell {
        overflow: visible;
        margin-bottom: 0;
      }
    }
  }
  // 鍗曞厓鏍肩紪杈戞湁瑙勫垯鏍￠獙
  .el-table {
    .cell {
      .au_edit_cell_form_rules {
        .single_edit_cell {
          margin-bottom: 15px;
        }
      }
    }
  }
  .el-table {
    .cell {
      .click_edit {
        display: flex;
        align-items: center;
        line-height: 1;
        .el-icon {
          margin-left: 2px;
        }
      }
    }
  }
  .el-table th,
  .el-table td {
    padding: 8px 0;
  }

  .el-table--border th:first-child .cell,
  .el-table--border td:first-child .cell {
    padding-left: 5px;
  }

  .el-table .cell {
    padding: 0 5px;
  }

  .el-table--scrollable-y .el-table__fixed-right {
    right: 8px !important;
  }

  .header_wrap {
    display: flex;
    align-items: center;

    .toolbar_top {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .toolbar {
        display: flex;
        justify-content: flex-end;
        width: 100%;
      }

      .el-button--small {
        height: 32px;
      }

      .el-button--success {
        background-color: #355db4;
        border: 1px solid #355db4;
      }
    }

    .header_title {
      display: flex;
      align-items: center;
      flex: 1;
      font-size: 16px;
      font-weight: bold;
      line-height: 35px;
      margin-left: 10px;
      color: var(--el-text-color-primary);
    }
  }
  .title-tip {
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 14px;
  }

  .marginBttom {
    margin-bottom: -8px;
  }

  // 鍗曢€夋牱寮?  .radioStyle {
    :deep(.el-radio) {
      .el-radio__label {
        display: none;
      }

      &:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
        box-shadow: none;
      }
    }

    :deep(tbody) {
      .el-table__row {
        cursor: pointer;
      }
    }
  }

  // 澶嶅埗鍔熻兘鏍峰紡
  .cursor {
    :deep(tbody) {
      .el-table__row {
        cursor: pointer;
      }
    }
  }
  // 琛屾嫋鍔?  .row_sort {
    :deep(tbody) {
      .el-table__row {
        cursor: move;
      }
    }
  }
  .row_sort_none {
    :deep(tbody) {
      .el-table__row {
        cursor: default;
      }
      .row_drag {
        cursor: move;
      }
    }
  }

  // 姣忚楂樺害璁剧疆
  .el-table {
    .el-table__body {
      .el-table__row {
        :deep(.el-table__cell) {
          padding: 8px 0;

          .cell {
            min-height: 32px;
            line-height: 32px;
            // display: flex;
            // align-items: center;
            // justify-content: center;
          }
        }
      }
    }
  }
  // treeTable鏍峰紡
  .tree_style {
    :deep(.el-table__body-wrapper) {
      .el-table__body {
        .cell {
          display: flex;
          align-items: center;
          .el-table__expand-icon {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
  // 椤甸潰缂撳瓨鏃讹紝琛ㄦ牸鍐呮搷浣滄爮姣忚楂樺害鎾戞弧
  // :deep(.el-table__fixed-right) {
  //   height: 100% !important;
  // }

  // 閫変腑琛屾牱寮?  .highlightCurrentRow {
    :deep(.current-row) {
      color: var(--el-color-primary);
      cursor: pointer;
      background-color: #355db4 !important;
    }
  }

  .el-table--scrollable-y .el-table__body-wrapper {
    overflow-x: auto;
  }

  .handle_wrap {
    position: sticky;
    z-index: 10;
    right: 0;
    bottom: -8px;
    margin: 0 -8px -8px;
    padding: 12px 16px;
    background-color: var(--el-bg-color);
    border-top: 1px solid var(--el-table-border);

    .el-btn {
      margin-left: 8px;
    }
  }
  .operator {
    .operator_btn {
      display: flex;
      align-items: center;
      .oper_more_dropdown {
        margin-left: 8px;
      }
    }
  }
}
</style>
<style lang="scss">
.oper_more_dropdown_menu {
  .el-dropdown-menu__item {
    padding: 5px 16px;
  }
}
</style>
