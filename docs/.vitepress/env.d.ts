/// <reference types="vite/client" />

declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.less'
declare module '*.styl'

declare module '*.vue' {
  // import type { DefineComponent } from 'vue'
  // const component: DefineComponent<{}, {}, any>
  const component: {}
  export default component
}

// VitePress 全局对象类型声明
interface VitePressRouter {
  push: (path: string) => void
  go: (n: number) => void
  back: () => void
}

interface VitePressGlobal {
  __useRouter: () => VitePressRouter
  __route: {
    path: string
    data: Record<string, any>
  }
}

declare global {
  interface Window {
    __VITEPRESS__: VitePressGlobal
  }
}

// 空导出，解决模块扩展冲突
export {}
