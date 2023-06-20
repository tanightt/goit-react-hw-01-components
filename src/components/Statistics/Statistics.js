import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat_list}>
        {stats.map(item => {
          const bgColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <li
              key={item.id}
              className={styles.item}
              style={{ backgroundColor: `#${bgColor}` }}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
