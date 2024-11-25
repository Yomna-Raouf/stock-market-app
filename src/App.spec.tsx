import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from 'react-query';

import { MemoryRouter } from 'react-router';
import AppRoutes from './routes';

const queryClient = new QueryClient();

describe('App', () => {
  it('renders the App component', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AppRoutes />
        </MemoryRouter>
      </QueryClientProvider>,
    );
  });
});
