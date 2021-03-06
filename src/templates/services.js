import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';

export default ({ data }) => (
  <Layout>
    <div className='service_page__container'>
      <div className="image-wrapper">
        <img
          className='service_page__image'
          src={data.datoCmsServicePage.background.fluid.src}
        />
      </div>
      <div className='service_page__content--wraper'>
        <h1 className='service_page__title'>{data.datoCmsServicePage.title}</h1>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsServicePage.postcontentNode.childMarkdownRemark.html,
          }}
        />
        <p className='service_page__content'>
          {data.datoCmsServicePage.content}
        </p>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query ServiceQuery($slug: String!) {
    datoCmsServicePage(slug: { eq: $slug }) {
      title
      background {
        fluid {
          src
        }
      }
      postcontentNode {
      childMarkdownRemark {
        html
        }
      }
    }
  }
`
