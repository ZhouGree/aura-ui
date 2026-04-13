import ModuleForm from "./src/index.vue"
import { withInstall } from "../withInstall"

const AuModuleForm = withInstall(ModuleForm)
export default AuModuleForm
export type AuModuleFormInstance = InstanceType<typeof ModuleForm>
export * from './src/type'
