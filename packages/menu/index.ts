import Menu from "./src/index.vue"
import { withInstall } from "../withInstall"

const AuMenu = withInstall(Menu)
export default AuMenu
export type AuMenuInstance = InstanceType<typeof Menu>
export * from './src/type'