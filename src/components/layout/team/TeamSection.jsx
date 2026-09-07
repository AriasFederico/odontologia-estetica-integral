import consultorio from '../../../../public/consultorio.webp';
import { Badge, ButtonCta } from '../../ui';
import { SectionLayout } from '../';
import styles from './TeamSection.module.scss';

export const TeamSection = ({ data }) => {
  const { badge, title, professionals } = data;
  return (
    <SectionLayout>
      <div className={styles.container}>
        <Badge text={badge} />
        <h2>{title}</h2>
        <div className={styles.line} />

        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={consultorio} className={styles.image} alt='Consultorio' />
          </div>
          <div className={styles.items}>
            {professionals?.map(
              ({ initials, name, speciality, message, title }) => (
                <div key={initials} className={styles.item}>
                  <p className={styles.initials}>{initials}</p>
                  <span className={styles.title}>{title}</span>
                  <p className={styles.name}>{name}</p>
                  <span className={styles.speciality}>{speciality}</span>
                  <div className={styles.cta}>
                    <ButtonCta
                      label={'Consultar'}
                      icon={'whatsapp'}
                      variant='tertiary'
                      size='sm'
                      href={message}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
