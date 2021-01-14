import React from "react"
import Masonry from "react-masonry-component"
import { useStaticQuery, graphql, Link } from "gatsby"
export default function Header() {
  const data = useStaticQuery(graphql`
    query ArticlesPreview {
      allDatoCmsNyheter {
        edges {
          node {
            slug
            nyheterTitle
            nyheterExcerpt
            nyheterCoverimage {
              sizes(maxWidth: 300) {
                src
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className='container__articlePreview'>
      <h2 className="employess__title">Se innleggene våre</h2>
      <Masonry style={{ width: "1200px" }} className='showcase'>
        {data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => (
          <div key={nyheter.id} className='showcase__item'>
            <figure className='card'>
              <Link to={`/nyheters/${nyheter.slug}`} className='card__image'>
                <img src={nyheter.nyheterCoverimage.sizes.src} />
              </Link>
              <figcaption className='card__caption'>
                <h6 className='card__title'>
                  <Link to={`/nyheters/${nyheter.slug}`}>
                    {nyheter.nyheterTitle}
                  </Link>
                </h6>
                <div className='card__description'>
                  <p>{nyheter.nyheterExcerpt}</p>
                </div>
              </figcaption>
              <figcaption className='card__caption-lesmer'>
                <Link className='lesmer-link' to={`/nyheters/${nyheter.slug}`}>
                  Les mer>
                </Link>
              </figcaption>
            </figure>
          </div>
        ))}
      </Masonry>
      <Link className='employess__CTABtn' to='/nyheter'>
        Se alle innleggene
      </Link>
    </div>
  )
}
