<template>
  <el-drawer
    :model-value="currentVisible"
    :title="title"
    :size="drawerSize"
    :direction="elDrawerDirection"
    :destroy-on-close="destroyOnClose"
    :close-on-click-modal="drawerMaskClosable"
    :close-on-press-escape="drawerEscClosable"
    :show-close="showClose"
    :append-to-body="appendToBody"
    :modal="drawerMask"
    :z-index="zIndex"
    :modal-class="modalClass"
    :lock-scroll="lockScroll"
    :with-header="withHeader"
    :before-close="beforeCloseHandle"
    @update:model-value="handleUpdateModelValue"
    @open="emits('open')"
    @opened="emits('opened')"
    @close="emits('close')"
    @closed="emits('closed')"
  >
    <template #header v-if="$slots.header">
      <slot name="header" />
    </template>
    <div class="au-drawer__body" :class="bodyClass">
      <slot />
    </div>
    <template #footer v-if="footer">
      <div class="au-drawer__footer" :class="footerClass">
        <slot name="footer">
          <el-button v-bind="cancelButtonProps" @click="handleCancel">
            {{ cancelText }}
          </el-button>
          <el-button type="primary" :loading="loading" v-bind="confirmButtonProps" @click="handleConfirm">
            {{ confirmText }}
          </el-button>
        </slot>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue"
import type { AuDrawerProps } from "./type"

defineOptions({ name: "AuDrawer" })

const props = withDefaults(defineProps<AuDrawerProps>(), {
  modelValue: false,
  visible: undefined,
  title: "",
  width: "40%",
  placement: "right",
  size: undefined,
  showMask: true,
  maskClosable: true,
  closeOnEsc: true,
  destroyOnClose: false,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  showClose: true,
  appendToBody: false,
  modal: true,
  modalClass: "",
  lockScroll: true,
  withHeader: true,
  bodyClass: "",
  zIndex: 2000,
  footer: true,
  footerAlign: "right",
  confirmText: "确定",
  cancelText: "取消",
  confirmButtonProps: () => ({}),
  cancelButtonProps: () => ({})
})

const emits = defineEmits([
  "update:modelValue",
  "update:visible",
  "confirm",
  "cancel",
  "open",
  "opened",
  "close",
  "closed"
])

const loading = ref(false)
// 🔥 核心修复：用本地响应式变量控制抽屉，彻底解决方法调用问题
const localVisible = ref(false)

type DrawerDirection = "rtl" | "ltr" | "ttb" | "btt"
const directionMap: Record<typeof props.placement, DrawerDirection> = {
  left: "rtl",
  right: "ltr",
  top: "btt",
  bottom: "ttb"
}
const elDrawerDirection = computed(() => directionMap[props.placement])

// 🔥 优先级：本地变量 > 外部 v-model
const currentVisible = computed(() => {
  return localVisible.value || (props.modelValue ?? props.visible ?? false)
})

// 监听外部 v-model 变化，同步本地状态
watch(
  () => props.modelValue ?? props.visible,
  (val) => {
    localVisible.value = val ?? false
  },
  { immediate: true }
)

const drawerSize = computed(() => props.size ?? props.width)
const drawerMask = computed(() => props.showMask ?? props.modal)
const drawerMaskClosable = computed(() => props.maskClosable ?? props.closeOnClickModal)
const drawerEscClosable = computed(() => props.closeOnEsc ?? props.closeOnPressEscape)

const footerClass = computed(() => `is-${props.footerAlign}`)

const handleUpdateModelValue = (val: boolean) => {
  localVisible.value = val
  emits("update:modelValue", val)
  emits("update:visible", val)
}

// 🔥 修复：open() 方法真正修改本地状态，触发抽屉显示
const openDrawer = () => {
  localVisible.value = true
  handleUpdateModelValue(true)
}

const closeDrawer = () => {
  localVisible.value = false
  handleUpdateModelValue(false)
}

const handleCancel = () => {
  emits("cancel")
  closeDrawer()
}

const handleConfirm = async () => {
  emits("confirm")
  if (!props.confirm) {
    closeDrawer()
    return
  }
  loading.value = true
  try {
    const result = await props.confirm()
    if (result !== false) {
      closeDrawer()
    }
  } finally {
    loading.value = false
  }
}

const beforeCloseHandle = (done: () => void) => {
  if (props.beforeClose) {
    props.beforeClose(done)
    return
  }
  done()
}

defineExpose({
  open: openDrawer,
  close: closeDrawer,
  // 额外暴露 visible 方便调试
  visible: localVisible
})
</script>

<style lang="scss" scoped>
.au-drawer__body {
  width: 100%;
  height: 100%;
}
.au-drawer__footer {
  display: flex;
  align-items: center;
  gap: 8px;
}
.au-drawer__footer.is-left { justify-content: flex-start; }
.au-drawer__footer.is-center { justify-content: center; }
.au-drawer__footer.is-right { justify-content: flex-end; }
</style>