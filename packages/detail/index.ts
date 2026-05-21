import Detail from "./src/index.vue"
import { withInstall } from "../withInstall"

const AuDetail = withInstall(Detail)
export default AuDetail
export type AuDetailInstance = InstanceType<typeof Detail>
export * from './src/type'
