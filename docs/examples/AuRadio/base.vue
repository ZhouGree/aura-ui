<template>
  <au-layout-page>
    <au-layout-page-item>
      <au-radio v-model="value" :options="options" />
    </au-layout-page-item>
  </au-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const value = ref("1")
const options = ref([
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 }
])
</script>
