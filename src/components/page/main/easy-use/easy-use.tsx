import { ReactSVG } from 'react-svg'
import styles from './easy-use.module.css'

export const EasyUse = () => {
  return (
    <div
      id="easy-use"
      className={styles.wrapper}
      style={{ backgroundImage: 'url(/assets/easyUse/arrow.png)' }}
    >
      <div className={styles.topTriangle} />

      <img src="assets/easyUse/phone.png" alt="" className={styles.imgPhone} />
      <img
        src="assets/easyUse/skuter.png"
        alt=""
        className={styles.imgSkuter}
      />

      <img
        src="assets/easyUse/kerfin.png"
        alt=""
        className={styles.imgKerfin}
      />

      <img
        src="assets/easyUse/powerbank.png"
        alt=""
        className={styles.imgPowerbank}
      />

      <img src="assets/easyUse/bike.png" alt="" className={styles.imgBike} />

      <div className={styles.block1}>
        <div className={styles.block1Text}>
          Для того чтобы использовать сервис, тебе <span>не</span> нужно
        </div>
        <div className={styles.block1Body}>
          <div className={styles.block1BodyItem}>
            <ReactSVG src={'assets/cross.svg'} className={styles.cross} />
            <div className={styles.block1BodyItemText}>
              отдельно скачивать и регистрироваться в приложениях
              шеринг-сервисов
            </div>
          </div>
          <div className={styles.block1BodyItem}>
            <ReactSVG src={'assets/cross.svg'} className={styles.cross} />
            <div className={styles.block1BodyItemText}>
              регистрироваться в BOLZ
            </div>
          </div>
          <div className={styles.block1BodyItem}>
            <ReactSVG src={'assets/cross.svg'} className={styles.cross} />
            <div className={styles.block1BodyItemText}>
              предоставлять персональные данные
            </div>
          </div>
        </div>
      </div>

      <div className={styles.block2}>
        <div className={styles.block2Text}>Для удобства мы:</div>
        <div className={styles.block2Body}>
          <div className={styles.block2BodyItem}>
            <ReactSVG src={'assets/check.svg'} className={styles.check} />
            <div className={styles.block2BodyItemText}>
              сделали поиск любых услуг шеринга, оплаты и завершения аренды в
              одном месте
            </div>
          </div>
          <div className={styles.block2BodyItem}>
            <ReactSVG src={'assets/check.svg'} />
            <div className={styles.block2BodyItemText}>
              добавили популярные способы оплаты
            </div>
          </div>
          <div className={styles.block2BodyItem}>
            <ReactSVG src={'assets/check.svg'} />
            <div className={styles.block2BodyItemText}>
              придумали, как уведомить тебя об услуге в самый подходящий момент
            </div>
          </div>
        </div>
      </div>

      <img src="assets/easyUse/cars.png" alt="" className={styles.imgCars} />

      <div className={styles.bottomTriangle} />
    </div>
  )
}
