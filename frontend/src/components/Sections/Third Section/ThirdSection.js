import React, {useState} from "react"
import { Link } from "gatsby"
import SearchBar from "material-ui-search-bar"

const ThirdSection = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log(searchValue)
  }
  return (
    <div className='container__section3'>
      <h2 className='section3__title'>Ledige Stillinger</h2>
      <p className='section3__para'>Search for a job in your location</p>
      <SearchBar
      className="section3__search"
        value={searchValue.value}
        onChange={(newValue) => setSearchValue({ value: newValue })}
        onRequestSearch={() => handleSearch(searchValue.value)}
      />
    </div>
  )
}

export default ThirdSection
