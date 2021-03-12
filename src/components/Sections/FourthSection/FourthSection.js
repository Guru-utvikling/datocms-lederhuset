import React from "react"
import { Link } from "gatsby"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import CheckMarkIcon from "../../../assets/Icon-awesome-check-circle.svg"
export default function FourthSection() {
  return (
    <div className='container__employess'>
      <div className='container__list--wrapper'>
        <h2 className='employess__title'>For kunder</h2>
        <ul className='container__employess__List'>
          <Link to={"/servicepages/rekruttering"} className='listItem__link'>
            <ListItem button>
              <ListItemIcon>
                <img src={CheckMarkIcon} />
              </ListItemIcon>
              <ListItemText primary='Rekruttering' />
            </ListItem>
          </Link>
          <Link to={"/servicepages/lederutvikling"} className='listItem__link'>
            <ListItem button>
              <ListItemIcon>
                <img src={CheckMarkIcon} />
              </ListItemIcon>
              <ListItemText primary='Lederutvikling' />
            </ListItem>
          </Link>
          <Link to={"/servicepages/mentoring"} className='listItem__link'>
            <ListItem button>
              <ListItemIcon>
                <img src={CheckMarkIcon} />
              </ListItemIcon>
              <ListItemText primary='Mentoring' />
            </ListItem>
          </Link>
          <Link
            to={"/servicepages/omstilling-nedbemanning"}
            className='listItem__link'
          >
            <ListItem button>
              <ListItemIcon>
                <img src={CheckMarkIcon} />
              </ListItemIcon>
              <ListItemText primary='Omstilling nedbemanning' />
            </ListItem>
          </Link>
        </ul>
        <Link className='employess__CTABtn' to='/kontakt-oss'>
          KONTAKT OSS
        </Link>
      </div>
      <div className='container__list--wrapper'>
        <h2 className='employess__title'>For kandidater</h2>
        <ul className='container__employess__List'>
          <Link to={"/servicepages/rekruttering"} className='listItem__link'>
            <ListItem button>
              <ListItemIcon>
                <img src={CheckMarkIcon} />
              </ListItemIcon>
              <ListItemText primary='Rekruttering' />
            </ListItem>
          </Link>
          <Link to={"/servicepages/lederutvikling"} className='listItem__link'>
            <ListItem button>
              <ListItemIcon>
                <img src={CheckMarkIcon} />
              </ListItemIcon>
              <ListItemText primary='Lederutvikling' />
            </ListItem>
          </Link>
          <a
            href={" https://lederhuset.recman.no/register.php "}
            className='listItem__link'
          >
            <ListItem button>
              <ListItemIcon>
                <img src={CheckMarkIcon} />
              </ListItemIcon>
              <ListItemText primary='Registrer din CV' />
            </ListItem>
          </a>
        </ul>
        <Link className='employess__CTABtn' to='/kontakt-oss'>
          KONTAKT OSS
        </Link>
      </div>
    </div>
  )
}
