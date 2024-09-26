import { Button } from '../../../button'
import styles from './form.module.css'

export const Form = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.title}>Остались вопросы? Напиши нам</div>
        <div className={styles.body}>
          <div className={styles.bodyTitle}>
            Введи свой email, и мы отправим тебе подробную информацию о
            сотрудничестве с нами
          </div>
          <div className={styles.form}>
            <input type="text" className={styles.input} placeholder={'Email'} />
            <div className={styles.footer}>
              <Button className={styles.submit} type={'submit'}>
                ОТправить
              </Button>
              <div className={styles.text}>
                Отправляя свои данные, вы даете согласие на условия{' '}
                <a href={'#'}>обработки персональных данных</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="assets/formRight.png" alt="" className={styles.imgRight} />
    </div>
  )
}
