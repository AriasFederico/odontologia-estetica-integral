import { Badge, ButtonCta } from '../../ui';
import { InfoAbout } from '../';
import styles from './AboutSection.module.scss';

export const AboutSection = ({ data }) => {
  const {
    badge,
    title,
    metrics,
    text_primary,
    text_secondary,
    cta,
    infoAbout,
  } = data;
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <InfoAbout data={infoAbout} />
        <div className={styles.aboutHero}>
          <div className={styles.content}>
            <Badge text={badge} variantText={styles.badge} />
            <h2 className={styles.title}>{title}</h2>
          </div>
        </div>
        <div className={styles.metrics}>
          {metrics?.map(({ stat_number, stat_label }) => (
            <div key={stat_label} className={styles.item}>
              <p className={styles.number}>{stat_number}</p>
              <span className={styles.label}>{stat_label}</span>
            </div>
          ))}
        </div>
        <div className={styles.contentAbout}>
          <p>{text_primary}</p>
          <div className={styles.ctaContainer}>
            <p>{text_secondary}</p>

            <ButtonCta
              label={cta.label}
              icon={cta.icon}
              href={cta.href}
              variant={cta.variant}
              size={cta.size}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
