<template>
  <ClientOnly>
    <div class="example-component">
      <component :is="dynamicComponent" v-if="dynamicComponent" v-bind="$attrs" />
      <div v-else class="example-component--spin">
        <div></div>
        <div></div>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { onBeforeMount, shallowRef, type Component } from "vue"

interface Props {
  path?: string
}

const props = defineProps<Props>()

// 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的。
const dynamicComponent = shallowRef<Component | null>(null)

// 使用异步导入实现示例组件懒加载
const modules = import.meta.glob(`../../../../examples/*/*.vue`) as Record<string, () => Promise<{ default: Component }>>

onBeforeMount(async () => {
  // 动态加载示列组件
  for (const modulesKey in modules) {
    // 找到example的组件，并加载
    if (modulesKey.split(".vue")[0].endsWith(props.path || '')) {
      const module = await modules[modulesKey]()
      dynamicComponent.value = module.default
      break
    }
  }
})
</script>

<style lang="scss" scoped>
// loading动画
@keyframes lds-ripple {
  0% {
    top: 18px;
    left: 18px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 18px;
    left: 18px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 18px;
    left: 18px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 36px;
    height: 36px;
    opacity: 0;
  }
}
.example-component {
  background-color: var(--au-bg); /* 改成你的莫兰迪背景色 */
  &--spin {
    width: 36px;
    height: 36px;
    display: inline-block;
    position: relative;
    > div {
      position: absolute;
      border: 4px solid var(--au-primary); /* 莫兰迪主色 */
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    div:nth-child(2) {
      animation-delay: -0.5s;
    }
  }

  .au_module_form_demo {
    background-color: var(--au-bg); /* 莫兰迪背景 */
    :deep(.au_layout_page_item) {
      padding: 0;
      .au_module_form {
        overflow: hidden;
        margin: 0 !important;
        .handle_wrap {
          position: inherit;
        }
      }
    }
  }
}
</style>
