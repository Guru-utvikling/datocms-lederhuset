/*import React, { useState } from "react"
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
import { navigate } from "gatsby"
//import MuiPhoneNumber from "material-ui-phone-number"

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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: {
        firstName: state.name,
        lastName: state.surename,
        email: state.email,
        gender: state.gender,
        dob: state.birth,
      },
    })
      .then(() => {
        console.log("Form submission success")
        navigate("/success")
      })
      .catch((error) => {
        console.error("Form submission error:", error)
        this.handleNetworkError()
      })
  }
  return (
    <form name='contact' method='POST' data-netlify='true'>
      <p>
        <label>
          Your Name: <input type='text' name='name' />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type='email' name='email' />
        </label>
      </p>
      <p>
        <label>
          Your Role:{" "}
          <select name='role[]' multiple>
            <option value='leader'>Leader</option>
            <option value='follower'>Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name='message'></textarea>
        </label>
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  )
}

export default RegisterCV

/*<div className='container__registerCV'>
<form
  className='container__regiser_cv_form'
  noValidate
  data-netlify="true"
  autoComplete='off'
  onSubmit={submmitYourCV}
>
  <h1 className='register_CV_title'>Registerer CV</h1>
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
  <Button
    size='large'
    variant='contained'
    color='primary'
    type='submit'
    onClick={handleSubmit}
  >
    Kontakt oss
  </Button>
</form>
</div> */
