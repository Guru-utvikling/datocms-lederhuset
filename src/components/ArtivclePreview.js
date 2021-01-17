import React from "react"
import { Link } from "gatsby"
import Masonry from "react-masonry-component"
import Image from 'gatsby-image'
const ArticlePreview = (props) => {
  return (
    <div className='container__articlePreview'>
      <h2 className='employess__title'>Se innleggene våre</h2>
      <Masonry  style={{width:"100%" ,marginTop:"3rem"}} className='showcase'>
        {props.data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => (
          <div key={nyheter.id} className='showcase__item'>
            <figure className='card'>
              <Link to={`/nyheters/${nyheter.slug}`} className='card__image'>
                <Image objectFit="cover" fluid={nyheter.nyheterCoverimage.fluid} src={nyheter.nyheterCoverimage.fluid} />
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

export default ArticlePreview
