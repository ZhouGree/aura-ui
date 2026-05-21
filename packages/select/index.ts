import Select from "./src/index.vue"
import { withInstall } from "../withInstall"
export type AuSelectInstance = InstanceType<typeof Select>
const AuSelect = withInstall(Select)
export default AuSelect
export * from './src/type'
