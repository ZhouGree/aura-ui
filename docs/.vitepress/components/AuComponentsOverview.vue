<template>
  <div class="components-overview">
    <div class="overview-header">
      <h2>组件分类导览</h2>
      <p class="subtitle">基于 Element-plus 封装的中后台业务型组件库</p>
    </div>

    <div class="category-grid">
      <div
        v-for="category in categories"
        :key="category.name"
        class="category-card"
        @click="handleCategoryClick(category)"
      >
        <div class="category-icon">
          <el-icon :size="24"><component :is="category.icon" /></el-icon>
        </div>
        <div class="category-info">
          <h3>{{ category.name }}</h3>
          <p>{{ category.description }}</p>
          <div class="component-tags">
            <el-tag
              v-for="comp in category.components.slice(0, 3)"
              :key="comp.name"
              size="small"
              type="info"
            >
              {{ comp.name }}
            </el-tag>
            <el-tag v-if="category.components.length > 3" size="small">
              +{{ category.components.length - 3 }}
            </el-tag>
          </div>
        </div>
        <el-icon class="arrow-icon"><ArrowRight /></el-icon>
      </div>
    </div>

    <div class="quick-start">
      <h3>快速开始</h3>
      <el-steps :active="currentStep" align-center>
        <el-step title="安装依赖" description="pnpm install aura-ui -S" />
        <el-step title="全局注册" description="app.use(AuraUI)" />
        <el-step title="开始使用" description="选择需要的组件" />
      </el-steps>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue'
import { ArrowRight, Edit, Search, DataLine, Menu } from '@element-plus/icons-vue'

const router = typeof window !== 'undefined' && (window as any).__VITEPRESS__?.__useRouter?.()

const categories = ref([
  {
    name: '基础表单组件',
    description: '最简单 → 最复杂，适合入门学习',
    icon: markRaw(Edit),
    path: '/aura-ui/components/AuButton/base',
    components: [
      { name: 'AuButton', path: '/aura-ui/components/AuButton/base' },
      { name: 'AuInput', path: '/aura-ui/components/AuInput/base' },
      { name: 'AuRadio', path: '/aura-ui/components/AuRadio/base' },
      { name: 'AuCheckbox', path: '/aura-ui/components/AuCheckbox/base' },
      { name: 'AuForm', path: '/aura-ui/components/AuForm/base' },
      { name: 'AuModuleForm', path: '/aura-ui/components/AuModuleForm/base' }
    ]
  },
  {
    name: '选择类组件',
    description: '基础选择 → 高级表格选择',
    icon: markRaw(Search),
    path: '/aura-ui/components/AuSelectIcon/base',
    components: [
      { name: 'AuSelectIcon', path: '/aura-ui/components/AuSelectIcon/base' },
      { name: 'AuSelect', path: '/aura-ui/components/AuSelect/base' },
      { name: 'AuSelectTable', path: '/aura-ui/components/AuSelectTable/base' },
      { name: 'AuDatePicker', path: '/aura-ui/components/AuDatePicker/base' }
    ]
  },
  {
    name: '数据展示组件',
    description: '最简单 → 最复杂，适合深入学习',
    icon: markRaw(DataLine),
    path: '/aura-ui/components/AuDetail/base',
    components: [
      { name: 'AuDetail', path: '/aura-ui/components/AuDetail/base' },
      { name: 'AuTable', path: '/aura-ui/components/AuTable/base' },
      { name: 'AuQueryCondition', path: '/aura-ui/components/AuQueryCondition/base' },
      { name: 'AuAdaptivePage', path: '/aura-ui/components/AuAdaptivePage/base' }
    ]
  },
  {
    name: '布局导航组件',
    description: '最简单 → 最复杂，适合扩展学习',
    icon: markRaw(Menu),
    path: '/aura-ui/components/AuBreadcrumb/base',
    components: [
      { name: 'AuBreadcrumb', path: '/aura-ui/components/AuBreadcrumb/base' },
      { name: 'AuTabs', path: '/aura-ui/components/AuTabs/base' },
      { name: 'AuStepWizard', path: '/aura-ui/components/AuStepWizard/base' },
      { name: 'AuDrawer', path: '/aura-ui/components/AuDrawer/base' }
    ]
  }
])

const currentStep = ref(0)

const handleCategoryClick = (category: any) => {
  if (router) {
    router.push(category.path)
  } else {
    window.location.href = category.path
  }
}
</script>

<style scoped>
.components-overview {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.overview-header {
  text-align: center;
  margin-bottom: 40px;
}

.overview-header h2 {
  font-size: 28px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.subtitle {
  font-size: 16px;
  color: var(--vp-c-text-2);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.category-card {
  display: flex;
  align-items: center;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.category-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-1);
  border-radius: 10px;
  margin-right: 16px;
  font-size: 24px;
  color: #fff;
}

.category-info {
  flex: 1;
}

.category-info h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}

.category-info p {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}

.component-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.arrow-icon {
  color: var(--vp-c-text-3);
  transition: transform 0.3s;
}

.category-card:hover .arrow-icon {
  transform: translateX(4px);
  color: var(--vp-c-brand-1);
}

.quick-start {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 30px;
}

.quick-start h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
}

@media (max-width: 768px) {
  .category-grid {
    grid-template-columns: 1fr;
  }
}
</style>
