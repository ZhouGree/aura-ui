<template>
  <el-form
    class="au-form"
    ref="auForm"
    :class="className"
    :model="formOpts.formData"
    :rules="formOpts.rules"
    :label-width="formOpts.labelWidth || '120px'"
    :label-position="formOpts.labelPosition || labelPosition || 'right'"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in formOpts.fieldList">
      <el-form-item
        v-if="
          typeof item.isHideItem == 'function'
            ? item.isHideItem(formOpts.formData)
            : !item.isHideItem
        "
        :key="index"
        :prop="item.value"
        :label="item.label"
        :class="[
          item.className,
          { render_label: item.labelRender },
          { slot_label: item.slotName },
          { render_laber_position_left: formOpts.labelPosition === 'left' }
        ]"
        :rules="item.rules"
        :style="getChildWidth(item)"
        v-bind="$attrs"
      >
        <template #label v-if="item.labelSlotName || item.labelRender">
          <render-comp v-if="item.labelRender" :render="item.labelRender" :item="item" />
          <template v-if="item.labelSlotName">
            <slot :name="item.labelSlotName" :scope="item"></slot>
          </template>
        </template>
        <template v-if="item.slotName">
          <slot :name="item.slotName" :scope="formOpts.formData"></slot>
        </template>
        <template v-if="item.textShow">
          <span class="text_show">{{ item.textValue || formOpts.formData[item.value] }}</span>
        </template>
        <template v-if="item.isSelfCom">
          <component
            v-if="item.comp === 'au-select-table'"
            :is="item.comp"
            :ref="(el:any) => handleRef(el, item, index)"
            :placeholder="item.placeholder || getPlaceholder(item)"
            v-bind="
              typeof item.bind == 'function'
                ? item.bind(formOpts.formData)
                : { clearable: true, filterable: true, ...item.bind }
            "
            :style="{ width: item.width || '100%' }"
            v-on="cEvent(item, 'au-select-table')"
          />
          <component
            v-else
            :is="item.comp"
            v-model="formOpts.formData[item.value]"
            :placeholder="item.placeholder || getPlaceholder(item)"
            :ref="(el: any) => getRefs(el, item, index)"
            v-bind="
              typeof item.bind == 'function'
                ? item.bind(formOpts.formData)
                : { clearable: true, filterable: true, ...item.bind }
            "
            :style="{ width: item.width || '100%' }"
            v-on="cEvent(item)"
          />
        </template>
        <component
          v-if="!item.slotName && !item.textShow && !item.isSelfCom"
          :is="item.comp"
          v-model="formOpts.formData[item.value]"
          :type="item.type"
          :placeholder="item.placeholder || getPlaceholder(item)"
          @change="handleEvent(item.event, formOpts.formData[item.value], item)"
          :ref="(el: any) => getRefs(el, item, index)"
          v-bind="
            typeof item.bind == 'function'
              ? item.bind(formOpts.formData)
              : { clearable: true, filterable: true, ...item.bind }
          "
          :style="{ width: item.width || '100%' }"
          v-on="cEvent(item)"
        >
          <template #prepend v-if="item.prepend">{{ item.prepend }}</template>
          <template #append v-if="item.append">{{ item.append }}</template>
          <template v-if="item.childSlotName">
            <slot :name="item.childSlotName"></slot>
          </template>
          <component
            :is="compChildName(item)"
            v-for="(value, key, index) in selectListType(item)"
            :key="index"
            :disabled="value.disabled"
            :label="compChildLabel(item, value)"
            :value="compChildValue(item, value, key)"
            >{{ compChildShowLabel(item, value) }}</component
          >
        </component>
      </el-form-item>
    </template>
    <div class="footer_btn flex-box flex-ver au-margin-top-5">
      <template v-if="formOpts.btnSlotName">
        <slot :name="formOpts.btnSlotName"></slot>
      </template>
      <template
        v-if="!formOpts.btnSlotName && formOpts.operatorList && formOpts.operatorList.length > 0"
      >
        <template v-for="(val, index) in formOpts.operatorList" :key="index">
          <template v-if="val.render">
            <render-btn :item="val" :render="val.render" />
          </template>
          <template v-else>
            <el-button
              @click="val.fun(val)"
              v-bind="{
                type: 'primary',
                size: 'small',
                ...val.bind
              }"
              v-if="!val.isHideBtn"
            >
              {{ val.label }}
            </el-button>
          </template>
        </template>
      </template>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import RenderComp from "./renderComp.vue"
import RenderBtn from "./renderBtn.vue"
import { ElMessage } from "element-plus"
import { computed, ref, watch, onMounted, getCurrentInstance, nextTick } from "vue"
import type { AuFormSelfProps as AuFormProps } from "@/form/src/type"
defineOptions({
  name: "AuForm"
})

const props = withDefaults(defineProps<AuFormProps>(), {
  className: "",
  formOpts: () => ({} as any),
  widthSize: 2,
  labelPosition: "right",
  isTrim: true
})

const cEvent = computed(() => {
  return (item: { eventHandle: any }, type = "") => {
    let event = { ...item.eventHandle }
    let changeEvent = {} as any
    Object.keys(event).forEach(v => {
      changeEvent[v] = (e: any, ids: any) => {
        if (type === "au-select-table") {
          event[v] && event[v](e, ids)
        } else {
          event[v] && event[v](e, props.formOpts)
        }
      }
    })
    return { ...changeEvent }
  }
})

const selectListType = computed(() => {
  return (item: { list: string | number }) => {
    if (props.formOpts.listTypeInfo) {
      return props.formOpts.listTypeInfo[item.list]
    } else {
      return []
    }
  }
})

const compChildName = computed(() => {
  return (opt: { type: any }) => {
    switch (opt.type) {
      case "checkbox":
        return "el-checkbox"
      case "radio":
        return "el-radio"
      case "select-arr":
      case "select-obj":
        return "el-option"
    }
  }
})

const compChildLabel = computed(() => {
  return (opt: { type: any; arrLabel: any }, value: { [x: string]: any; value: any }) => {
    switch (opt.type) {
      case "radio":
      case "checkbox":
        return value[opt.arrLabel || "label"]
      case "el-select-multiple":
      case "select-arr":
        return value[opt.arrLabel || "label"]
      case "select-obj":
        return value
    }
  }
})

const compChildValue = computed(() => {
  return (opt: { type: any; arrKey: any }, value: { [x: string]: any; value: any }, key: any) => {
    switch (opt.type) {
      case "radio":
      case "checkbox":
        return value[opt.arrKey || "key"]
      case "el-select-multiple":
      case "select-arr":
        return value[opt.arrKey || "key"]
      case "select-obj":
        return key
    }
  }
})

const compChildShowLabel = computed(() => {
  return (opt: { type: any; arrLabel: any }, value: { [x: string]: any; label: any }) => {
    switch (opt.type) {
      case "radio":
      case "checkbox":
        return value[opt.arrLabel || "label"]
      case "el-select-multiple":
      case "select-arr":
        return value[opt.arrLabel || "label"]
      case "select-obj":
        return value
    }
  }
})

const colSize = ref(props.widthSize)
const auForm = ref<any>(null) // ✅ 修复：统一 ref 名称
const instance = getCurrentInstance() as any
const emits = defineEmits(["update:modelValue", "handleEvent", "getRefs"])

watch(
  () => props.formOpts.formData,
  () => {
    emits("update:modelValue", auForm.value)
  },
  { deep: true }
)

watch(
  () => props.widthSize,
  val => {
    if (val > 6) {
      ElMessage.warning("widthSize值不能大于6！")
      colSize.value = 6
    } else {
      colSize.value = val
    }
  },
  { deep: true }
)

// ==============================================
// ✅ 修复：这里是报错根源！加 nextTick + 非空判断
// ==============================================
onMounted(async () => {
  await nextTick() // 等待 DOM 渲染完成
  if (!auForm.value) return // 空保护

  try {
    const entries = Object.entries(auForm.value.$.exposed)
    for (const [key, value] of entries) {
      instance.exposed[key] = value
    }
  } catch (e) {}

  props.formOpts.formData &&
    Object.keys(props?.formOpts?.formData).forEach(key => {
      if (props.formOpts.formData[key]) {
        props.formOpts.fieldList.map((val: { value: string; event: null } | any) => {
          if (val.value == key) {
            handleEvent(val.event, props.formOpts.formData[key], val, false)
          }
        })
      }
    })

  emits("update:modelValue", auForm.value)
})

const getChildWidth = (item: { widthSize: any }) => {
  if (props.formOpts.labelPosition === "top") {
    return `flex: 0 1 calc((${100 / (item.widthSize || colSize.value)}% - 10px));margin-right:10px;`
  } else {
    return `flex: 0 1 ${100 / (item.widthSize || colSize.value)}%;`
  }
}

const getPlaceholder = (row: any) => {
  let placeholder
  if (row.comp && typeof row.comp == "string") {
    if (row.comp.includes("input")) {
      placeholder = "请输入" + row.label
    } else if (row.comp.includes("select") || row.comp.includes("date")) {
      placeholder = "请选择" + row.label
    } else {
      placeholder = row.label
    }
  }
  return placeholder
}

const handleEvent = (
  type: null,
  val: any,
  item: { isTrim: any; comp: string | string[]; type: string; value: string | number } | any,
  flag = true
) => {
  if (
    flag &&
    props.isTrim &&
    !item.isTrim &&
    item.comp.includes("el-input") &&
    item?.bind?.type !== "number" &&
    item.type !== "password" &&
    item.type !== "inputNumber"
  ) {
    props.formOpts.formData[item.value] = (props.formOpts.formData[item.value] || "").trim()
  }

  emits("handleEvent", type, val)
}

const selfValidate = () => {
  return new Promise((resolve: any, reject: any) => {
    if (!auForm.value) return reject()
    auForm.value.validate((valid: boolean) => {
      if (valid) {
        resolve({ valid, formData: props.formOpts.formData })
      } else {
        reject({ valid, formData: null })
      }
    })
  })
}

const getRefs = (el: any, item: any, index: any) => {
  emits("getRefs", el, item, index)
}

const auselecttableref = ref({})
const handleRef = (el: any, item: any, key: any) => {
  emits("getRefs", el, item, key)
  if (el) {
    auselecttableref.value[`auselecttableref-${key}`] = el
  }
}

const selfResetFields = () => {
  resetTselectTable()
  if (auForm.value) auForm.value.resetFields()
}

const resetTselectTable = () => {
  const refList = Object.keys(auselecttableref.value).filter(item =>
    item.includes("auselecttableref")
  )
  if (refList.length > 0) {
    refList.map(val => {
      auselecttableref.value[val]?.clear?.()
    })
  }
}

defineExpose({ ...instance.exposed, selfValidate, selfResetFields, resetTselectTable })
</script>

<style lang="scss">
.au-form {
  display: flex;
  flex-wrap: wrap;

  .el-form-item {
    align-items: center;

    .el-form-item__content {
      .el-input,
      .el-select,
      .el-date-editor,
      .el-textarea {
        width: 100%;
      }

      .el-input-number {
        .el-input {
          width: inherit;
        }
      }
    }
  }

  .asterisk-left {
    .el-form-item__label {
      margin-left: 5px;
    }
  }

  .au-margin-top-5 {
    margin-top: calc(5px);
  }

  .el-input-number {
    .el-input {
      .el-input__inner {
        text-align: left;
      }
    }
  }

  .render_label {
    .el-form-item__label {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &::before {
        margin-top: 1px;
      }
    }
  }

  .render_laber_position_left {
    .el-form-item__label {
      justify-content: flex-start;
    }
  }

  &.el-form--label-top {
    .render_label {
      .el-form-item__label {
        justify-content: flex-start;
      }
    }
  }

  .label_render {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .text_show {
    color: var(--el-text-color-primary);
  }

  .slot_label {
    .el-form-item__content {
      label {
        color: var(--el-text-color-primary);
        margin-right: 12px;
      }
    }
  }

  .flex-box {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  .flex-ver {
    align-items: center;
    justify-content: center;
  }

  .footer_btn {
    width: 100%;
  }
}
</style>