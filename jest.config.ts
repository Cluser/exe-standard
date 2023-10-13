import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  coverageReporters: [
    'text',
    'json',
    'html'
  ]
};
