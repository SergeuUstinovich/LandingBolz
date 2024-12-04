import style from './model.module.css'

export const Model = () => {
  return (
    <section id="model" className={style.model__section}>
      <div className={style.model__container}>
        <h2 className={style.model__title}>Интеграционная модель</h2>
        <img src={'/assets/aboutservice/model.png'} alt="модель" />
      </div>
    </section>
  )
}
