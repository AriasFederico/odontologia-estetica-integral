import { Badge, ButtonCta } from '../../ui';
import { HeroLayout } from '..';
import styles from './HeroSection.module.scss';

export const HeroSection = ({ data }) => {
  const { badge, title, subtitle, cta } = data;
  return (
    <HeroLayout bgVariant={'bgImage'}>
      <div className={styles.container}>
        <Badge text={badge} variantText={styles.badge} />

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.ctas}>
          {cta?.map(({ label, icon, href, variant }) => (
            <ButtonCta
              label={label}
              icon={icon}
              href={href}
              variant={variant}
              key={label}
            />
          ))}
        </div>
      </div>
    </HeroLayout>
  );
};
