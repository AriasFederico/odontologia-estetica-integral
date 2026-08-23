import { iconMap } from '../../../data/iconMap';
import { Badge, RatingCard } from '../../ui';
import { SectionLayout } from '../';
import styles from './ReviewsSection.module.scss';

export const ReviewsSection = ({ data }) => {
  const { badge, title, rating_card, items } = data;
  const Star = iconMap.star;
  return (
    <SectionLayout bgVariant={'soft'} id={'reviews'}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Badge text={badge} />
          <h2>{title}</h2>
          <div className={styles.line} />
        </div>
        <RatingCard data={rating_card} />
      </div>

      <div className={styles.items}>
        {items?.map(({ name, initials, rating, text }) => (
          <div key={initials} className={styles.item}>
            <div className={styles.user}>
              <p className={styles.initials}>{initials}</p>
              <div>
                <p className={styles.name}>{name}</p>
                <div className={styles.stars}>
                  {[...Array(rating)].map((_, index) => (
                    <Star key={(_, index)} className={styles.star} size={12} />
                  ))}
                </div>
              </div>
            </div>
            {/* stars */}
            <p className={styles.review}>"{text}"</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
