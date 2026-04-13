import Input from "./src/index.vue"
import { withInstall } from "../withInstall"
const AuInput = withInstall(Input)
export default AuInput
export type AuInputInstance = InstanceType<typeof Input>
export * from './src/type'
