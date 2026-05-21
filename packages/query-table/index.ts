import QueryTable from "./src/index.vue"
import { withInstall } from "../withInstall"

const AuQueryTable = withInstall(QueryTable)

export default AuQueryTable
export type AuQueryTableInstance = InstanceType<typeof QueryTable>
export * from "./src/type"
