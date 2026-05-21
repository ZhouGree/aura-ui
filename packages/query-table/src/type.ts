import type { AuQueryConditionProps } from "../../query-condition/src/type"
import type { AuTableProps } from "../../table/src/tableProps"
import type { Component } from "vue" // 新增：导入Vue的Component类型

// 搜索字段配置
export interface SearchFieldConfig {
  label: string
  key: string
  component: string | Component // 支持组件类型（扩展）
  props?: Record<string, any>
  defaultValue?: any
  span?: number
  rules?: any[] // 新增：表单校验规则
}

// 搜索整体配置
export interface SearchConfig {
  fields?: SearchFieldConfig[]
  layout?: "inline" | "grid"
  labelWidth?: string | number
  collapse?: boolean
  gutter?: number // 新增：栅格间距
}

// 请求响应类型（对齐通用 Table 约定）
export interface QueryTableRequestResult {
  [key: string]: any
  list?: any[]
  total?: number
  data?: any[]
}

// 自定义分页类型（替代PaginationProps，完全兼容AuTable）
export interface PaginationProps {
  currentPage?: number
  pageSize?: number
  pageSizes?: number[]
  total?: number
  layout?: string
  [key: string]: any
}

// QueryTable 核心 Props
export interface AuQueryTableProps {
  /** 搜索条件配置（快速生成查询表单） */
  searchConfig?: SearchConfig
  /** 表格基础配置（优先级低于 tableProps） */
  tableConfig?: {
    data?: any[]
    total?: number
    currentPage?: number
    pageSize?: number
    [key: string]: any
  }
  /** 表格列配置 */
  columns?: AuTableProps["columns"]
  /** 查询条件组件 Props（优先级高于 searchConfig） */
  queryProps?: AuQueryConditionProps
  /** 表格组件 Props（优先级高于 tableConfig） */
  tableProps?: AuTableProps
  /** 是否显示查询条件区域 */
  showSearch?: boolean
  /** 是否自动加载数据 */
  autoLoad?: boolean
  /** 同 autoLoad（兼容） */
  immediate?: boolean
  /** 重置后是否自动查询 */
  autoQueryOnReset?: boolean
  /** 分页操作/重置时是否回到第一页 */
  resetToFirstPage?: boolean
  /** 是否显示导出按钮 */
  showExport?: boolean
  /** 自定义导出逻辑 */
  exportHandler?: (params: {
    queryForm: Record<string, any>
    tableData: any[]
    pagination: PaginationProps
  }) => Promise<void> | void
  /** 导出按钮 Props */
  exportButtonProps?: Record<string, any>
  /** 导出按钮文本 */
  exportButtonText?: string
  /** 默认页大小 */
  defaultPageSize?: number
  /** 页大小选项 */
  pageSizes?: number[]
  /** 数据请求函数 */
  request?: (params: Record<string, any>) => Promise<QueryTableRequestResult>
  /** 响应数据列表路径（如 "data.list"） */
  requestDataPath?: string
  /** 响应数据总数路径（如 "data.total"） */
  requestTotalPath?: string
}

// 暴露给外部的方法
export interface AuQueryTableExpose {
  /** 手动发起查询（可传额外参数） */
  query: (extraParams?: Record<string, any>) => Promise<void>
  /** 重置查询条件 */
  reset: () => void
  /** 重新加载数据（使用当前条件） */
  reload: () => Promise<void>
  /** 获取当前查询表单值 */
  getQueryForm: () => Record<string, any>
}