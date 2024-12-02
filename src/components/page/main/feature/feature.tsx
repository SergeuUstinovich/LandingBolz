import { ReactSVG } from 'react-svg'
import { Button } from '../../../button'
import styles from './feature.module.css'
import { Link } from 'react-router-dom'

export const Feature = () => {
  return (
    <div className={styles.wrapper} id={'feature'}>
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
              <Link to={'/about-service'}>Стать партнером</Link>
            </Button>

            <button className={styles.more}>
              <Link to={'/about-us'} className={styles.moreTitle}>Узнать подробнее</Link>
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
