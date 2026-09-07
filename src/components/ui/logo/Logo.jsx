// importar aca data.logo
import { dataOdont } from '../../../data/data';
import styles from './Logo.module.scss';

{
  /* <img src={stc} alt={alt} /> */
}
{
  /* en caso de tener imagen envolver los nombres en div.flex */
}

export const Logo = ({ size }) => {
  const { branding } = dataOdont;
  const { logo } = branding;
  return (
    <a href={branding.logo.href} className={styles.logo}>
      <img src={logo.src} alt={logo.alt} className={styles.icon} />
      <p className={`${styles.clinicName} ${styles[size]}`}>
        {branding.clinicName}
      </p>
      <span className={styles.secondName}>{branding.secondName}</span>
    </a>
  );
};
