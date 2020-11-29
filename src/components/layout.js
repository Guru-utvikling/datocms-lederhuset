/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Logo from "../assets/lederhusetlogo.svg"
import "../styles/index.sass"
import Footer from "../components/Sections/Footer/footer"
import Menu from '../components/Sections/menu'

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={`container ${showMenu ? "is-open" : ""}`}>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <div className='container__navbar'>
            <div className='navbar'>
              <div className='navbar__logo'>
                <Link to='/'>
                  <img width={255} height={53} src={Logo}></img>
                </Link>
              </div>
              <div />
              <Link to="/account">Go to your account</Link>
              <Menu />
            </div>
          </div>
          <div className='container__body'>
            <div className='container__mobile-header'>
              <div className='mobile-header'>
                <div className='mobile-header__menu'>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setShowMenu(!showMenu)
                    }}
                  />
                </div>
                <div className='mobile-header__logo'>
                  <Link to='/'>
                    <img width={140} height={30} src={Logo}></img>
                  </Link>
                </div>
              </div>
            </div>
            {children}
            <Footer />
          </div>
        </div>
      )}
    />
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
