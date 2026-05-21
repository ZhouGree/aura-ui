<template>
  <au-layout-page>
    <au-layout-page-item>
      <div>
        <au-radio v-model="value" :options="options" size="large" type="button" />
      </div>
      <div style="margin-top: 20px">
        <au-radio v-model="value" :options="options" size="default" type="button" />
      </div>
      <div style="margin-top: 20px">
        <au-radio v-model="value" :options="options" size="small" type="button" />
      </div>
      <div style="margin-top: 20px">
        <au-radio v-model="value" :options="options" size="small" type="button" disabled />
      </div>
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
