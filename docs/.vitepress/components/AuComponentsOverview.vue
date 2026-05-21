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
import { ref } from 'vue'
import { ArrowRight, Edit, Search, DataLine, Menu } from '@element-plus/icons-vue'

const router = typeof window !== 'undefined' && window.__VITEPRESS__?.__useRouter?.()

const categories = ref([
  {
    name: '基础表单组件',
    description: '最简单 → 最复杂，适合入门学习',
    icon: Edit,
    path: '/components/AuButton/base.html',
    components: [
      { name: 'AuButton', path: '/components/AuButton/base.html' },
      { name: 'AuInput', path: '/components/AuInput/base.html' },
      { name: 'AuRadio', path: '/components/AuRadio/base.html' },
      { name: 'AuCheckbox', path: '/components/AuCheckbox/base.html' },
      { name: 'AuForm', path: '/components/AuForm/base.html' },
      { name: 'AuModuleForm', path: '/components/AuModuleForm/base.html' }
    ]
  },
  {
    name: '选择类组件',
    description: '基础选择 → 高级表格选择',
    icon: Search,
    path: '/components/AuSelectIcon/base.html',
    components: [
      { name: 'AuSelectIcon', path: '/components/AuSelectIcon/base.html' },
      { name: 'AuSelect', path: '/components/AuSelect/base.html' },
      { name: 'AuSelectTable', path: '/components/AuSelectTable/base.html' },
      { name: 'AuDatePicker', path: '/components/AuDatePicker/base.html' }
    ]
  },
  {
    name: '数据展示组件',
    description: '最简单 → 最复杂，适合深入学习',
    icon: DataLine,
    path: '/components/AuDetail/base.html',
    components: [
      { name: 'AuDetail', path: '/components/AuDetail/base.html' },
      { name: 'AuTable', path: '/components/AuTable/base.html' },
      { name: 'AuQueryCondition', path: '/components/AuQueryCondition/base.html' },
      { name: 'AuAdaptivePage', path: '/components/AuAdaptivePage/base.html' }
    ]
  },
  {
    name: '布局导航组件',
    description: '最简单 → 最复杂，适合扩展学习',
    icon: Menu,
    path: '/components/AuBreadcrumb/base.html',
    components: [
      { name: 'AuBreadcrumb', path: '/components/AuBreadcrumb/base.html' },
      { name: 'AuTabs', path: '/components/AuTabs/base.html' },
      { name: 'AuStepWizard', path: '/components/AuStepWizard/base.html' },
      { name: 'AuDrawer', path: '/components/AuDrawer/base.html' }
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
