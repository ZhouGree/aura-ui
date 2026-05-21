import StepWizard from "./src/index.vue"
import { withInstall } from "../withInstall"

const AuStepWizard = withInstall(StepWizard)
export default AuStepWizard
export type AuStepWizardInstance = InstanceType<typeof StepWizard>
export * from './src/type'
