import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
const data = [
  {
    title: "Nedbemanning og outplacement",
    description:
      "I situasjoner der bedriften må nedbemanne har vi erfaring med bistand og rådgivning i slike prosesser. Dette kan være grupper av ansatte eller enkeltpersoner som av ulike årsaker skal hjelpes over i nye roller.",
    id: 1,
    icon:
      "https://www.datocms-assets.com/37833/1610958243-downsizeing-icon.svg",
    slug: "omstillingnedbemanning",
  },
  {
    title: "Mentoring",
    description:
      "Spesielt yngre og ferske i lederrollen kan ha behov for å ha en dedikert ekstern person som sparringspartner innen de utfordringene som lederen har i sitt operative lederskap.",
    id: 2,
    icon: "https://www.datocms-assets.com/37833/1610958366-mentoring-icon.svg",
    slug: "mentoring",
  },
  {
    title: "Lederutvikling",
    description:
      "La oss være en partner i utviklingen av både deg som leder og dine øvrige ledere i bedriften. Både på individnivå og som team.",
    id: 3,
    icon: "https://www.datocms-assets.com/37833/1610958244-ledership-icon.svg",
    slug: "lederutvikling",
  },
  {
    title: "Rekruttering",
    description:
      "Lederhuset hjelper næringslivet med å ansette gode ledere. Vi skal også hjelpe gode ledere til å finne de riktige arbeidsgiverne og riktig ny stilling.",
    id: 4,
    icon: "https://www.datocms-assets.com/37833/1610958098-people-icons.svg",
    slug: "rekruttering",
  },
]
export default function SecondSection() {
  return (
    <div className='container__servicebox--section'>
      {data.map((item) => (
        <div key={item.id} className={ 'container__servicebox', 'container__servicebox-'+ `${item.id}`}>
          <div className="servicebox__image--wrapper">
            <img className='servicebox__icon' src={item.icon}></img>
          </div>

          <div className='container__servicebox--content'>
            <h1 className='servicebox__content--title'>{item.title}</h1>
            <p className='servicebox__content--para'>{item.description}</p>
            <Link
              className='servicebox__content--link'
              to={`servicepages/${item.slug}`}
            >
              Les mer
            </Link>
          </div>
        </div>
      ))}
    </div>
    
  )
}




/*    <div className='container__servicebox--section'>
      {data.map((item) => (
        <div key={item.id} className='container__servicebox'>
          <div className="servicebox__image--wrapper">
            <img className='servicebox__icon' src={item.icon}></img>
          </div>

          <div className='container__servicebox--content'>
            <h1 className='servicebox__content--title'>{item.title}</h1>
            <p className='servicebox__content--para'>{item.description}</p>
            <Link
              className='servicebox__content--link'
              to={`servicepages/${item.slug}`}
            >
              Les mer
            </Link>
          </div>
        </div>
      ))}
    </div> */
