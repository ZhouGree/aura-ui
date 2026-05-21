import Drawer from "./src/index.vue"
import { withInstall } from "../withInstall"

const AuDrawer = withInstall(Drawer)

export default AuDrawer
export type AuDrawerInstance = InstanceType<typeof Drawer>
export * from "./src/type"
