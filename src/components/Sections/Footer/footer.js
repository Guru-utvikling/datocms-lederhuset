import React from "react"
import Logo from "../../../assets/lederhusetlogo.svg"
const Footer = () => {
  return (
    <footer className='container__footer'>
      <img src={Logo} />
      <ul className="container__footer--list">
        <div className='container__footer--item'>1</div>
        <div className='container__footer--item'>2</div>
        <div className='container__footer--item'>3</div>
        <div className='container__footer--item'>4</div>
      </ul>
    </footer>
  )
}

export default Footer
