<template>
  <div class="demo-drawer-wrapper">
    <el-button type="primary" @click="visible = true">
      打开基础抽屉
    </el-button>

    <au-drawer
      v-model="visible"
      title="基础抽屉"
      size="420px"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="drawer-content">
        <div class="content-item">✅ 支持 v-model 双向绑定</div>
        <div class="content-item">✅ 右侧弹出（默认）</div>
        <div class="content-item">✅ 支持打开/关闭事件</div>
        <div class="content-item">✅ 支持标题、遮罩、关闭按钮</div>
      </div>

      <template #footer>
        <div class="demo-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">
            确认关闭
          </el-button>
        </div>
      </template>
    </au-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { ElMessage } from "element-plus"

const visible = ref(false)

const handleConfirm = () => {
  visible.value = false
  ElMessage.success("确认成功！抽屉已关闭")
}

const handleOpen = () => {
  ElMessage.success("抽屉已打开 → open 事件触发")
}

const handleClose = () => {
  ElMessage.info("抽屉已关闭 → close 事件触发")
}
</script>

<style scoped>
.demo-drawer-wrapper {
  padding: 12px 0;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 0;
  font-size: 14px;
  color: #333;
}

.content-item {
  padding: 8px 12px;
  background: #f5f7fa;
  border-radius: 4px;
}

.demo-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
}
</style>