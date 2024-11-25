import { defineConfig } from 'cypress';

export default defineConfig({
  retries: {
    runMode: 2,
  },
  env: {
    apiUrl: 'http://localhost:3001',
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.spec.{ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    viewportHeight: 1000,
    viewportWidth: 1280,
    experimentalRunAllSpecs: true,
  },
});
