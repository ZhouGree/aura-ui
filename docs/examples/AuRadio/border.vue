<template>
  <au-layout-page>
    <au-layout-page-item>
      <div>
        <au-radio v-model="value" :options="options" size="large" border />
      </div>
      <div style="margin-top: 20px">
        <au-radio v-model="value" :options="options" size="default" border />
      </div>
      <div style="margin-top: 20px">
        <au-radio v-model="value" :options="options" size="small" border />
      </div>
      <div style="margin-top: 20px">
        <au-radio v-model="value" :options="options" size="small" disabled border />
      </div>
    </au-layout-page-item>
  </au-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const value = ref("1")
const options = ref([
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 }
])
</script>
