module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jsx-a11y/recommended',
      'airbnb',
      'airbnb/hooks',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint',
      'jsx-a11y',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js doesn't require React to be in scope
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': [
        'error',
        {
          handlers: [
            'onClick',
            'onKeyDown',
            'onKeyUp',
            'onKeyPress',
          ],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  