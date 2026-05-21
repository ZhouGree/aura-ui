<template>
  <au-layout-page>
    <au-layout-page-item>
      <au-checkbox v-model="value" :options="options" />
    </au-layout-page-item>
  </au-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const value = ref([])
const options = ref([
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 }
])
</script>
