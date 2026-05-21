import AdaptivePage from "./src/index.vue"
import { withInstall } from "../withInstall"
const AuAdaptivePage = withInstall(AdaptivePage)
export default AuAdaptivePage
export type AuAdaptivePageInstance = InstanceType<typeof AdaptivePage>
export * from './src/type'