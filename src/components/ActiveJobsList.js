import React from "react"
import Masonry from "react-masonry-component"
import {Link} from 'gatsby'
const ActiveJobsList = (props) => {
  return (
    <Masonry className='showcase'>
      {Object.keys(props.activelist.data).map((item) => {
        return (
          <div key={props.activelist.data[item]} className='showcase__item'>
            <figure className='card'>
              <div>
                <img
                  width='100%'
                  height='auto'
                  src={props.activelist.data[item].logo}
                />
              </div>
              <figcaption className='card__caption'>
                <h1 className='card__title'>
                  {props.activelist.data[item].name}
                </h1>
                <div className='card__description'>
                  <p> <span className="small_bold">Start Date :</span> {props.activelist.data[item].startDate}</p>
                  <p> <span className="small_bold">Salary :</span> {props.activelist.data[item].salary}</p>
                  <p> <span className="small_bold">Ingress :</span> {props.activelist.data[item].ingress}</p>
                  <Link className="employess__CTABtn" to={props.activelist.data[item].applyUrl}>Søk på stillingen</Link>
                </div>
              </figcaption>
            </figure>
          </div>
        )
      })}
    </Masonry>
  )
}

export default ActiveJobsList
