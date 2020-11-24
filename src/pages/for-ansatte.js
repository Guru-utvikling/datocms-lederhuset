import React, {useEffect,useState} from 'react'
import Layout from '../components/layout'
import {getAllActiveJobs} from '../components/api/apiHandler'

const ForAnsatte = () => {
const [activeJobs, setActiveJobs ] = useState()
const init = () => {
  getAllActiveJobs().then((data) => {
      setActiveJobs(data)
    })
  }
useEffect(() => {
  init()
  return () => {
    
  }
}, [])
  return (
    <Layout>
      {console.log(activeJobs)}
    </Layout>
  )
}

export default ForAnsatte
