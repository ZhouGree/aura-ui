<template>
  <div class="demo-box">
    <el-space>
      <el-button type="primary" @click="handleOpen">
        方法打开：open()
      </el-button>
      <el-button @click="handleClose">
        方法关闭：close()
      </el-button>
    </el-space>

    <div class="status-tip" :class="{ active: drawerVisible }">
      当前状态：{{ drawerVisible ? '打开' : '关闭' }}
    </div>

    <au-drawer
      ref="drawerRef"
      title="方法调用示例"
      :mask-closable="false"
      @open="onOpen"
      @close="onClose"
    >
      <div class="drawer-content">
        <p>这个抽屉通过 <strong>组件实例方法</strong> 控制显示/隐藏</p>
        <p class="tip">
          点击上方按钮调用：<br>
          <code>drawerRef.value.open()</code> 打开<br>
          <code>drawerRef.value.close()</code> 关闭
        </p>
      </div>
    </au-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { ElMessage } from 'element-plus'

const drawerRef = ref<any>(null)
const drawerVisible = ref(false)

const handleOpen = () => {
  // 🔥 加 nextTick 确保 DOM 已渲染
  nextTick(() => {
    drawerRef.value?.open()
    ElMessage.success('已调用：open() 打开抽屉')
  })
}

const handleClose = () => {
  nextTick(() => {
    drawerRef.value?.close()
    ElMessage.info('已调用：close() 关闭抽屉')
  })
}

const onOpen = () => {
  drawerVisible.value = true
}

const onClose = () => {
  drawerVisible.value = false
}
</script>

<style scoped>
.demo-box {
  padding: 10px 0;
}

.status-tip {
  margin-top: 14px;
  padding: 12px 16px;
  background: #f5f7fa;
  border-radius: 4px;
  color: #909399;
  font-size: 14px;
  transition: all 0.3s;
}

.status-tip.active {
  background: #f0f9ff;
  color: #409eff;
  font-weight: 600;
}

.drawer-content {
  padding: 16px 0;
  line-height: 1.8;
}

.tip {
  margin-top: 12px;
  color: #909399;
  font-size: 13px;
}

code {
  background: #f5f7fa;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}
</style>