export const jest = `
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**.*.d.ts',
    '<rootDir>/src/**/*.svg',
  ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testEnvironment: 'jsdom',
  transform:{
    ".+\\.(ts|tsx)$": "ts-jest",
    "\\.[jt]sx?$": "babel-jest"
  }
}
`