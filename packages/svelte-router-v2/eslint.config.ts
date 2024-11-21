import pluginReact from '@eslint-react/eslint-plugin'
import pluginSvelte from 'eslint-plugin-svelte'
// @ts-expect-error
import pluginReactHooks from 'eslint-plugin-react-hooks'
import rootConfig from '../../eslint.config.js'

export default [
  ...rootConfig,
  ...pluginSvelte.configs['flat/recommended'],

  {
    files: ['src/**/*.{ts,tsx,svelte}', 'tests/**/*.{ts,tsx,svelte}'],
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      '@eslint-react': pluginReact,
    },
    rules: {
      '@eslint-react/no-unstable-context-value': 'off',
      '@eslint-react/no-unstable-default-props': 'off',
      '@eslint-react/dom/no-missing-button-type': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'svelte/block-lang': ['error', { script: ['ts'] }],
      'svelte/no-svelte-internal': 'error',
      'svelte/valid-compile': 'off',
      'prefer-const': 'off',
    },
  },
]
