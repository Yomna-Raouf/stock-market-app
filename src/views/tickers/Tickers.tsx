import { useGetTickers } from './api/getTickers';
import TickerCard from './components/TickerCard/TickerCard';

import styles from './styles.module.css';

const Tickers = () => {
  const { data /*  isLoading, error */ } = useGetTickers({});

  return (
    <div>
      <div className={styles.listGrid}>
        {data?.results?.map((result) => (
          <TickerCard
            key={result.name}
            ticker={result.ticker}
            name={result.name}
            status={result.active ? 'actively traded' : 'delisted'}
          />
        ))}
      </div>
    </div>
  );
};

export default Tickers;
