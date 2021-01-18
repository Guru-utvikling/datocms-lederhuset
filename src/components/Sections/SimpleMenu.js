import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <li onClick={handleClick}>
      <Link>Om oss<ExpandMoreIcon width={16} height={16} style={{ color: "#A08629" }} /></Link>
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
            className='second-menu--link'
            to='/om-oss'
          >
            Om oss
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            style={{ textDecoration: "none", color: "#A08629" }}
            className='second-menu--link'
            to='/ansatte'
          >
            Ansatte
          </Link>
        </MenuItem>
      </Menu>
      
    </li>
  )
}
