import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ActiveJobList from "../components/ActiveJobsList"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import Typography from "@material-ui/core/Typography"
import Fade from "@material-ui/core/Fade"
import Paper from "@material-ui/core/Paper"
import { Link } from "gatsby"
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

  const getAllActiveJobs = (req, res) => {
    const proxy = "https://cors-anywhere.herokuapp.com/"
    const api = `https://api.recman.no/v2/get/?key=${process.env.GATSBY_API_KEY}&scope=jobPost&fields=name,ingress,startDate,endDate,logo`
    const url = proxy + api

    return fetch(url, {
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
      {!dataIsLoading ? (
        <>
          <h1 className='nyheter__title'>Ledige stillinger</h1>
          <div className='wrapper__ledige'>

            <div className='container__ledige-stillinger'>

              <div className="ledige-filters__wrapper" >
                
                <Paper className='container__ledige-filters'
                >
                  <Typography component='h7' variant='h7'>
                      Filters
                    </Typography>
                  <Link to="/ledige-stillinger">
                    <Typography component='h5' variant='h5'>
                      Alle
                    </Typography>
                  </Link>
                </Paper>
              </div>
              <div className='container__ledige-list'>
                <ActiveJobList activelist={activeJobs} />
              </div>
            </div>
          </div>
        </>
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
