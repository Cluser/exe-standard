/* eslint-disable */
export default {
  displayName: 'server-server-siemens-feature-communication',
  preset: '../../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../../../coverage/libs/server/server-siemens/feature/communication'
};
