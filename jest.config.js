module.exports = {
  preset: '@shelf/jest-mongodb',
  clearMocks: true,
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec).+(ts|tsx)'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
  },
};
