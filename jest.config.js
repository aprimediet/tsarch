const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.alias.json');

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  preset: '@shelf/jest-mongodb',
  clearMocks: true,
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec).+(ts|tsx)'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
};
