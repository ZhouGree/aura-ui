import QueryCondition from "./src/index.vue"
import { withInstall } from "../withInstall"

const AuQueryCondition = withInstall(QueryCondition)
export default AuQueryCondition
export type AuQueryConditionInstance = InstanceType<typeof QueryCondition>
export * from './src/type'
