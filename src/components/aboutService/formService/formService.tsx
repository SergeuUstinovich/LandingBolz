import { Button } from '../../button'
import style from './formService.module.css'

export const FormService = () => {
  return (
    <section className={style.form__section}>
      <div className="container">
        <div className={style.form__block}>
          <h2 className={style.form__title}>
            Инвестируй и зарабатывай вместе с нами
          </h2>
          <form>
            <input
              className={style.form__input}
              placeholder="Email"
              type="email"
            />
            <div className={style.form__submit}>
              <Button>Отправить</Button>
              <p>
                Отправляя свои данные, вы даете согласие на условия
                <a href="#">обработки персональных данных</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
