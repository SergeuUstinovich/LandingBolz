import { ReactSVG } from 'react-svg'
import styles from './our-approach.module.css'

export const OurApproach = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.title}>
            наш Подход сочетает экологичность и заботу о пользователе с
            примененнием интеллектуальных AI-инструментов
          </div>
          <div className={styles.body}>
            <div className={styles.bodyItem}>
              <ReactSVG
                src={'assets/ourApproachEllipse.svg'}
                className={styles.ellipse}
              />
              <div className={styles.bodyItemText}>
                Подбор только необходимых услуг шеринга по предпочтениям
              </div>
            </div>
            <div className={styles.bodyItem}>
              <ReactSVG
                src={'assets/ourApproachEllipse.svg'}
                className={styles.ellipse}
              />
              <div className={styles.bodyItemText}>
                Своевременное пуш-уведомление, когда действительно сервис
                окажется кстати
              </div>
            </div>
          </div>
        </div>
        <img src="assets/hand_ai.png" alt="" className={styles.imgHand} />
      </div>
    </div>
  )
}
