/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.js', '.jsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testMatch: [
    "<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  verbose: true,
  rootDir: '.',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts'
  ]
};

module.exports = config;

export const roots = ['<rootDir>/__tests__'];
export const moduleDirectories = ['node_modules', 'src'];

// ... your server code ...
