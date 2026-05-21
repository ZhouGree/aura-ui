import type { Component } from "vue"

export interface BreadcrumbItem {
  path: string
  label: string
  name?: string
  to?: string | Record<string, any>
  disabled?: boolean
  meta?: Record<string, any>
}

export interface AuBreadcrumbProps {
  items?: BreadcrumbItem[]
  auto?: boolean
  separator?: string | Component
  replace?: boolean
  hideCurrent?: boolean
  ignoreRoutes?: string[]
  customMetaKey?: string
  hideMetaKey?: string
  titleMetaKey?: string
  clickableLast?: boolean
  showHome?: boolean
  homeLabel?: string
  homePath?: string
}