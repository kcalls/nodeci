module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverage: true, // Ensures coverage information is collected
    coverageDirectory: './coverage', // Specifies where coverage reports are stored
    coverageReporters: ['lcov', 'text-summary'], // LCov is needed for SonarQube
    testResultsProcessor: 'jest-sonar-reporter',
};
