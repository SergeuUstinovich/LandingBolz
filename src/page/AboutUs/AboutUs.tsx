import { Link } from 'react-router-dom'
import HeaderAbout from '../../components/HeaderAbout/HeaderAbout'
import HeroAbout from '../../components/HeroAbout/HeroAbout'
import SlideInfoList from '../../components/SlideInfoAbout/SlideInfoList'
import style from './AboutUs.module.css'

function AboutUs() {
  return (
    <div className={style.wrapper}>
      <HeaderAbout />
      <HeroAbout />
      <SlideInfoList />
      <div className={style.boximg}>
        <picture>
          <source
            srcSet="assets/aboutParthners320.webp"
            media="(max-width: 320px)"
          />
          <source
            srcSet="assets/aboutParthners768.webp"
            media="(max-width: 768px)"
          />
          <img src="assets/aboutParthners.webp" alt="Партнеры" />
        </picture>
      </div>
      <div className={style.boxTitle}>
        <Link className={style.title} to={'/about-service'}>
          <h1>Стать партнёром</h1>
        </Link>
      </div>
    </div>
  )
}

export default AboutUs
