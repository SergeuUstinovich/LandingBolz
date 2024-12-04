import style from './heroAboutService.module.css'

export const HeroAboutService = () => {
  return (
    <section id="hero" className={style.hero__section}>
      <div className={style.hero__container}>
        <h1 className={style.hero__title}>
          <img
            width={405}
            height={82}
            src="/assets/aboutservice/bolz.png"
            alt="bolz"
          />
          инструменты для преобразования бизнеса в&nbsp;успех
        </h1>
      </div>
    </section>
  )
}
