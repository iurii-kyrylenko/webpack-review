module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-unused-vars': ['warn'],
    'no-console': 0
  },
}
