import Breadcrumb from "./src/index.vue"
import { withInstall } from "../withInstall"

const AuBreadcrumb = withInstall(Breadcrumb)

export default AuBreadcrumb
export type AuBreadcrumbInstance = InstanceType<typeof Breadcrumb>
export * from "./src/type"