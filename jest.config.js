module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  bail: true,
  testPathIgnorePatterns: ['/node_modules/', '/@types/', '/styles/'],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    'src/**/**/.ts(x)?',
    '!src/styles/**/*.ts(x)?',
    '!src/@types/*',
    '!src/*.ts(x)?',
    '!src/components/index.ts',
    '!src/components/**/stories.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/assetsTransformer.js'
  }
};
