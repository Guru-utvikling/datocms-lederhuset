import React from "react"
import Masonry from "react-masonry-component"
const ActiveJobsList = (props) => {
  return (
    <Masonry className='showcase'>
      {Object.keys(props.activelist.data).map((item) => {
        return (
          <div key={props.activelist.data[item]} className='showcase__item'>
            <figure className='card'>
              <figcaption className='card__caption'>
                <h1 className='card__title'>
                  {props.activelist.data[item].name}
                </h1>
                <div className='card__description'>
                  <p> Start Date : {props.activelist.data[item].startDate}</p>
                  <p> Salary : {props.activelist.data[item].salary}</p>
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
/*
        




*/
