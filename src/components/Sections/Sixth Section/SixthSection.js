import React from "react"
import { Link } from "gatsby"
const SixthSection = (props) => {
  return (
    <div className='container__question'>
      <div className='container__question--wrapper'>
        <img src='https://www.datocms-assets.com/37833/1606212086-head-icon.svg' />
        <div className='container__question--content'>
          <h2>Har du noen spørsmål?</h2>
          <p >
          Send en henvendelse, så tar vi kontakt med deg. E-post eller telefon  <a  href="tel:+4740021570"> +47 400 21 570</a>
          </p>
        </div>
      </div>

      <div className='container__question--form'>
        <form
          method='POST'
          data-netlify='true'
          action='/thank-you'
          name='Newsletter Signup'
        >
          <input type='hidden' name='form-name' value='Newsletter Signup' />
          <div className='question__form--wrapper'>
            <input
              type='email'
              name='E-post'
              id='e-post'
              placeholder='E-post'
              className='question__text--input'
            />
            <input className='question__submit--input' type='submit' value='' />
          </div>

          <label>
            <p>
              <a href='tel:+4740021570'>Telefon: +47 400 21 570</a>
            </p>
          </label>
        </form>
      </div>
    </div>
  )
}

SixthSection.propTypes = {}

export default SixthSection
