import pluginSolid from 'eslint-plugin-solid'
import rootConfig from '../../eslint.config.js'

export default [
  ...rootConfig,
  {
    files: ['src/**/*.{ts,tsx}', 'tests/**/*.{ts,tsx}'],
  },
  {
    plugins: [pluginSolid],
    extends: ['plugin:solid/recommended'],
  },
]
