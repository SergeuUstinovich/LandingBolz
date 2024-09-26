import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import styles from './how-to-get.module.css'

const getItem = (text: string, number: number) => {
  return (
    <div className={clsx(styles.item, styles[`item${number}`])}>
      <img
        src={`assets/how-to-get/${number}.png`}
        alt=""
        className={styles[`imgNumber${number}`]}
      />
      <div className={styles.itemText}>{text}</div>
    </div>
  )
}

export const HowToGet = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Как получить услугу
        <div>за 5 шагов</div>
      </div>

      <div className={styles.body}>
        <ReactSVG
          src={'assets/how-to-get/connect.svg'}
          className={styles.connect1_2}
        />
        <ReactSVG
          src={'assets/how-to-get/connect2.svg'}
          className={styles.connect4_5}
        />
        {getItem(
          'Открой приложение, в котором уже есть BOLZ, и Нажми на баннер с НАМИ на главной странице',
          1,
        )}
        {getItem('ВЫбери на карте ближайшую к тебе точку СЕРВИса шеринга', 2)}
        {getItem('ИСПОЛЬЗУй ВСТРОЕННЫЙ QR-сканер для активации аренды', 3)}
        {getItem('ДОбавь привычное платежное средство и оплати аренду', 4)}
        {getItem(
          'и, конечно же, мы подскажем, где и как удобнее всего завершить аренду',
          5,
        )}
      </div>
    </div>
  )
}
