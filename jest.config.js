module.exports = {
  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // The root directory that Jest should scan for tests and modules within
  rootDir: './',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  snapshotSerializers: [],

  // The path to the tsconfig file Jest should use for TypeScript
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  }
};
