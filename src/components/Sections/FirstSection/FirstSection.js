import React from "react"
import { Link } from "gatsby"
const FirstSection = () => {
  return (
    <div className='container__section1'>
      <div className='container__header--left'>
        <h1 className='header__title'>Your business
        is our business</h1>
        <p className='header__content'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="container__CTABtn">
          <Link className='header__CTABtn' to='/'>
            FOR SELSKAPER
          </Link>
          <Link className='header__CTABtn' to='/'>
            FOR ANSATTE
          </Link>
        </div>
      </div>
      <div className='container__header--right'></div>
    </div>
  )
}

export default FirstSection
