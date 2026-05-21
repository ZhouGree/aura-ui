let isFixing = false
let lastFixTime = 0
const FIX_INTERVAL = 1000 // 最小修复间隔（毫秒）

export function initTableFix() {
  // 只在浏览器环境下执行（避免 SSR 构建时 MutationObserver 未定义错误）
  if (typeof window === 'undefined' || typeof MutationObserver === 'undefined') {
    return
  }
  
  // 等待DOM加载完成
  setTimeout(() => {
    fixTableAlignment()
    setupTableScrollSync()
  }, 500)

  // 监听页面变化 - 使用防抖
  const debouncedFix = debounce(() => {
    if (!isFixing) {
      fixTableAlignment()
      setupTableScrollSync()
    }
  }, 300)

  const observer = new MutationObserver((mutations) => {
    // 只关注表格相关的变化
    const hasTableChange = mutations.some((mutation) => {
      return (
        mutation.target instanceof HTMLElement &&
        mutation.target.closest('.el-table')
      )
    })

    if (hasTableChange) {
      debouncedFix()
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  })
}

/**
 * 防抖函数
 */
function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout> | null = null
  return ((...args: unknown[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }) as T
}

/**
 * 修复表格列对齐问题
 */
function fixTableAlignment() {
  // 只在浏览器环境下执行
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  // 防止重复调用
  const now = Date.now()
  if (now - lastFixTime < FIX_INTERVAL) return
  lastFixTime = now

  if (isFixing) return
  isFixing = true

  try {
    const tables = document.querySelectorAll('.vp-doc .el-table')

    tables.forEach((table) => {
      const headerWrapper = table.querySelector('.el-table__header-wrapper')
      const bodyWrapper = table.querySelector('.el-table__body-wrapper')

      if (!headerWrapper || !bodyWrapper) return

      const headerTable = headerWrapper.querySelector('table')
      const bodyTable = bodyWrapper.querySelector('table')

      if (!headerTable || !bodyTable) return

      // 获取表头和表体的列
      const headerCells = headerTable.querySelectorAll('th')
      const bodyRows = bodyTable.querySelectorAll('tr')

      if (headerCells.length === 0) return

      // 计算每列的最大宽度
      const columnWidths: number[] = []

      headerCells.forEach((cell, index) => {
        const headerWidth = (cell as HTMLElement).offsetWidth
        let bodyMaxWidth = headerWidth

        bodyRows.forEach((row) => {
          const bodyCell = row.querySelectorAll('td')[index]
          if (bodyCell) {
            bodyMaxWidth = Math.max(bodyMaxWidth, (bodyCell as HTMLElement).offsetWidth)
          }
        })

        columnWidths.push(bodyMaxWidth)
      })

      // 设置所有列的宽度（只在宽度变化超过5px时才更新）
      let needsUpdate = false
      headerCells.forEach((cell, index) => {
        const currentWidth = (cell as HTMLElement).offsetWidth
        if (Math.abs(currentWidth - columnWidths[index]) > 5) {
          needsUpdate = true
        }
      })

      if (needsUpdate) {
        headerCells.forEach((cell, index) => {
          ;(cell as HTMLElement).style.width = `${columnWidths[index]}px`
          ;(cell as HTMLElement).style.minWidth = `${columnWidths[index]}px`
        })

        bodyRows.forEach((row) => {
          const bodyCells = row.querySelectorAll('td')
          bodyCells.forEach((cell, index) => {
            if (columnWidths[index]) {
              ;(cell as HTMLElement).style.width = `${columnWidths[index]}px`
              ;(cell as HTMLElement).style.minWidth = `${columnWidths[index]}px`
            }
          })
        })
      }
    })
  } finally {
    isFixing = false
  }
}

/**
 * 设置表头和表体的滚动同步
 */
function setupTableScrollSync() {
  // 只在浏览器环境下执行
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  const tables = document.querySelectorAll('.vp-doc .el-table')

  tables.forEach((table) => {
    const headerWrapper = table.querySelector('.el-table__header-wrapper')
    const bodyWrapper = table.querySelector('.el-table__body-wrapper')

    if (!headerWrapper || !bodyWrapper) return

    const headerEl = headerWrapper as HTMLElement
    const bodyEl = bodyWrapper as HTMLElement

    // 创建滚动同步函数
    const syncScroll = (source: HTMLElement, target: HTMLElement) => {
      return (e: Event) => {
        const targetEl = target as HTMLElement
        if ((e.target as HTMLElement).scrollLeft !== targetEl.scrollLeft) {
          targetEl.scrollLeft = (e.target as HTMLElement).scrollLeft
        }
      }
    }

    // 添加滚动事件监听
    // headerEl.removeEventListener('scroll', headerEl.__scrollHandler)
    // bodyEl.removeEventListener('scroll', bodyEl.__scrollHandler)

    // headerEl.__scrollHandler = syncScroll(headerEl, bodyEl)
    // bodyEl.__scrollHandler = syncScroll(bodyEl, headerEl)

    // headerEl.addEventListener('scroll', headerEl.__scrollHandler)
    // bodyEl.addEventListener('scroll', bodyEl.__scrollHandler)
  })
}

// 扩展 HTMLElement 接口以支持自定义属性
declare global {
  interface HTMLElement {
    __scrollHandler?: (e: Event) => void
  }
}
