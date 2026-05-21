<template>
  <au-layout-page>
    <au-layout-page-item>
      <au-select-icon v-model="iconValue" @select="changeSelect" />
    </au-layout-page-item>
  </au-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const iconValue = ref("")
const changeSelect = (val: string) => {
  console.log(`选择的值:${val};v-model值：${iconValue.value}`)
}
</script>
