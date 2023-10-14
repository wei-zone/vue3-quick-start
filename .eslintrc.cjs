/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
        './.eslintrc-auto-import.json'
    ],
    overrides: [
        {
            files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended']
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        // 在数组方法的回调中强制执行 return 语句
        'array-callback-return': [
            'error',
            {
                // 允许隐式
                allowImplicit: true
            }
        ],
        'space-before-function-paren': 0, // 函数定义时括号前面要有空格
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off', // 不能有声明后未被使用的变量或参数
        '@typescript-eslint/no-unused-vars': 'off',
        // 组件名
        'vue/multi-word-component-names': [
            'warn',
            {
                ignores: ['index'] // 需要忽略的组件名
            }
        ]
    }
}
