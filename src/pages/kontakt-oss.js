import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
const KontaktOss = () => {
  return (
    <Layout>
      <div className='container__kontakt-oss'>
        <div className='container__kontakt-oss--content'>
          <h1 className='kontakt-oss__title'>Kontakt Oss</h1>
          <p className='kontakt-oss__para'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>MAPA</p>
          <ul className='kontakt-oss__list'>
            <li className='kontakt-oss__list--item'>
              Halfdan Kjerulfsgate 4 5017 Bergen
            </li>
            <li className='kontakt-oss__list__item'>
              <Link to='tel:+47567875123'>(+47) 567 875 123</Link>
            </li>
            <li className='kontakt-oss__list--item'>
              <Link to='mailto:post@epost.no'>post@epost.no</Link>
            </li>
            <li className='kontakt-oss__list--item'></li>
          </ul>
        </div>
        <div className='container__kontakt-oss--form'>
          <form>
            <label>1</label>
            <input/>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default KontaktOss
