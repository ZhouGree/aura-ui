export type DrawerDirection = "rtl" | "ltr" | "ttb" | "btt"
export type DrawerPlacement = "left" | "right" | "top" | "bottom"

export interface AuDrawerProps {
  modelValue?: boolean
  visible?: boolean
  title?: string
  width?: string | number
  placement?: DrawerPlacement
  direction?: DrawerDirection
  size?: string | number
  showMask?: boolean
  maskClosable?: boolean
  closeOnEsc?: boolean
  destroyOnClose?: boolean
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
  showClose?: boolean
  appendToBody?: boolean
  modal?: boolean
  modalClass?: string
  lockScroll?: boolean
  withHeader?: boolean
  bodyClass?: string
  zIndex?: number
  footer?: boolean
  footerAlign?: "left" | "center" | "right"
  confirmText?: string
  cancelText?: string
  confirmButtonProps?: Record<string, any>
  cancelButtonProps?: Record<string, any>
  confirm?: () => boolean | void | Promise<boolean | void>
  beforeClose?: (done: () => void) => void
}
