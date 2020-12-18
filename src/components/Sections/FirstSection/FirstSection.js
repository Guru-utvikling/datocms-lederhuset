import React from "react"
import { Link } from "gatsby"
const FirstSection = () => {
  return (
    <div className='container__section1'>
      <div className='container__header--left'>
        <h1 className='header__title'>
          Lederhuset skal være en ressurs for deg og din bedrift
        </h1>
        <p className='header__content'>
          Det viktigste vi har i alle bedrifter er de ansatte. For at ansatte
          skal bidra og skape best mulig resultater er vi avhengig av å ha best
          mulig ledere.
        </p>
        <p className='header__content'>
          Lederhuset bistår deg i å finne de best egnete lederne og
          nøkkelpersonell til din bedrift.
        </p>
        <p className='header__content'>Og vi hjelper deg å utvikle både nye og eksisterende ledere</p>
      </div>
      <div className='container__header--right'></div>
    </div>
  )
}

export default FirstSection
