import React from "react"

import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default function PostArchive({ data }) {

  return (
    <Layout>
      <h1 className='nyheter__title'>Nyheter</h1>
      <div className='archive'>
        {data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => (
          <article className='article'>
            <figure className='card'>
              <Link style={{background:`url(${nyheter.nyheterCoverimage.fluid.src})`}} to={`/nyheters/${nyheter.slug}`} className='card__image'></Link>
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
    </Layout>
  )
}

export const query = graphql`
  query nyheterQueryPage {
    allDatoCmsNyheter {
      edges {
        node {
          nyheterTitle
          slug
          nyheterExcerpt
          featuredPost
          nyheterCoverimage {
            fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`

/*    <Layout className={classes.root}>
      <div className="nyheter__wrapper">
        <GridList cellHeight={"auto"} spacing={1} className={classes.gridList}>
          {data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => (
            <GridListTile
              key={nyheter.id}
              cols={nyheter.featuredPost ? 2 : 1}
              //rows={nyheter.featuredPost ? 2 : 1}
            >
              <figure className='card'>
                <Link to={`/nyheters/${nyheter.slug}`} className='card__image'>
                  <img
                    alt={nyheter.title}
                    src={nyheter.nyheterCoverimage.fluid.src}
                  />
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
              </figure>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Layout> */
