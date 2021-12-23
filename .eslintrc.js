module.exports = {
  root: true,
  env: {
    node: true
  },
  // plugins: ["prettier"],
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
    // "plugin:prettier/recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': ['warn', 'never']
    // quotes: ["warn", "single"]
    // semi: ["warn", "always"]
  }
}
