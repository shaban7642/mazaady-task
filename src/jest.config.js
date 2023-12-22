module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    roots: ['./src/tests/apis/'],
    reporters: ['default'],
    coveragePathIgnorePatterns: ['node_modules', 'tests/setups'],
    globalSetup: '<rootDir>/src/tests/setups/jest.setup.ts',
    globalTeardown: '<rootDir>/src/tests/setups/jest.teardown.ts',
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
        // Add more module mappings as needed
    },
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        // Map module aliases if you are using them
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/src/tests/apis/'],
};
