import { iconMap } from '../../../data/iconMap';
import styles from './InfoAbout.module.scss';

export const InfoAbout = ({ data }) => {
  const { infoLocation, cta } = data;
  const WhatsApp = iconMap.whatsapp;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.infoItems}>
          {infoLocation?.map(({ label, icon }) => {
            const Icon = iconMap[icon];
            return (
              <div key={icon} className={styles.item}>
                <Icon />
                <p>{label}</p>
              </div>
            );
          })}
        </div>
        <a href={cta.href} className={styles.cta}>
          <WhatsApp />
          {cta.label}
        </a>
      </div>
    </div>
  );
};
