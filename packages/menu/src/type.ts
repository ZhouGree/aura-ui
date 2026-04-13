export interface MenuItem {
  path: string
  title: string
  icon?: string
  children?: MenuItem[]
  name?: string
  external?: boolean
  disabled?: boolean
  meta?: {
    hidden?: boolean
    permission?: string
    activeMenu?: string
  }
}

export interface AuMenuProps {
  menuList: MenuItem[]
  mode?: 'vertical' | 'horizontal'
  isCollapse?: boolean
  bgColor?: string
  textColor?: string
  activeColor?: string
  permissions?: string[]
  permissionKey?: string
  uniqueOpened?: boolean
  defaultOpeneds?: string[]
  defaultActive?: string
  activeMenuKey?: string
  autoActiveFromRoute?: boolean
}