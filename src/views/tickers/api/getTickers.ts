import { UseQueryOptions, useQuery } from 'react-query';

import { axiosClient } from '@/api/index';

import type { Ticker } from '../types';
import type { AxiosError } from 'axios';

import { API_KEY } from '@/constants';

export const getTickers = async ({ limit = 100 }: { limit?: number }): Promise<{ results: Ticker[] }> => {
  const { data } = await axiosClient.get<{ results: Ticker[] }>(
    `/reference/tickers?active=true&limit=${limit}&apiKey=${API_KEY}`,
  );

  return { results: data.results };
};

type UseGetExitModelingOptions = {
  limit?: number;
  config?: Partial<UseQueryOptions<{ results: Ticker[] }, AxiosError<{ message: string }>>>;
};

export const useGetTickers = ({ limit, config }: UseGetExitModelingOptions) => {
  return useQuery({
    queryKey: ['get-tickers', limit],
    queryFn: () => getTickers({ limit }),
    ...config,
  });
};
