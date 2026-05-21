import Form from "./src/index.vue"
import { withInstall } from "../withInstall"
const AuForm = withInstall(Form)
export default AuForm
export type AuFormInstance = InstanceType<typeof Form>
export * from './src/type'
