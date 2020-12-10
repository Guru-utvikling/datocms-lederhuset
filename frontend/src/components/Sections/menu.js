import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <ul className='navbar__menu'>
      <li>
        <Link to='/om-oss'>Om Oss</Link>
      </li>
      <li>
        <Link to='/tjenester'>Tjenester</Link>
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
export default Menu

