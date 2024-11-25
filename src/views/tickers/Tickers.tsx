import { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';

import { useGetTickers } from './api/getTickers';

import useDebounce from '@/Hooks/useDebounce';

import type { ChangeEvent } from 'react';

import TickerCard from './components/TickerCard/TickerCard';

import styles from './styles.module.css';

const Tickers = () => {
  const { ref: loadMoreRef, inView } = useInView();

  const [searchToken, setSearchToken] = useState('');
  const debouncedSearchToken = useDebounce(searchToken, 1000);

  // TODO: sanitize search token
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isSuccess, isLoading, error, isError } = useGetTickers({
    search: debouncedSearchToken,
  });

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      {isError && (
        <p>
          {error?.status === 429
            ? "You've exceeded the maximum requests per minute, please wait ...."
            : 'There was a problem with fetching data'}
        </p>
      )}
      {isLoading && <p>Fetching data...</p>}
      {isSuccess && (
        <div>
          <div className={styles.filters}>
            <input
              type="text"
              placeholder="Search..."
              value={searchToken}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSearchToken(e.target.value);
              }}
            />
          </div>

          <div className={styles.listGrid}>
            {data?.pages?.map((page) => {
              return page?.results?.map((result) => (
                <TickerCard
                  key={result.name}
                  ticker={result.ticker}
                  name={result.name}
                  status={result.active ? 'actively traded' : 'delisted'}
                />
              ));
            })}
          </div>
          <div ref={loadMoreRef}></div>
          {isFetchingNextPage ? <span> Loading...</span> : null}
        </div>
      )}
    </>
  );
};

export default Tickers;
