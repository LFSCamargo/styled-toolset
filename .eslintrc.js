module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:sonarjs/recommended',
		'plugin:promise/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		useJSXTextNode: true,
		project: './tsconfig.json',
		tsconfigRootDir: '.',
	},
	plugins: ['@typescript-eslint', 'jsx-a11y', 'sonarjs', 'promise', 'import'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		__DEV__: true,
	},
	rules: {
		'@typescript-eslint/member-delimiter-style': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'import/prefer-default-export': 0,
		'import/no-named-as-default': 0,
		'import/no-unresolved': 0,
		'import/no-extraneous-dependencies': 0,
		'import/extensions': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-autofocus': 'off',
		'class-methods-use-this': 0,
		'no-nested-ternary': 0,
		'consistent-return': 0,
		'no-console': 'error',
		'array-callback-return': 0,
		'promise/prefer-await-to-callbacks': 'error',
		'promise/prefer-await-to-then': 'error',
	},
};
