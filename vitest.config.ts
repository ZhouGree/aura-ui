import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [
    vue() // 👈 这个就是让 Vitest 认识 .vue 文件的关键
  ],
  test: {
    environment: 'happy-dom',
    globals: true,
    coverage: {
        provider: 'v8',
        exclude: ['node_modules/**'], // 加这一行
    },
      exclude: [
          ...configDefaults.exclude, // 继承默认排除项
        '**/node_modules/**',      // 全局排除 node_modules
        '**/vuedraggable/**',      // 精准屏蔽问题库
        '**/zrender/**',           // 顺带排除之前的图表库（100%覆盖无意义）
        '**/dist/**',              // 排除打包产物
        '**/coverage/**',          // 排除覆盖率目录
        '**/*.d.ts',                // 排除类型声明文件
        "e2e/**",
      ],
    
  },
})