import { DefaultOptions, QueryClient } from 'react-query';
import { AxiosError } from 'axios';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    retry: false,
  },
};
declare module 'react-query' {
  interface Register {
    defaultError: AxiosError;
  }
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
