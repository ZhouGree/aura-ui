import SelectTable from "./src/index.vue"
import { withInstall } from "../withInstall"
const AuSelectTable = withInstall(SelectTable)
export default AuSelectTable
export type AuSelectTableInstance = InstanceType<typeof SelectTable>
export * from './src/type'
