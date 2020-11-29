// src/pages/callback.js
import React from "react"
import { handleAuthentication } from "../utils/auth"

const Callback = () => {
  handleAuthentication()

  return (
    <div className="container__callback">
      <h1 class>Loading...</h1>
    </div>
  )
}

export default Callback