<template>
  <au-layout-page>
    <au-layout-page-item>
      <au-input
        v-model="vlaue"
        @change="change"
        :formatter="value => `￥${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="value => value.replace(/\￥\s?|(,*)/g, '')"
      >
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
