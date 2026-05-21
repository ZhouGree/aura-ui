import DatePicker from "./src/index.vue"
import { withInstall } from "../withInstall"
export type AuDatePickerInstance = InstanceType<typeof DatePicker>
const AuDatePicker = withInstall(DatePicker)
export default AuDatePicker
export * from './src/type'
