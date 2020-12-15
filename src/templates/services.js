import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>{data.datoCmsServicePage.title}</h1>
    <p>{data.datoCmsServicePage.content}</p>
  </Layout>
)

export const query = graphql`
  query ServiceQuery($slug: String!) {
    datoCmsServicePage(slug: { eq: $slug }) {
      title
      content
    }
  }
`
