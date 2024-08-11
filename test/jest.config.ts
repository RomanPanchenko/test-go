import { pathsToModuleNameMapper } from 'ts-jest';

import { Config } from '@jest/types';

const { compilerOptions } = require('./../tsconfig');

process.env.TZ = 'UTC';

const jestConfig: Config.InitialOptions = {
  clearMocks: true,
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  moduleNameMapper: compilerOptions.paths ? pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/..' } ) : undefined,
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '\\.ts?$': ['ts-jest', { tsconfig: './../tsconfig.jest.json' }],
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/**/**.ts',
    '!<rootDir>/**/index.ts',
  ],
  fakeTimers: { enableGlobally: true },
};

export default jestConfig;