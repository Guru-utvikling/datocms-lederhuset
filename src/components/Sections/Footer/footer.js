import React from "react"
import Logo from "../../../assets/lederhusetlogo.svg"
import FooterMenu from "../../Sections/footer-menu"
import { Link } from "gatsby"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import PhoneIcon from "@material-ui/icons/Phone"
import PlaceIcon from "@material-ui/icons/Place"
import EmailIcon from "@material-ui/icons/Email"
const Footer = () => {
  return (
    <footer className='container__footer'>
      <img src={Logo} />
      <div className='container__footer__list'>
        <div className='container__footer--item'>
          <h2 className='footer_title'>Om oss</h2>
          <p className='footer_para'>
            Lederhuset er et mindre rådgivningsselskap innen rekruttering av
            ledere og nøkkelpersoner , nedbemanning og outplacement og generelle
            rådgivningstjenester inne ledelse.
          </p>
        </div>
        <div className='container__footer--item'>
          <h2 className='footer_title'>Kontakt oss</h2>
          <ul className='footer__contact--list'>
            <li>
              <span>
                <PhoneIcon fontSize='large' />
              </span>
              Halfdan Kjerulfsgate 4 5017 Bergen
            </li>
            <li>
              {" "}
              <span>
                <PlaceIcon />
              </span>
              (+47) 567 875 123
            </li>
            <li>
              {" "}
              <span>
                <EmailIcon />
              </span>
              post@epost.no
            </li>
          </ul>
        </div>
        <div className='container__footer--item'>
          <h2 className='footer_title'>Meny</h2>
          <FooterMenu />
        </div>
        <div className='container__footer--item'>
          <h2 className='footer_title'>Follow us</h2>
          <Link to='facebook.com'>
            <FacebookIcon color='primary' fontSize='large' />
          </Link>
          <Link to='linkedin.com'>
            <LinkedInIcon color='primary' fontSize='large' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
