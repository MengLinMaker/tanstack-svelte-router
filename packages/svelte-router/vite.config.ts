import { tanstackViteConfig } from '@tanstack/config/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig, mergeConfig } from 'vitest/config'
import { svelteTesting } from '@testing-library/svelte/vite'
import packageJson from './package.json'

const config = defineConfig({
  plugins: [svelte(), svelteTesting()],
  test: {
    name: packageJson.name,
    dir: './tests',
    watch: false,
    environment: 'jsdom',
    setupFiles: ['./tests/test-setup.ts'],
    typecheck: { enabled: true },
    restoreMocks: true,
  },
})

export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: 'src/index.ts',
    srcDir: 'src',
  }),
)
