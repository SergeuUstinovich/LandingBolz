import clsx from 'clsx'
import styles from './button.module.css'
import { IProps } from './button.types'

export const Button = ({ children, className, ...props }: IProps) => {
  return (
    <button className={clsx(styles.wrapper, className)} {...props}>
      {children}
    </button>
  )
}
