import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <ul className='navbar__menu'>
      <li>
        <Link to='/om-oss'>Om Oss</Link>
      </li>
      <li onClick={handleClick}>
        <Link>
          Tjenester <ExpandMoreIcon style={{ color: "#A08629" }} />
        </Link>

        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link
              style={{ textDecoration: "none", color: "#A08629" }}
              to='/servicepages/rekruttering'
            >
              Rekruttering
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={{ textDecoration: "none", color: "#A08629" }}
              to='/servicepages/lederutvikling'
            >
              Lederutvikling
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={{ textDecoration: "none", color: "#A08629" }}
              to='/servicepages/mentoring'
            >
              Mentoring
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <Link
              style={{ textDecoration: "none", color: "#A08629" }}
              to='/servicepages/omstillingnedbemanning'
            >
              Omstilling/nedbemanning
            </Link>
          </MenuItem>
        </Menu>
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
