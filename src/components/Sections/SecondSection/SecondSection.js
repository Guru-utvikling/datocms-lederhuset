import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function SecondSection(props) {
  return (
    <div className='container__servicebox--section'>
      {props.data.allDatoCmsServiceBox.edges.map(({node: service_box}) => (
        <div key={service_box.id} className={ 'container__servicebox', 'container__servicebox-'+ `${service_box.id}`}>
          <div className="servicebox__image--wrapper">
            <img className='servicebox__icon' src={service_box.icon.url}></img>
          </div>

          <div className='container__servicebox--content'>
            <h1 className='servicebox__content--title'>{service_box.title}</h1>
            <p className='servicebox__content--para'>{service_box.description}</p>
            <Link
              className='servicebox__content--link'
              to={`servicepages/${service_box.slug}`}
            >
              Les mer
            </Link>
          </div>
        </div>
      ))}
    </div>
    
  )
}




/*    <div className='container__servicebox--section'>
      {data.map((item) => (
        <div key={item.id} className='container__servicebox'>
          <div className="servicebox__image--wrapper">
            <img className='servicebox__icon' src={item.icon}></img>
          </div>

          <div className='container__servicebox--content'>
            <h1 className='servicebox__content--title'>{item.title}</h1>
            <p className='servicebox__content--para'>{item.description}</p>
            <Link
              className='servicebox__content--link'
              to={`servicepages/${item.slug}`}
            >
              Les mer
            </Link>
          </div>
        </div>
      ))}
    </div> */
