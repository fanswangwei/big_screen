module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    "comma-dangle": [2, "always-multiline"],//对象字面量项尾不能有逗号
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
