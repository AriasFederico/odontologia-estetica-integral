import { Badge } from '../../ui';
import { SectionLayout } from '../';
import styles from './CoverageSection.module.scss';

export const CoverageSection = ({ data }) => {
  const { badge, title, items, span } = data;
  return (
    <SectionLayout bgVariant={'dark'} id={'coverage'}>
      <div className={styles.header}>
        <Badge text={badge} variantText={styles.badge} />
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.line} />
      </div>

      <div className={styles.items}>
        {items?.map((item, index) => (
          <p key={index} className={styles.item}>
            {item}
          </p>
        ))}
      </div>
      <span className={styles.moreInfo}>{span}</span>
    </SectionLayout>
  );
};
