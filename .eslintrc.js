module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'vue/no-unused-vars': 'warn',
        'vue/no-multiple-template-root': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};