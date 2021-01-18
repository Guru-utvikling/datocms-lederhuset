import React from "react"
import Layout from "../components/layout"

const OmOss = (props) => {
  return (
    <Layout>
      <div className='omOss__container'>
        <div className='omOss__content--wraper'>
          <h1 className='omOss__title'>Om oss</h1>
          <p className='omOss__content'>
            Lederhuset er et lokalt  rådgivningsselskap innen rekruttering av
            ledere og nøkkelpersoner, nedbemanning og outplacement og generelle
            rådgivningstjenester innen ledelse.
          </p>
          <p style={{ fontWeight:'bold'}} className='omOss__content'>Lederhuset tilbyr følgende rådgivning innen :</p>
          <ul className="omOss__list">
            <li>Rekruttering av ledere og nøkkelpersonell</li>
            <li>Rekruttering av styremedlemmer</li>
            <li>Lederutvikling</li>
            <li>Mentoring</li>
            <li>Nedbemanning og outplacement</li>
          </ul>
        </div>

        <img
          className='omOss__image'
          src='https://www.datocms-assets.com/37833/1607694328-recurring-bg.png'
        />
      </div>
    </Layout>
  )
}

export default OmOss
