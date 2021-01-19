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
              <p style={{ color:'$main',marginTop:"1rem"}}>
               <span style={{ color:'#A08629'}} >E-post: </span>
                <Link to={`mailto:${ansatte.ansatteEmail}`}>
                  {ansatte.ansatteEmail}
                </Link>
              </p>
              <p>
              <span style={{ color:'#A08629'}} >Telefon: </span>
                <Link to={`mailto:${ansatte.ansattePhone}`}>
                  {ansatte.ansattePhone}
                </Link>
              </p>
              <p>{ansatte.ansatteDescription}</p>

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
