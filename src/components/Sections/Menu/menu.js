import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Fade from "@material-ui/core/Fade"
import SimpleMenu from "./SimpleMenu"
import SecondMenu from "./SecondMenu"
const Navigation = () => {
  return (
    <ul className='navbar__menu'>
      <li>
      <SimpleMenu />
      <ExpandMoreIcon style={{color:"#A08629"}}/>
      </li>

      <li style={{color:"#A08629"}} >
        <SecondMenu />
        <ExpandMoreIcon style={{color:"#A08629"}}/>
      </li>
      <li>
        <Link to='/nyheter'>Nyheter</Link>
      </li>
      <li>
        <Link to='/ledige-stillinger'>Ledige stillinger</Link>
      </li>
      <li>
        <Link className='navbar__konakt-btn' to='/kontakt-oss'>
          Kontakt oss
        </Link>
      </li>
    </ul>
  )
}
export default Navigation
