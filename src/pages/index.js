import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import FirstSection from "../components/Sections/FirstSection/FirstSection"
import SecondSection from "../components/Sections/SecondSection/SecondSection"
import ThirdSection from "../components/Sections/Third Section/ThirdSection"
import FourthSection from "../components/Sections/FourthSection/FourthSection"
import FifthSection from "../components/Sections/Fifth Section/FifthSection"
import SixthSection from "../components/Sections/Sixth Section/SixthSection"
import ArticlePreview from "../components/ArtivclePreview"
const IndexPage = ({ data }) => (
  <Layout>
    <main className='container__main'>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection /> 
      <ArticlePreview/>
    </main>
  </Layout>
)

export default IndexPage


