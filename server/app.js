require("dotenv").config()
const morgan = require("morgan")
const axios = require("axios")
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(morgan("dev"))
const api = `https://api.recman.no/v2/get/?key=${process.env.GATSBY_API_KEY}&scope=jobPost&fields=name,ingress,startDate,endDate,logo`

const getData = async () => {
  return await axios({
    url: api,
  })
}
app.get("/data", async (req, res) => {
  const recmanData = await getData()
  res.send(JSON.stringify(recmanData.data.data))
})

app.listen(8080, () => {
  console.log("server is listening on port 8080")
})
