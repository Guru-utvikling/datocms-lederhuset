import React from "react"
import { StaticQuery, graphql,Link } from "gatsby"
import Masonry from "react-masonry-component"


export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query nyhetersArticlePreview {
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
      `}
      render={(data) => (
        <div className='container__articlePreview'>
          <h2 className='employess__title'>Se innleggene våre</h2>
          <Masonry style={{ width: "1200px" }} className='showcase'>
            {data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => (
              <div key={nyheter.id} className='showcase__item'>
                <figure className='card'>
                  <Link
                    to={`/nyheters/${nyheter.slug}`}
                    className='card__image'
                  >
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
                    <Link
                      className='lesmer-link'
                      to={`/nyheters/${nyheter.slug}`}
                    >
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
      )}
    />
  )
}
