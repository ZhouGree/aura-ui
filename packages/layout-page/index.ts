import LayoutPage from "./src/index.vue"
import { withInstall } from "../withInstall"

const AuLayoutPage = withInstall(LayoutPage)
export default AuLayoutPage
export type { AuLayoutPageProps } from "./src/index.vue"
