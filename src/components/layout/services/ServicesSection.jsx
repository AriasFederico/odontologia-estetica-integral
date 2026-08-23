import { Badge, ButtonCta } from '../../ui';
import { SectionLayout } from '../';
import styles from './ServicesSection.module.scss';

export const ServicesSection = ({ data }) => {
  const { badge, title, items, cta } = data;
  return (
    <SectionLayout id={'services'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.contentHeader}>
            <Badge text={badge} />
            <h2>{title}</h2>
            <div className={styles.line} />
          </div>

          <div className={styles.cta}>
            <ButtonCta label={cta.label} size={cta.size} icon={cta.icon} />
          </div>
        </div>

        <div className={styles.items}>
          {items?.map(({ name, desc }, index) => (
            <div className={styles.item} key={name}>
              <span className={styles.index}>0{index + 1}</span>
              <p className={styles.name}>{name}</p>
              <p className={styles.desc}>{desc}</p>
              <div className={styles.itemLine} />
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
