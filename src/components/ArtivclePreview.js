import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
export default function Header() {
  const data = useStaticQuery(graphql`
    query ArticlesPreview {
      allDatoCmsNyheter {
        edges {
          node {
            slug
            nyheterTitle
            nyheterExcerpt
            nyheterCoverimage {
            fluid {
              src
            }
          }
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.allDatoCmsNyheter.edges.map(({ node: nyheter }) => (
        <div>
          <img src={nyheter.nyheterCoverimage.fluid.src}/>
          <h2>{nyheter.nyheterTitle}</h2>
          <p>{nyheter.nyheterExcerpt}</p>
        </div>
      ))}
    </div>
  )
}
