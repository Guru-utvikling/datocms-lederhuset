import React from "react"
import Logo from "../../../assets/lederhusetlogo.svg"
import FooterMenu from "../../Sections/footer-menu"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import PhoneIcon from "@material-ui/icons/Phone"
import PlaceIcon from "@material-ui/icons/Place"
import EmailIcon from "@material-ui/icons/Email"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
const Footer = () => {
  return (
    <footer className='container__footer'>
      <div className='footer__item--wrapper'>
        <h2 className='footer_title'>Om oss</h2>
        <p className='footer_para'>
          Lederhuset er et mindre rådgivningsselskap innen rekruttering av
          ledere og nøkkelpersoner , nedbemanning og outplacement og generelle
          rådgivningstjenester inne ledelse.
        </p>
      </div>
      <div className='footer__item--wrapper'>
        <h2 className='footer_title'>Kontakt oss</h2>
        <ul className='footer__contact--list'>
          <li className='footer__contact--list--item'>
            <PlaceIcon fontSize='large' />
            <p>Halfdan Kjerulfsgate 4</p>
            <p> 5017 Bergen</p>
          </li>
          <li>
            <PhoneIcon fontSize='large' />
            <p>(+47) 567 875 123</p>
          </li>
          <li>
            <EmailIcon fontSize='large' />
            <p>post@epost.no</p>
          </li>
        </ul>
      </div>
      <div className='footer__item--wrapper'>
        <h2 className='footer_title'>Meny</h2>
        <FooterMenu />
      </div>
      <div className='footer__item--wrapper'>
        <h2 className='footer_title'>Follow us</h2>
        <Link to='facebook.com'>
          <FacebookIcon color='primary' fontSize='large' />
        </Link>
        <Link to='linkedin.com'>
          <LinkedInIcon color='primary' fontSize='large' />
        </Link>
      </div>
    </footer>
  )
}

export default Footer

/*<div className='container__footer__list'>
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
<img src={Logo} />
 */
