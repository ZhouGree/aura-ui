<template>
  <div class="demo-box">
    <el-button type="success" @click="visible = true">自定义插槽抽屉</el-button>

    <au-drawer v-model="visible" size="500px">
      <template #header>
        <div style="font-size:16px;color:#409eff;font-weight:bold">✅ 自定义标题</div>
      </template>

      <div class="content">这里是主体内容区域</div>

      <template #footer>
        <div class="demo-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">提交</el-button>
        </div>
      </template>
    </au-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const visible = ref(false)
const handleConfirm = () => {
  ElMessage.success('提交成功')
  visible.value = false
}
</script>

<style scoped>
.demo-box { padding: 10px 0; }
.content { padding: 20px 0; }
.demo-footer { display: flex; justify-content: flex-end; gap: 12px; }
</style>