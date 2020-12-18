import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
export default function SecondSection() {
  
  const data = useStaticQuery(graphql`
    query ServiceBox {
      allDatoCmsServiceBox {
        edges {
          node {
            description
            id
            title
            slug
            icon {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <div className='container__servicebox--section'>
    {data.allDatoCmsServiceBox.edges.map(({ node: service_box }) => (
      <div key={service_box.id} className='container__servicebox'>
        <div className='container__servicebox--icon'>
          <img
            className='servicebox__icon'
            src={service_box.icon.url}
          ></img>
        </div>
        <div className='container__servicebox--content'>
          <h1 className='servicebox__content--title'>
            {service_box.title}
          </h1>
          <p className='servicebox__content--para'>
            {service_box.description}
          </p>
          <Link  className="servicebox__content--link" to={`servicepages/${service_box.slug}`}>Les mer</Link>
        </div>
      </div>
    ))}
  </div>
  )
}
