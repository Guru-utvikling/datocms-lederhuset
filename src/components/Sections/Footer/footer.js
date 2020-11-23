import React from "react"
import Logo from "../../../assets/lederhusetlogo.svg"
import Menu from '../menu'
const Footer = () => {
  return (
    <footer className='container__footer'>
      <img src={Logo} />
      <div className='container__footer__list'>
        <div className='container__footer--item'>
          <h2 className='footer_title'>Om oss</h2>
          <p className='footer_para'>
            Kundens suksess driver vår egen suksess. Gjennom vår innsats for å
            forenkle hverdagen for våre kunder bidrar vi til å gjøre deres
            virksomhet mer effektiv. Dette oppnår vi ved å være innovativ og
            lydhør. Og ser alltid etter forbedringer og nye løsninger, innenfor
            våre satsningsområder.
          </p>
        </div>
        <div className='container__footer--item'>
          <h2 className='footer_title'>Kontakt oss</h2>
            <ul>
              <li>Halfdan Kjerulfsgate 4  5017 Bergen</li>
              <li>(+47) 567 875 123</li>
              <li>post@epost.no</li>
            </ul>
        </div>
        <div className='container__footer--item'>
          <h2 className='footer_title'>Meny</h2>
          <Menu />
        </div>
        <div className='container__footer--item'>
          <h2 className='footer_title'>Follow us</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
