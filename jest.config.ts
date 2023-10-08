import { getJestProjects } from '@nx/jest';
console.log('sssss')
export default {
  projects: getJestProjects(),
  collectCoverage: false,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  coverageReporters: [
    'json'
  ]
};
