<template>
  <au-layout-page>
    <au-layout-page-item>
      <div>use collapse-tags</div>
      <au-select
        placeholder="请选择(多选)"
        v-model="selectVlaue1"
        :optionSource="stepList"
        valueCustom="label"
        collapse-tags
        multiple
        @change="selectChange($event, '1')"
      />
    </au-layout-page-item>
    <au-layout-page-item>
      <div>use collapse-tags-tooltip</div>
      <au-select
        placeholder="请选择(多选)"
        v-model="selectVlaue2"
        :optionSource="stepList"
        valueCustom="label"
        collapse-tags
        collapse-tags-tooltip
        multiple
        @change="selectChange($event, '2')"
      />
    </au-layout-page-item>
    <au-layout-page-item>
      <div>use max-collapse-tags</div>
      <au-select
        placeholder="请选择(多选)"
        v-model="selectVlaue3"
        :optionSource="stepList"
        valueCustom="label"
        collapse-tags
        collapse-tags-tooltip
        :max-collapse-tags="3"
        multiple
        @change="selectChange($event, '3')"
      />
    </au-layout-page-item>
  </au-layout-page>
</template>
<script setup lang="ts" name="multipleCollapseTags">
import { ref } from "vue"
const selectVlaue1 = ref<any>()
const selectVlaue2 = ref<any>()
const selectVlaue3 = ref<any>()
const stepList = [
  { label: "开始" },
  { label: "POSUI" },
  { label: "11" },
  { label: "GX123" },
  { label: "烘干破碎" },
  { label: "车间仓库" },
  { label: "ui3333" },
  { label: "hhh333" }
]
const selectChange = (val: any, type) => {
  console.log(`selectChange--selectVlaue${type}`, val)
}
</script>
