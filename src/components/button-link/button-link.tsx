import clsx from 'clsx'
import styles from './button-link.module.css'
import { IProps } from './button-link.types'

export const ButtonLink = ({ children, className, ...props }: IProps) => {
  return (
    <a className={clsx(styles.wrapper, className)} {...props}>
      {children}
    </a>
  )
}
