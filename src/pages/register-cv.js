import React, { useState } from "react"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormLabel from "@material-ui/core/FormLabel"
import MuiPhoneNumber from "material-ui-phone-number"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    margin: theme.spacing(5),
  },
}))

const RegisterCV = () => {
  const classes = useStyles()
  const [state, setState] = useState({
    name: "",
    surename: "",
    email: "",
    phone: "",
    birth: "",
    gender: "",
    privacy: false,
  })
  const [error, setError] = useState()
  const [data, setData] = useState()
  
  const handleChange = (inputKey, inputValue) => {
    setState({
      ...state,
      [inputKey]: inputValue,
    })
  }
  const handleSubmit = (event) => {
    console.log(state)
    event.preventDefault()
  }
  
  const submmitYourCV = (event) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: process.env.GATSBY_API_KEY,
        scope: "candidate",
        operation: "insert",
        data: {
          corporationId: "1016",
          firstName: state.name,
          lastName: state.surename,
          email: state.email,
          gender:state.gender,
          dob: state.birth
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
      event.preventDefault()
      console.log(requestOptions)
  }
  return (
    <Layout>
      <div className='container__registerCV'>
      <form
      className='container__regiser_cv_form'
      noValidate
      autoComplete='off'
      onSubmit={submmitYourCV}
    >
      <h1 className="register_CV_title">Registerer CV</h1>
      <div className='container__input__fields'>
        <TextField
          id='name'
          label='Fornavn'
          variant='outlined'
          value={state.name}
          onChange={(e) => handleChange("name", e.target.value)}
          style={{ margin: 8, width: "100%" }}
        />
        <TextField
          id='suername'
          label='Etternavn'
          variant='outlined'
          value={state.surename}
          onChange={(e) => handleChange("surename", e.target.value)}
          style={{ margin: 8, width: "100%" }}
        />
      </div>
      <div className='container__input__fields'>
       {/* <MuiPhoneNumber
          id='phone'
          label='Mobiltelefon'
          variant='outlined'
          defaultCountry={"no"}
          value={state.phone}
          onChange={(e) => handleChange("phone", e.target)}
          style={{ margin: 8, width: "100%" }}
  /> */}
        <TextField
          id='email'
          label='E-post'
          variant='outlined'
          type='email'
          value={state.email}
          onChange={(e) => handleChange("email", e.target.value)}
          style={{ margin: 8, width: "100%" }}
        />
      </div>

      <div className='container__input__fields--down'>
        <FormLabel component='legend'>Fødselsdato</FormLabel>
        <TextField
          id='date'
          type='date'
          defaultValue='2017-05-24'
          className={classes.textField}
          style={{ marginTop: 8, width: "100%" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Kjønn</FormLabel>
          <RadioGroup
            row
            aria-label='gender'
            id='gender'
            value={state.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
          >
            <FormControlLabel
              value='Kvinne'
              control={<Radio />}
              label='Kvinne'
            />
            <FormControlLabel value='Mann' control={<Radio />} label='Mann' />
            <FormControlLabel value='Annet' control={<Radio />} label='Annet' />
          </RadioGroup>
        </FormControl>

        <FormControlLabel
          style={{ marginBottom: 20, marginTop: 20, width: "100%" }}
          control={
            <Checkbox
              checked={state.privacy}
              onChange={(e) => handleChange("privacy", e.target.checked)}
              value={true}
              color='primary'
            />
          }
          label={
            <p>
              Jeg bekrefter at jeg har lest og godtar
              <a href='/'> brukervilkår, </a>
              <a href='/'>personvernerklæringen</a> og retningslinjer for
              <a href='/'>informasjonskapsler.</a>
            </p>
          }
        />
      </div>

      <Button size='large' variant='contained' color='primary' type='submit'>
        Registerer deg
      </Button>
    </form>
      </div>
    </Layout>
  )
}

export default RegisterCV
