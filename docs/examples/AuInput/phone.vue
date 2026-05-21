<template>
  <au-layout-page>
    <au-layout-page-item>
      <au-input
        placeholder="请输入手机号"
        maxlength="11"
        inputType="phone"
        v-model="vlaue"
        @change="change"
      >
        <template #prepend>手机号</template>
      </au-input>
    </au-layout-page-item>
  </au-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>
