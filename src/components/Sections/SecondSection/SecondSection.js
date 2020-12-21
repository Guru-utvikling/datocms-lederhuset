import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
const data = [
  {
    title: "Downsizing and outplacement",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    id: 1,
    icon: "https://www.datocms-assets.com/37833/1605866439-icon-1.png",
    slug:'omstillingnedbemanning'
  },
  {
    title: "Mentoring and career patronage",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    id: 2,
    icon: "https://www.datocms-assets.com/37833/1605866517-icon-2.svg",
    slug:"mentoring"
  },
  {
    title: "Leadership development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    id: 3,
    icon: "https://www.datocms-assets.com/37833/1605866565-icon-3.svg",
    slug:"lederutvikling"
  },
  {
    title: "Recruitment of managers, key personel and board members",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
