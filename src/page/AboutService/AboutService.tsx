import { FooterService } from '../../components/aboutService/footerService'
import { FormService } from '../../components/aboutService/formService'
import { HeaderAboutService } from '../../components/aboutService/headerAboutService'
import { HeroAboutService } from '../../components/aboutService/heroAboutService'
import { Model } from '../../components/aboutService/model'
import { WhatDo } from '../../components/aboutService/whatDo'
import { WhatGive } from '../../components/aboutService/whatGive'
import { WhatSuccess } from '../../components/aboutService/whatSuccess'

function AboutService() {
  return (
    <div style={{ backgroundColor: '#05111F' }}>
      <HeaderAboutService />
      <main>
        <HeroAboutService />
        <WhatGive />
        <WhatDo />
        <WhatSuccess />
        <Model />
        <FormService />
      </main>
      <FooterService />
    </div>
  )
}

export default AboutService
