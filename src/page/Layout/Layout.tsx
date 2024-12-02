
import { EasyUse } from '../../components/page/main/easy-use'
import { EcoSystem } from '../../components/page/main/eco-system'
import { Feature } from '../../components/page/main/feature'
import { Footer } from '../../components/page/main/footer'
import { Form } from '../../components/page/main/form'
import { Header } from '../../components/page/main/header'
import { HowToGet } from '../../components/page/main/how-to-get'
import { OurApproach } from '../../components/page/main/our-approach'
import { Phones } from '../../components/page/main/phones'
import { Soon } from '../../components/page/main/soon'
import { WhereAreWe } from '../../components/page/main/where-are-we'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Phones />
      <WhereAreWe />
      <EcoSystem />
      <EasyUse />
      <OurApproach />
      <HowToGet />
      <Feature />
      <Soon />
      <Form />
      <Footer />
    </div>
  )
}

export default Layout
