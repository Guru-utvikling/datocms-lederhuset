import React from "react"
import { Link, graphql } from "gatsby"
import Masonry from "react-masonry-component"
import Img from "gatsby-image"
import Layout from "../components/layout"
import FirstSection from "../components/Sections/FirstSection/FirstSection"
const IndexPage = ({ data }) => (
  <Layout>
    <main className="container__main">
      <FirstSection />
    </main>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
