module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-spacing': ['warn', 'never'],
    'max-len': ['warn', {'code': 300, 'tabWidth': 4}],
    'lines-between-class-members': ['warn', 'always', {'exceptAfterSingleLine': true}],
    '@typescript-eslint/camelcase': ['error', {properties: 'never'}],
    'prefer-const': 'warn',
    'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
    'prefer-destructuring': 'warn',
    'prefer-template': 'warn',
    'no-trailing-spaces': 'warn',
    'arrow-body-style': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-await-in-loop': 'warn',
    'no-underscore-dangle': 'warn',
    'no-param-reassign': ['error', { 'props': false }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
