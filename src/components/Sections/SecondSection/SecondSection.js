import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
const data = [
  {
    title: "Nedbemanning og outplacement",
    description:
      "I situasjoner der bedriften må nedbemanne har vi erfaring med bistand og rådgivning i slike prosesser. Dette kan være grupper av ansatte eller enkeltpersoner som av ulike årsaker skal hjelpes over i nye roller.",
    id: 1,
    icon: "https://www.datocms-assets.com/37833/1605866439-icon-1.png",
    slug:'omstillingnedbemanning'
  },
  {
    title: "Mentoring",
    description:
      "Spesielt yngre og ferske i lederrollen kan ha behov for å ha en dedikert ekstern person som sparringspartner innen de utfordringene som lederen har i sitt operative lederskap.",
    id: 2,
    icon: "https://www.datocms-assets.com/37833/1605866517-icon-2.svg",
    slug:"mentoring"
  },
  {
    title: "Lederutvikling",
    description:
      "La oss være en partner i utviklingen av både deg som leder og dine øvrige ledere i bedriften. Både på individnivå og som team.",
    id: 3,
    icon: "https://www.datocms-assets.com/37833/1605866565-icon-3.svg",
    slug:"lederutvikling"
  },
  {
    title: "Vi rekrutterer ledere og nøkkelpersonell",
    description:
      "Lederhuset hjelper næringslivet med å ansette gode ledere. Vi skal også hjelpe gode ledere til å finne de riktige arbeidsgiverne og riktig ny stilling.",
    id: 4,
    icon: "https://www.datocms-assets.com/37833/1605866622-icon-4.svg",
    slug:'rekruttering'
  },
]
export default function SecondSection() {
  return (
    <div className='container__servicebox--section'>
      {data.map((item) => (
        <div key={item.id} className='container__servicebox'>
          <div className='container__servicebox--icon'>
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
