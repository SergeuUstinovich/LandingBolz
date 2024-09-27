import { ReactSVG } from 'react-svg'
import styles from './soon.module.css'

export const Soon = () => {
  return (
    <div className={styles.wrapper} id={'soon'}>
      <div className={styles.top}>
        <img src="assets/soon.png" alt="" className={styles.img} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomTagBox}>
          <div className={styles.bottomTag}>#Скоро</div>
        </div>
        <div className={styles.bottomText}>
          благодаря нашим партнерам даем{' '}
          <span>до трех бесплатных аренд шеринга</span>, чтобы оценить
          возможности BOLZ
        </div>
        <div className={styles.bottomBottom}>
          <div className={styles.bottomBottomTitle}>
            получай до старта первой аренды :
          </div>
          <div className={styles.bottomBottomBody}>
            <div className={styles.bottomBottomBodyItem}>
              <ReactSVG src={'assets/check.svg'} />
              <div className={styles.bottomBottomBodyItemText}>
                денежные промокоды
              </div>
            </div>
            <div className={styles.bottomBottomBodyItem}>
              <ReactSVG src={'assets/check.svg'} />
              <div className={styles.bottomBottomBodyItemText}>
                партнерские кэшбэки
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
