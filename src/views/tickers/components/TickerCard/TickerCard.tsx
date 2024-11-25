import type { TickerCardProps } from '../../types';

import styles from './styles.module.css';

const TickerCard = ({ name, ticker }: TickerCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>
          <span>Asset: </span> <span> {name}</span>
        </h3>
        <p>
          <span>Exchange Symbol: </span>
          <span> {ticker}</span>
        </p>
      </div>

      <div className={styles.status}>State</div>
    </div>
  );
};

export default TickerCard;
