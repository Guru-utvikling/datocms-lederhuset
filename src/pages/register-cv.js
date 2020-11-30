import React, { useState } from "react"
import Layout from "../components/layout"
import Form from '../components/form'

const RegisterCV = () => {
  const [error, setError] = useState()
  const [data, setData] = useState()
  const submmitYourCV = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: process.env.GATSBY_API_KEY,
        scope: "candidate",
        operation: "insert",
        data: {
          corporationId: "1016",
          firstName: "Damian ",
          lastName: "Kursa",
        },
      }),
    }
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = "https://api.recman.no/v2/post/"

    fetch(proxyurl + url, requestOptions)
      .then(async (response) => {
        const data = await response.json()
        console.log(data)
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status
          return Promise.reject(error)
        }

        setData({ postId: data.id })
      })
      .catch((error) => {
        setError({ errorMessage: error.toString() })
        console.error("There was an error!", error)
      })
  }
  return (
    <Layout>
      <div className='container__registerCV'>

        <Form/>
        <button onClick={submmitYourCV}>Register</button>
      </div>
    </Layout>
  )
}

export default RegisterCV
