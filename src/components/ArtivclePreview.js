import React from "react"
import { Link } from "gatsby"

const ArticlePreview = (props) => {
  return (
    <>
      {props.data.allDatoCmsNyheter.edges.length <= 0 ? (
        ""
      ) : (
        <div className='postPreview__wrapper'>
          <div className='archive'>
            {props.data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => (
              <article className='article'>
                <figure className='card'>
                  <Link
                    style={{
                      background: `url(${nyheter.nyheterCoverimage.fluid.src})`,
                    }}
                    to={`/nyheters/${nyheter.slug}`}
                    className='card__image'
                  ></Link>
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
                </figure>
              </article>
            ))}
          </div>
          <Link className='employess__CTABtn' to='/nyheter'>
            Se alle innlegg
          </Link>
        </div>
      )}
    </>
  )
}

export default ArticlePreview

/*     */

/*      {props.data.allDatoCmsNyheter ? (
        <div className='postPreview__wrapper'>
          <div className='archive'>
            {props.data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => (
              <article className='article'>
                <figure className='card'>
                  <Link
                    style={{
                      background: `url(${nyheter.nyheterCoverimage.fluid.src})`,
                    }}
                    to={`/nyheters/${nyheter.slug}`}
                    className='card__image'
                  ></Link>
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
                </figure>
              </article>
            ))}
          </div>
          <Link className='employess__CTABtn' to='/nyheter'>
            Se alle innlegg
          </Link>
        </div>
      ) : (
        <div className='no-jobs-container'>
          <h1>Vi har for tiden ingen ledige stillinger.</h1>
        </div>
      )} 
      
      
      
      
          <>
      {props.data.allDatoCmsNyheter.edges.length <= 0 ? (
        ""
      ) : (
        <div className='postPreview__wrapper'>
          <div className='archive'>
            {props.data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => (
              <article className='article'>
                <figure className='card'>
                  <Link
                    style={{
                      background: `url(${nyheter.nyheterCoverimage.fluid.src})`,
                    }}
                    to={`/nyheters/${nyheter.slug}`}
                    className='card__image'
                  ></Link>
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
                </figure>
              </article>
            ))}
          </div>
          <Link className='employess__CTABtn' to='/nyheter'>
            Se alle innlegg
          </Link>
        </div>
      )}
    </>
    */
