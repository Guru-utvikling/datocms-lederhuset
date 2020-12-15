import React from "react"
import { Link } from "gatsby"
export default function FourthSection() {
  return (
    <div className='container__employess'>
      <ul className='container__employess__List'>
        <h2 className='employess__title'>Ønsker du hjelp til:</h2>
        <li className='container__employessItem'>
          <p className='servicebox__content--para'>Rekruttering</p>
        </li>
        <li className='container__employessItem'>
          <p className='servicebox__content--para'>Lederutvikling</p>
        </li>
        <li className='container__employessItem'>
          <p className='servicebox__content--para'>Mentoring</p>
        </li>
        <li className='container__employessItem'>
          <p className='servicebox__content--para'>Omstilling nedbemanning</p>
        </li>
        <Link className='employess__CTABtn' to='/for-ansatte'>
          KONTAKT OSS
        </Link>
      </ul>
      <ul className='container__employess__List'>
        <h2 className='employess__title'>Søker du nye utfordringer?</h2>
        <li className='container__employessItem'>
          <p className='servicebox__content--para'>Rekruttering</p>
        </li>
        <li className='container__employessItem'>
          <p className='servicebox__content--para'>Lederutvikling</p>
        </li>
        <Link className='employess__CTABtn' to='/'>
          KONTAKT OSS
        </Link>
      </ul>
    </div>
  )
}
