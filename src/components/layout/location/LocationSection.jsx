import { iconMap } from '../../../data/iconMap';
import { Badge, ButtonCta, MapComponent } from '../../ui';
import { SectionLayout } from '../';
import styles from './LocationSection.module.scss';

export const LocationSection = ({ data }) => {
  const { badge, title, items, cta } = data;
  return (
    <SectionLayout id={'location'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge text={badge} />
          <h2>{title}</h2>
          <div className={styles.line} />

          <div className={styles.infoContainer}>
            {items?.map(({ label, icon, desc }) => {
              const Icon = iconMap[icon];
              return (
                <div key={label} className={styles.item}>
                  <Icon size={16} className={styles.icon} />
                  <div className={styles.itemFlex}>
                    <p>{label}</p>
                    <span>{desc}</span>
                  </div>
                </div>
              );
            })}
            <div className={styles.cta}>
              <ButtonCta
                label={cta.label}
                href={cta.href}
                size={cta.size}
                icon={cta.icon}
              />
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <MapComponent />
        </div>

        {/* map */}
      </div>
    </SectionLayout>
  );
};
