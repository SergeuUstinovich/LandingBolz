import { ReactSVG } from 'react-svg'
import style from './HeaderAbout.module.css'
import { Link } from 'react-router-dom'

function HeaderAbout() {
    return (
        <div className={style.box}>
            <Link className={style.link} to={'/'}>
                <ReactSVG src={`assets/arrowBack.svg`} className={style.svg}/>
                <p className={style.descrBack}>На главную</p>
            </Link>
            <div className={style.boxAbout}>
                <ReactSVG src={`assets/aboutUsBg.svg`} className={style.svgAbout}/>
                <p className={style.descr}>О нас</p>
            </div>
            
        </div>
    )
}

export default HeaderAbout