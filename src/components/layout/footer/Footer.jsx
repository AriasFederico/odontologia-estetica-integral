import { iconMap } from '../../../data/iconMap';
import styles from './Footer.module.scss';

export const Footer = ({ data }) => {
  const Icon = iconMap.whatsapp;
  const { clinicName, location, cta, copy } = data;
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p>{clinicName}</p>
          <span className={styles.location}>{location}</span>
        </div>
        <a href={cta.href} className={styles.cta}>
          <Icon />
          {cta.label}
        </a>
        <p className={styles.copyright}>{copy}</p>
      </div>
    </footer>
  );
};
