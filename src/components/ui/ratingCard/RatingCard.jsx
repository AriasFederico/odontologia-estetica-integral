import { iconMap } from '../../../data/iconMap';
import styles from './RatingCard.module.scss';

export const RatingCard = ({ data }) => {
  const { reviews, rating, stars } = data;
  const Google = iconMap.google;
  const Star = iconMap.star;
  return (
    <div className={styles.ratingCard}>
      <div className={styles.content}>
        <p className={styles.rating}>{rating}</p>
        <div className={styles.stars}>
          {[...Array(stars)].map((_, index) => (
            <Star key={(_, index)} className={styles.star} size={12} />
          ))}
        </div>
        <span className={styles.reviews}>{reviews}</span>
      </div>
      <Google size={46} />
    </div>
  );
};
