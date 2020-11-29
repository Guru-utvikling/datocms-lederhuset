import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { getAllActiveJobs } from "../../backend/controllers/apiHandler"

const ForAnsatte = () => {
  const [activeJobs, setActiveJobs] = useState()
  const init = () => {
    getAllActiveJobs().then((data) => {
      setActiveJobs(data)
      

    })
  }

  useEffect(() => {
    init()
    return () => {}
  }, [])

  const showActiveJobs = () => {
    if (activeJobs) {
      Object.keys(activeJobs.data).forEach((e) => {
        return(
          <div className="" key={activeJobs.data.jobId}>
            <h1>{activeJobs.data.name}</h1>
          </div>
        )
      })
    }
  }

  return <Layout>{}</Layout>
}

export default ForAnsatte

/*      {activeJobs.data
        ? Object.keys(activeJobs.data).forEach((item) => {
            return <div key={item.name}>{item.name}</div>
          })
        : "Loading..."}  );*/
