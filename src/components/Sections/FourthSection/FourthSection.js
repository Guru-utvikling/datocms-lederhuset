import React from "react"
import { StaticQuery, graphql } from "gatsby"
export default function FourthSection() {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allDatoCmsCompaniesListSection {
            edges {
              node {
                id
                content
              }
            }
          }
          allDatoCmsEmployeesListSection {
            edges {
              node {
                content
                id
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className='container__employess'>
          <ul className='container__employess--list'>
            {data.allDatoCmsEmployeesListSection.edges.map(
              ({ node: employees_list_section }) => (
                <li
                  key={employees_list_section.id}
                  className='container__employessItem'
                >
                  <p className='servicebox__content--para'>
                    {employees_list_section.content}
                  </p>
                </li>
              )
            )}
          </ul>
          <ul className='container__employess__List'>

            {data.allDatoCmsCompaniesListSection.edges.map(
              ({ node: employees_list_section }) => (
                <li
                  key={employees_list_section.id}
                  className='container__employessItem'
                >
                  <p className='servicebox__content--para'>
                    {employees_list_section.content}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    />
  )
}
