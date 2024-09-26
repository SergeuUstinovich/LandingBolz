import { ReactSVG } from 'react-svg'
import styles from './phones.module.css'

export const Phones = () => {
  return (
    <div className={styles.wrapper}>
      <img src={'assets/phones.png'} alt={''} className={styles.imagePhones} />

      <div className={styles.description}>
        <ReactSVG src={'assets/logo.svg'} className={styles.logo} />
        <div className={styles.text}>
          АГРЕГАТОР ШЕРИНГА В ЛЮБИМОМ ПРИЛОЖЕНИИ ТВОЕГО СМАРТФОНА
        </div>
      </div>
    </div>
  )
}
