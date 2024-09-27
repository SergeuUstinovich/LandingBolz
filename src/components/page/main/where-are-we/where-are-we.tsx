import { ReactSVG } from 'react-svg'
import styles from './where-are-we.module.css'

export const WhereAreWe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.whereAreWeBox}>
          <p className={styles.whereAreWe}>Где мы есть</p>
          <p className={styles.click}>Нажми, скачай, пользуйся</p>
        </div>

        <div className={styles.logoBox}>
          <a href="https://sravni.ru" target={'_blank'}>
            <ReactSVG src={'assets/logoSravni.svg'} className={styles.logo} />
          </a>
        </div>
      </div>
    </div>
  )
}
