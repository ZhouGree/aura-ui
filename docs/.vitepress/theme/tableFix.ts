/**
 * 表格表头和表身滚动同步修复
 */

export function initTableFix() {
  // 只在浏览器环境下执行
  if (typeof window === 'undefined' || typeof MutationObserver === 'undefined') {
    return
  }

  // 立即执行一次修复
  requestAnimationFrame(() => {
    setupTableScrollSync()
    fixTableAlignment()
  })

  // 监听页面变化
  const observer = new MutationObserver((mutations) => {
    const hasTableChange = mutations.some((mutation) => {
      return (
        mutation.target instanceof HTMLElement &&
        mutation.target.closest('.el-table')
      )
    })

    if (hasTableChange) {
      requestAnimationFrame(() => {
        setupTableScrollSync()
        fixTableAlignment()
      })
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  })
}

/**
 * 设置表头和表身的滚动同步
 */
function setupTableScrollSync() {
  const tables = document.querySelectorAll('.el-table')

  tables.forEach((table) => {
    const headerWrapper = table.querySelector('.el-table__header-wrapper')
    const bodyWrapper = table.querySelector('.el-table__body-wrapper')
    
    if (!headerWrapper || !bodyWrapper) return

    const headerEl = headerWrapper as HTMLElement
    const bodyEl = bodyWrapper as HTMLElement

    // 确保表头和表身都能横向滚动
    headerEl.style.overflowX = 'auto'
    headerEl.style.overflowY = 'hidden'
    bodyEl.style.overflowX = 'auto'

    // 移除旧的滚动事件监听
    if (headerEl.__scrollHandler) {
      headerEl.removeEventListener('scroll', headerEl.__scrollHandler)
    }
    if (bodyEl.__scrollHandler) {
      bodyEl.removeEventListener('scroll', bodyEl.__scrollHandler)
    }

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
    headerEl.__scrollHandler = syncScroll(headerEl, bodyEl)
    bodyEl.__scrollHandler = syncScroll(bodyEl, headerEl)

    headerEl.addEventListener('scroll', headerEl.__scrollHandler!)
    bodyEl.addEventListener('scroll', bodyEl.__scrollHandler!)
  })
}

/**
 * 修复表格列对齐问题
 */
function fixTableAlignment() {
  const tables = document.querySelectorAll('.el-table')

  tables.forEach((table) => {
    const headerWrapper = table.querySelector('.el-table__header-wrapper')
    const bodyWrapper = table.querySelector('.el-table__body-wrapper')

    if (!headerWrapper || !bodyWrapper) return

    const headerTable = headerWrapper.querySelector('table')
    const bodyTable = bodyWrapper.querySelector('table')

    if (!headerTable || !bodyTable) return

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

    // 设置所有列的宽度
    headerCells.forEach((cell, index) => {
      if (columnWidths[index]) {
        ;(cell as HTMLElement).style.width = `${columnWidths[index]}px`
        ;(cell as HTMLElement).style.minWidth = `${columnWidths[index]}px`
      }
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
  })
}

// 扩展 HTMLElement 接口以支持自定义属性
declare global {
  interface HTMLElement {
    __scrollHandler?: (e: Event) => void
  }
}
