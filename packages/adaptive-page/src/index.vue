<template>
  <div class="au_adaptive_page">
    <div
      :style="{ width: isShow('leftContent') ? `${leftWidth}px` : '0px' }"
      v-if="isShow('leftContent')"
      class="left_content"
    >
      <div class="left_tree">
        <slot name="leftContent" />
      </div>
    </div>
    <au-layout-page class="right_content" :style="pageStyle">
      <au-layout-page-item class="table_search" :style="queryPageStyle" v-if="$attrs.opts">
        <au-query-condition v-bind="$attrs" ref="AuQueryConditionPage">
          <template v-for="(index, name) in slots" #[name]="data">
            <slot :name="name" v-bind="data" />
          </template>
        </au-query-condition>
      </au-layout-page-item>
      <slot name="content" />
      <au-layout-page-item
        class="table_main"
        :class="{ 'au_table_self-filling': isAuTableSelfFilling }"
        :style="tablePageStyle"
      >
        <au-table
          v-bind="{ columnSetting, name, ...$attrs }"
          :isSlotToolbar="isShow('toolbar')"
          :isSlotTitle="isShow('title')"
          ref="AuTablePage"
        >
          <template v-for="(index, name) in slots" #[name]="data">
            <slot :name="name" v-bind="data" />
          </template>
        </au-table>
      </au-layout-page-item>
      <slot />
    </au-layout-page>
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
import AuLayoutPage from "../../layout-page/src/index.vue"
import AuLayoutPageItem from "../../layout-page-item/src/index.vue"
import AuTable from "../../table/src/index.vue"
import AuQueryCondition from "../../query-condition/src/index.vue"
import { getCurrentInstance, onMounted, ref, useSlots } from "vue"
import type { AuAdaptivePageProps } from "@/adaptive-page/src/type"

defineOptions({
  name: "AuAdaptivePage"
})
withDefaults(defineProps<AuAdaptivePageProps>(), {
  leftWidth: 260,
  pageStyle: () => ({}),
  columnSetting: false,
  name: "",
  queryPageStyle: () => ({}),
  tablePageStyle: () => ({}),
  isAuTableSelfFilling: false
})

const slots = useSlots()

const isShow = (name: string) => {
  return Object.keys(slots).includes(name)
}

const instance = getCurrentInstance() as any
const AuQueryConditionPage = ref<InstanceType<typeof AuQueryCondition> | null>(null)
const AuTablePage = ref<InstanceType<typeof AuTable> | null>(null)

onMounted(() => {
  const exposedObj = {
    ...AuQueryConditionPage.value?.$.exposed,
    ...AuTablePage.value?.$.exposed
  }
  const entries = Object.entries(exposedObj)
  for (const [key, value] of entries) {
    instance.exposed[key] = value
  }
})

defineExpose({ ...instance.exposed, AuQueryConditionPage, AuTablePage })
</script>

<style lang="scss" scoped>
.au_adaptive_page {
  display: flex;
  align-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .left_content {
    background: var(--el-bg-color);
    margin: 8px;
    margin-right: 0;
    .left_tree {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 10px;
      overflow-y: auto;
    }
  }
  .right_content {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .table_main {
      flex: 1;
      overflow-y: auto;
      width: 100%;
      height: 100vh;
      .au-table {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }
    }
    .au_table_self-filling {
      .au-table {
        :deep(.el-table) {
          height: 100vh;
        }
      }
    }
  }
}
</style>
