import { debounce, throttle, formatNumber } from "./utils"
import type { Component, App } from "vue"
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn' // 因element-plus默认是英文，我们指定一下默认中文
import AuLayoutPage from "./layout-page"
import AuLayoutPageItem from "./layout-page-item"
import AuQueryCondition from "./query-condition"
import AuTable from "./table"
import AuForm from "./form"
import AuSelect from "./select"
import AuSelectTable from "./select-table"
import AuDetail from "./detail"
import AuButton from "./button"
import AuStepWizard from "./step-wizard"
import AuTimerBtn from "./timer-btn"
import AuModuleForm from "./module-form"
import AuAdaptivePage from "./adaptive-page"
import AuDatePicker from "./date-picker"
import AuRadio from "./radio"
import AuCheckbox from "./checkbox"
import AuTabs from "./tabs"
import AuSelectIcon from "./select-icon"
import AuInput from "./input"
import AuDrawer from "./drawer"
import AuBreadcrumb from "./breadcrumb"
import AuQueryTable from "./query-table"
// 存储组件列表
const components: {
  [propName: string]: Component
} = {
  AuLayoutPage,
  AuLayoutPageItem,
  AuQueryCondition,
  AuTable,
  AuForm,
  AuSelect,
  AuSelectTable,
  AuDetail,
  AuButton,
  AuStepWizard,
  AuTimerBtn,
  AuModuleForm,
  AuAdaptivePage,
  AuDatePicker,
  AuRadio,
  AuCheckbox,
  AuTabs,
  AuSelectIcon,
  AuInput,
  AuDrawer,
  AuBreadcrumb,
  AuQueryTable
}
// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const AuraUI = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      // console.log('name--11', name, component)
      app.component(name, component)
    });
  }
}
// 自动注册（针对CDN环境）
// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  const Vue = window.Vue;
  const originalCreateApp = Vue.createApp;
  Vue.createApp = function (...args) {
    const app = originalCreateApp.apply(this, args);
    AuraUI.install(app);
    // 如果依赖 ElementPlus 的自动注册
    // @ts-ignore
    if (window.ElementPlus) {
      // @ts-ignore
      app.use(window.ElementPlus);
    }
    return app;
  };
}

// 按需引入
export {
  AuLayoutPage,
  AuLayoutPageItem,
  AuQueryCondition,
  AuTable,
  AuForm,
  AuSelect,
  AuSelectTable,
  AuDetail,
  AuButton,
  AuStepWizard,
  AuTimerBtn,
  AuModuleForm,
  AuAdaptivePage,
  AuDatePicker,
  AuRadio,
  AuCheckbox,
  AuTabs,
  AuSelectIcon,
  AuInput,
  AuDrawer,
  AuBreadcrumb,
  AuQueryTable
}
/**
 * @description 公共方法
 */
export { throttle, debounce, formatNumber }
// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default AuraUI
