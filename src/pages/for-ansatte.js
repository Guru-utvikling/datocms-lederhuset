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
      Object.keys(activeJobs.data).map((item) => {
        return (
          <div className="container__job" key={activeJobs.data[item].jobId}>
            {activeJobs.data[item].candidateId}
          </div>
        )
      })
    } else {
      return <h1> Error please try later</h1>
    }
  }

  return <Layout>{showActiveJobs}</Layout>
}
/*      {activeJobs.data
        ? Object.keys(activeJobs.data).forEach((item) => {
            return <div key={item.name}>{item.name}</div>
          })
        : "Loading..."}  );*/
export default ForAnsatte
