import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';

import { axiosClient } from '@/api/index';

import type { Ticker } from '../types';
import type { AxiosError } from 'axios';

import { API_KEY } from '@/constants';

export const getTickers = async ({
  limit = 15,
  next_page_url,
  search,
}: {
  limit?: number;
  next_page_url?: string;
  search?: string;
}): Promise<{ results: Ticker[]; next_url: string }> => {
  const { data } = await axiosClient.get<{ results: Ticker[]; next_url: string }>(
    `/reference/tickers?active=true&limit=${limit}&apiKey=${API_KEY}${next_page_url ? `&cursor=${next_page_url.split('cursor=')[1]}` : ''}${search ? `&search=${search}` : ''}`,
  );

  return { results: data.results, next_url: data.next_url };
};

type UseGetExitModelingOptions = {
  limit?: number;
  next_page_url?: string;
  search?: string;
  config?: Partial<UseInfiniteQueryOptions<{ results: Ticker[]; next_url: string }, AxiosError<{ message: string }>>>;
};

export const useGetTickers = ({ limit, next_page_url, search, config }: UseGetExitModelingOptions) => {
  return useInfiniteQuery({
    queryKey: ['get-tickers', search],
    queryFn: () => getTickers({ limit, next_page_url, search }),
    getNextPageParam: (lastPage) => lastPage.next_url,
    keepPreviousData: true,
    ...config,
  });
};
