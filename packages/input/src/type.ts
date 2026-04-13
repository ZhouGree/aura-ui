import type { InputProps } from 'element-plus'
import type { Mutable } from 'element-plus/es/utils'
export interface AuInputSelfProps {
  modelValue: string | number
  placeholder?: string
  decimalLimit?: number
  inputType?: "text" | "amount" | "decimal" | "phone" | "integer" | "idCard"
  appendTitle?: string
  showThousands?: boolean
  isTip?: boolean
  isShowErrorTip?: boolean
}
export type AuInputProps = AuInputSelfProps & Partial<Mutable<InputProps>>
