import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ActiveJobList from "../components/ActiveJobsList"
const LedigeStillinger = () => {
  const [activeJobs, setActiveJobs] = useState()
  const [dataIsLoading, setDataIsLoading] = useState(true)

  const getAllActiveJobs = (req, res) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = `https://api.recman.no/v2/get/?key=${process.env.GATSBY_API_KEY}&scope=job&fields=name,startDate,endDate,salary`

    return fetch(proxyurl + url, {
      method: "GET",
    })
      .then((res) => {
        return res.json()
      })
      .catch((err) => console.log(err))
  }

  const init = () => {
    getAllActiveJobs().then((data) => {
      if (dataIsLoading) {
        setActiveJobs(data)
        setDataIsLoading(false)
      }
    })
  }


  useEffect(() => {
    init()
    return () => {}
  }, [])

  return (
    <Layout>
      <div>
      {!dataIsLoading ? <ActiveJobList activelist={activeJobs}/> : <div className="loading-div"><h1>Loading...</h1></div>}
      </div>

    </Layout>
  )
}

export default LedigeStillinger
