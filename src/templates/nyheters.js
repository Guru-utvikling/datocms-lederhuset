import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsNyheter.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsNyheter.nyheterTitle}</h1>
        <p className="sheet__lead">{data.datoCmsNyheter.nyheterExcerpt}</p>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsNyheter.nyheterContentNode.childMarkdownRemark.html,
          }}
        />
        <div className="sheet__gallery">
          <Img fluid={data.datoCmsNyheter.nyheterCoverimage.fluid} />
        </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query NyheterQuery($slug: String!) {
    datoCmsNyheter(slug: { eq: $slug }) {
      nyheterTitle
      nyheterExcerpt
      nyheterGallery {
          fluid {
            src
          }
        }
      nyheterContentNode {
        childMarkdownRemark {
            html
          }
        }
        nyheterCoverimage {
          fluid {
            src
          }
        }
    }
  }
`
