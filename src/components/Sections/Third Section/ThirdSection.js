import React, { useState } from "react"
import { Link } from "gatsby"
import SearchBar from "material-ui-search-bar"

const ThirdSection = () => {
  return (
    <Link to="ledige-stillinger">
      <div className='container__section3'>
        <h2 className='section3__title'>Se våre ledige stillinger</h2>
      </div>
    </Link>
  )
}

export default ThirdSection
