module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 0,off: 忽略，1,warn: 警告，2,error: 报错
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['error', 'never'], // 不允许将分号作为语句的结尾
    eqeqeq: 'warn', // 使用全等
    'comma-dangle': ['error', 'never'], // 对象字面量项尾不能有逗号
    'no-unused-vars': 'warn' // 对未使用过的变量进行警告
  }
}
