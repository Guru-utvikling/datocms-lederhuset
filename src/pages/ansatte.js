import React from "react"
import Layout from "../components/layout"
import Paper from "@material-ui/core/Paper"
import Img from "gatsby"
import { Link } from "gatsby"

const Ansatte = ({ data }) => {
  return (
    <Layout>
      <h1 className='nyheter__title'>Ansatte</h1>
      <div className='ansatte__container'>
        {data.allDatoCmsAnsatte.edges.map(({ node: ansatte }) => {
          return (
            <div className='ansatte__content--wrapper'>
              <img src={ansatte.ansatteImage.fixed.src} />
              <h3>{ansatte.ansatteName}</h3>
              <p>{ansatte.ansatteDescription}</p>
              <p>
                E-post :
                <Link to={`mailto:${ansatte.ansatteEmail}`}>
                  {ansatte.ansatteEmail}
                </Link>
              </p>
              <p>
                Telefon:
                <Link to={`mailto:${ansatte.ansattePhone}`}>
                  {ansatte.ansattePhone}
                </Link>
              </p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Ansatte

export const query = graphql`
  query ansatteQuery {
    allDatoCmsAnsatte {
      edges {
        node {
          ansatteDescription
          ansatteName
          ansattePhone
          ansatteEmail
          ansatteImage {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`
