const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$'

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'jsx'],
  collectCoverage: true
}
