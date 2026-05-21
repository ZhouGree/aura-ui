<template>
  <div class="demo-box">
    <el-button type="primary" @click="openEditDrawer">
      编辑用户信息
    </el-button>

    <au-drawer
      v-model="visible"
      title="编辑用户信息"
      size="520px"
      :confirm="submitForm"
      :confirm-button-props="{ type: 'primary' }"
      cancel-text="关闭"
      confirm-text="保存修改"
      @confirm="handleConfirm"
    >
      <div class="form-wrapper">
        <el-form :model="form" label-width="90px" ref="formRef">
          <el-form-item label="用户姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名" clearable />
          </el-form-item>

          <el-form-item label="手机号码" prop="mobile">
            <el-input v-model="form.mobile" placeholder="请输入手机号" clearable />
          </el-form-item>

          <el-form-item label="备注说明">
            <el-input
              v-model="form.remark"
              type="textarea"
              :rows="3"
              placeholder="请输入备注信息"
            />
          </el-form-item>
        </el-form>
      </div>
    </au-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const visible = ref(false)

const form = reactive({
  name: '张三',
  mobile: '13800000000',
  remark: '这是默认备注信息'
})

const openEditDrawer = () => {
  visible.value = true
}

const submitForm = async () => {
  if (!form.name || !form.mobile) {
    ElMessage.warning('姓名和手机号不能为空')
    return false
  }

  await new Promise(resolve => setTimeout(resolve, 600))
  return true
}

const handleConfirm = () => {
  ElMessage.success('用户信息修改成功！')
}
</script>

<style scoped>
.demo-box {
  padding: 10px 0;
}

.form-wrapper {
  padding: 8px 0;
}
</style>