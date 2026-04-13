import Button from "./src/index.vue"
import { withInstall } from "../withInstall"
const AuButton = withInstall(Button)
export default AuButton
export type AuButtonInstance = InstanceType<typeof Button>
export * from './src/type'