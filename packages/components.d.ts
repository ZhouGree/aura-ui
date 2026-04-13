import AuLayoutPage from "./layout-page/src/index.vue"
import AuLayoutPageItem from "./layout-page-item/src/index.vue"
import AuQueryCondition from "./query-condition/src/index.vue"
import AuTable from "./table/src/index.vue"
import AuForm from "./form/src/index.vue"
import AuSelect from "./select/src/index.vue"
import AuSelectTable from "./select-table/src/index.vue"
import AuDetail from "./detail/src/index.vue"
import AuButton from "./button/src/index.vue"
import AuStepWizard from "./step-wizard/src/index.vue"
import AuTimerBtn from "./timer-btn/src/index.vue"
import AuModuleForm from "./module-form/src/index.vue"
import AuAdaptivePage from "./adaptive-page/src/index.vue"
import AuDatePicker from "./date-picker/src/index.vue"
import AuRadio from "./radio/src/index.vue"
import AuCheckbox from "./checkbox/src/index.vue"
import AuTabs from "./tabs/src/index.vue"
import AuSelectIcon from "./select-icon/src/index.vue"
import AuInput from "./input/src/index.vue"

declare module "vue" {
  export interface GlobalComponents {
    AuLayoutPage: typeof AuLayoutPage
    AuLayoutPageItem: typeof AuLayoutPageItem
    AuQueryCondition: typeof AuQueryCondition
    AuTable: typeof AuTable
    AuForm: typeof AuForm
    AuSelect: typeof AuSelect
    AuSelectTable: typeof AuSelectTable
    AuDetail: typeof AuDetail
    AuButton: typeof AuButton
    AuStepWizard: typeof AuStepWizard
    AuTimerBtn: typeof AuTimerBtn
    AuModuleForm: typeof AuModuleForm
    AuAdaptivePage: typeof AuAdaptivePage
    AuDatePicker: typeof AuDatePicker
    AuRadio: typeof AuRadio
    AuCheckbox: typeof AuCheckbox
    AuTabs: typeof AuTabs
    AuSelectIcon: typeof AuSelectIcon
    AuInput: typeof AuInput
  }
}
