import React from "react"
import { Link, graphql } from "gatsby"
import Masonry from "react-masonry-component"
import Img from "gatsby-image"
import Layout from "../components/layout"

const NyheterPage = ({ data }) => (
  <Layout>
    <h1 className='nyheter__title'>Nyheter</h1>
    <Masonry className='showcase'>
      {data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => (
        <div key={nyheter.id} className='showcase__item'>
          <figure className='card'>
            <Link to={`/nyheters/${nyheter.slug}`} className='card__image'>
              <img src={nyheter.nyheterCoverimage.fluid.src} />
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
        </div>
      ))}
    </Masonry>
  </Layout>
)

export default NyheterPage

export const query = graphql`
  query nyheterQueryPage {
    allDatoCmsNyheter {
      edges {
        node {
          nyheterTitle
          slug
          nyheterExcerpt
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