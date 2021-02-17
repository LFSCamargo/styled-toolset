const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
	...tsjPreset,
	verbose: true,
	automock: false,
	collectCoverage: true,
	transform: {
		...tsjPreset.transform,
	},
	modulePathIgnorePatterns: ['<rootDir>/dist/'],
	testMatch: ['**/__tests__/*.test.(ts|tsx)'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	unmockedModulePathPatterns: ['enzyme', 'jest-enzyme'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	collectCoverageFrom: ['src/**/*.{ts|tsx}', 'src/**/{!(index),}.ts'],
	moduleDirectories: ['node_modules', '<rootDir>'],
};
