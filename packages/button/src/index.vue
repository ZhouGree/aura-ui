<template>
  <el-tooltip v-if="tip" :content="tip" :placement="placement" v-bind="tipProps">
    <el-button v-bind="$attrs" class="au-button-tip" @click="handleClick">
      <slot />
    </el-button>
  </el-tooltip>
  <el-button v-else v-bind="$attrs" @click="handleClick">
    <slot />
  </el-button>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { AuButtonSelfProps as AuButtonProps } from "@/button/src/type"

defineOptions({
  name: "AuButton"
})

const props = withDefaults(defineProps<AuButtonProps>(), {
  time: 1000,
  tip: "",
  placement: "top",
  tipProps: () => ({}),
  isDebounce: true
})

// 抛出事件
const emits = defineEmits(["click"])

const record = ref(0)

const handleClick = () => {
  if (!props.isDebounce) return emits("click")
  const newTime = new Date()
  if (newTime.getTime() - record.value > props.time) {
    emits("click")
  }
  record.value = newTime.getTime()
}
</script>

<style lang="scss" scoped>
.au-button-tip {
  padding: 0;
  height: auto;
}
.au-button-tip:hover,
.au-button-tip:focus {
  animation: jump 0.3s;
}
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
