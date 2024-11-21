import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-undef': 'off',
  },
  typescript: true,
  vue: true,
  extends: [
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
})
