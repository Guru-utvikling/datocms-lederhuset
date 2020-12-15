import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div className='service_page__container'>
      <img className='service_page__image' src={data.datoCmsServicePage.background.fluid.src} />
      <div className='service_page__content--wraper'>
        <h1 className='service_page__title'>{data.datoCmsServicePage.title}</h1>
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
      content
      background {
        fluid {
          src
        }
      }
    }
  }
`
