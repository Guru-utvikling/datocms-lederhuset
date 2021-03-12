/*import React from "react"
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

*/
/*

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
      <Link>Om oss </Link>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            className='second-menu--link'
            to='/om-oss'
          >
            Om oss
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            className='second-menu--link'
            to='/ansatte'
          >
            Ansatte
          </Link>
        </MenuItem>
      </Menu>
    </li>
  )
} */

import { Link } from "gatsby"
import MenuItem from "@material-ui/core/MenuItem"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    color: "#A08629",
    marginLeft:"20px"
  },
  dropdown: {
    position: "absolute",
    minWidth: "250px",
    color: "#A08629",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function ClickAway() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <li onClick={handleClick}>Tjenester</li>
        {open ? (
          <div className={classes.dropdown}>
            <MenuItem>
              <Link
                style={{ textDecoration: "none", color: "#A08629" }}
                className='second-menu--link'
                to='/servicepages/rekruttering'
              >
                Rekruttering
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                style={{ textDecoration: "none", color: "#A08629" }}
                className='second-menu--link'
                to='/servicepages/lederutvikling'
              >
                Lederutvikling
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                style={{ textDecoration: "none", color: "#A08629" }}
                className='second-menu--link'
                to='/servicepages/mentoring'
              >
                Mentoring
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                style={{ textDecoration: "none", color: "#A08629" }}
                className='second-menu--link'
                to='/servicepages/omstilling-nedbemanning'
              >
                Omstilling/nedbemanning
              </Link>
            </MenuItem>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  )
}
