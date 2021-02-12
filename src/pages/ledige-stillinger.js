import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ActiveJobList from "../components/ActiveJobsList"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Link } from "gatsby"
import axios from "axios"
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}))

const LedigeStillinger = () => {
  const [activeJobs, setActiveJobs] = useState()
  const [dataIsLoading, setDataIsLoading] = useState(true)
  const classes = useStyles()

  const getDataFromServer = async () => {
    const response = await axios.get("https://lederhuset-1.herokuapp.com/data",{
      headers:{
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    const data = await response
    return data
}

  const init = () => {
    getDataFromServer().then((data) => {
      if (dataIsLoading) {
        setActiveJobs(data)
        setDataIsLoading(false)
        console.log(data)
      }
    })
  }

  useEffect(() => {
    init()
    return () => {}
  }, [])

  return (
    <Layout>
      {!dataIsLoading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className='nyheter__title'>Ledige stillinger</h1>

          <div className='container__ledige-stillinger'>
            {/*<div className='ledige-filters__wrapper'>
              <div className='container__ledige-filters'>
                <Typography component='h3' variant='h5'>
                  Filters
                </Typography>
                  <Link to='/ledige-stillinger'>
                    <Typography component='p' variant='p'>
                      Alle
                    </Typography>
                  </Link>
              </div>
            </div> */}
            <div className='container__ledige-list'>
              <ActiveJobList activelist={activeJobs} />
            </div>
          </div>
          <Link to='#' className='ga-top'>
            Gå til toppen
          </Link>
        </div>
      ) : (
        <div className='loading-div'>
          <h1>Loading</h1>
          <CircularProgress color='primary' />
        </div>
      )}
    </Layout>
  )
}

export default LedigeStillinger
