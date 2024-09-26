import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import styles from './service.module.css'
import { IProps } from './service.types'

export const Service = ({ isAvaliable, iconName, title }: IProps) => {
  return (
    <div className={clsx(styles.wrapper, isAvaliable && styles.avaliable)}>
      {isAvaliable && (
        <ReactSVG
          src={'assets/arrowUpRight.svg'}
          className={clsx(
            'top-[20px] right-[20px] absolute',
            styles.arrowUpRight,
          )}
        />
      )}
      <div className={styles.box}>
        <div
          className={clsx(
            styles.boxLogo,
            isAvaliable && styles.boxLogoAvaliable,
          )}
        >
          <ReactSVG src={`assets/${iconName}.svg`} className={styles.logo} />
        </div>
        <div
          className={clsx(
            styles.boxDescription,
            isAvaliable && styles.boxDescriptionAvaliable,
          )}
        >
          <p className={styles.boxDescriptionTitle}>{title}</p>
          <div className={styles.boxDescriptionAvailable}>
            <ReactSVG src={'assets/union.svg'} className={styles.unionLogo} />
            <div className={styles.boxDescriptionAvailableValue}>
              {isAvaliable ? 'Доступно' : 'Скоро'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
