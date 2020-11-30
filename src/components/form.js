import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormLabel from "@material-ui/core/FormLabel"

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

export default function Form() {
  const classes = useStyles()
  const [state, setState] = useState({
    name: "",
    surename: "",
    email: "",
    number: "",
    birth: "",
    gender: "",
    privacy: false,
  })

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

  return (
    <form
      className='container__regiser_cv_form'
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <div className='container__input__fields'>
        <TextField
          id='name'
          label='Fornavn'
          variant='outlined'
          value={state.name}
          onChange={(e) => handleChange("name", e.target.value)}
          style={{margin:8}}
        />
        <TextField
          id='suername'
          label='Etternavn'
          variant='outlined'
          value={state.surename}
          onChange={(e) => handleChange("surename", e.target.value)}
          style={{margin:8}}
        />
      </div>
      <div className='container__input__fields'>
        <TextField
          id='number'
          label='Mobiltelefon'
          variant='outlined'
          type='phone'
          value={state.number}
          onChange={(e) => handleChange("number", e.target.value)}
          style={{margin:8}}
        />
        <TextField
          id='email'
          label='E-post'
          variant='outlined'
          type='email'
          value={state.email}
          onChange={(e) => handleChange("email", e.target.value)}
          style={{margin:8}}
        />
      </div>

      <div className='container__input__fields'>
        <TextField
          id='date'
          label='Fødselsdato'
          type='date'
          defaultValue='2017-05-24'
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Kjønn</FormLabel>
          <RadioGroup
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
              Jeg bekrefter at jeg har lest og godtar{" "}
              <a href='/'>brukervilkår,</a>
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
  )
}
