import type { TickerCardProps } from '../../types';

import styles from './styles.module.css';

const TickerCard = ({ name, ticker, status }: TickerCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h4>{name}</h4>
        <p>
          <span>Exchange Symbol: </span>
          <span> {ticker}</span>
        </p>
      </div>

      <div className={`${styles.status}  ${status === 'delisted' ? '' : styles.active}`}>{status}</div>
    </div>
  );
};

export default TickerCard;
