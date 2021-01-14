import React from "react"
import { Link } from "gatsby"
const SixthSection = (props) => {
  return (
    <div className='container__question'>
      <div className='container__question--wrapper'>
        <img src='https://www.datocms-assets.com/37833/1606212086-head-icon.svg' />
        <div className='container__question--content'>
          <h2>Do you have questions?</h2>
          <p>
            La oss nå om problemet ditt, og en profesjonell vil kontakte deg.
          </p>
        </div>
      </div>

      <div className='container__question--form'>
      <form
            method="POST" 
            data-netlify="true"
            action="/thank-you" 
            name="Newsletter Signup"
          >
          <input type="hidden" name="form-name" value="Newsletter Signup" />
          <div className='question__form--wrapper'>
            <input placeholder='E-post' className='question__text--input' />
            <input className='question__submit--input' type='submit' value='' />
          </div>

          <label>
            <p>
              <a href='tel:+57 567 894 456'>OR CALL US (+57) 567 894 456</a>
            </p>
          </label>
        </form>
      </div>
    </div>
  )
}

SixthSection.propTypes = {}

export default SixthSection
