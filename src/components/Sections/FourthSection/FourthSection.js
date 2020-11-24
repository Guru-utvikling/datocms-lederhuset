import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
          <ul className='container__employess__List'>
            <h2 className='employess__title'>For employees</h2>
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
            <Link className='employess__CTABtn' to='/for-ansatte'>
              FOR ANSATTE
            </Link>
          </ul>
          <ul className='container__employess__List'>
            <h2 className='employess__title'>For companies</h2>
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
            <Link className='employess__CTABtn' to='/'>
              FOR SELSKAPER
            </Link>
          </ul>
        </div>
      )}
    />
  )
}
