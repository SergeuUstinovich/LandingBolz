import { ReactSVG } from 'react-svg'
import { Button } from '../../../button'
import styles from './feature.module.css'

export const Feature = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.top}>
          <div className={styles.topText}>
            <div className={styles.topTextTitle}>
              Вместе мы создаем будущее шеринга
            </div>
            <div className={styles.topTextText}>
              Стань частью одной из самых ожидаемых экосистем шеринг экономики
            </div>
          </div>
          <div className={styles.topButtons}>
            <Button className={styles.button}>
              <ReactSVG src={'assets/union.svg'} className={'w-[13px]'} />
              <div>Стать партнером</div>
            </Button>

            <button className={styles.more}>
              <span className={styles.moreTitle}>Узнать подробнее</span>
            </button>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomTop}>
            <div className={styles.bottomTopTag}>#Присоединяйся</div>
            <div className={styles.bottomTopTitle}>НАШИ ПАРТНЕРЫ</div>
          </div>
          <div className={styles.bottomBrands}>
            <div className={styles.brand}>
              <ReactSVG
                src={'assets/feature/urent.svg'}
                className={styles.imgUrent}
              />
            </div>
            <div className={styles.brand}>
              <ReactSVG
                src={'assets/feature/getEnergy.svg'}
                className={styles.imgGetEnergy}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
