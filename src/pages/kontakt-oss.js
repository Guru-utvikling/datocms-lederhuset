import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import PlaceIcon from "@material-ui/icons/Place"
import MailIcon from "@material-ui/icons/Mail"
import PhoneIcon from "@material-ui/icons/Phone"
import Container from "@material-ui/core/Container"
const KontaktOss = () => {
  return (
    <Layout>
      <div className='container__kontakt-oss'>
        <div className='container__kontakt-oss--content'>
          <h1 className='kontakt-oss__title'>Kontakt Oss</h1>
          <ul className='kontakt-oss__list'>
            <li className='kontakt-oss__list--item'>
              <PlaceIcon style={{ color: "#A08629", marginRight: "1rem" }} />
              Halfdan Kjerulfsgate 4 5017 Bergen
            </li>
            <li className='kontakt-oss__list__item'>
              <PhoneIcon style={{ color: "#A08629", marginRight: "1rem" }} />
              <Link to='tel:+4740021570'>(+47) 400 21 570</Link>
            </li>
            <li className='kontakt-oss__list--item'>
              <MailIcon style={{ color: "#A08629", marginRight: "1rem" }} />
              <Link to='mailto:bjarne@lederhuset.com'>
                bjarne@lederhuset.com{" "}
              </Link>
            </li>
            <li className='kontakt-oss__list--item'></li>
          </ul>
        </div>
        <Container>
          <div className='container__kontakt-oss--form'>
            <form
              className='kontakt-oss--form'
              method='POST'
              data-netlify='true'
              action='/thank-you'
              name='Kontakt oss Form'
            >
              <input type='hidden' name='form-name' value='Kontakt oss Form' />
              <label>
                <input
                  required
                  placeholder='Navn*'
                  type='text'
                  name='name'
                  id='name'
                />
              </label>
              <label>
                <input
                  placeholder='Telefon*'
                  type='tel'
                  id='phone'
                  name='phone'
                  required
                />
              </label>
              <label>
                <input
                  placeholder='E-post*'
                  type='email'
                  name='email'
                  id='email'
                  required
                />
              </label>
              <label>
                <input
                  placeholder='Firma (Company)'
                  type='text'
                  name='Firma'
                  id='firma'
                />
              </label>
              <label>
                <textarea
                  placeholder='Melding'
                  name='message'
                  id='message'
                  required
                  rows='5'
                />
              </label>
              <button className='submit-btn-form' type='submit'>
                Kontakt oss
              </button>
            </form>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default KontaktOss
