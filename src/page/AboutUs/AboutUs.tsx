import HeaderAbout from "../../components/HeaderAbout/HeaderAbout"
import HeroAbout from "../../components/HeroAbout/HeroAbout"
import style from './AboutUs.module.css'

function AboutUs() {
    return (
        <div className={style.wrapper}>
            <HeaderAbout />
            <HeroAbout />
        </div>
    )
}

export default AboutUs