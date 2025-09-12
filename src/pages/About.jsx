import React from 'react'
import { ASSETS } from '../assets'
import toast from 'react-hot-toast'

export default function About() {

  const aboutcontents = [
    {
      id: "about1",
      image: ASSETS['aeriel_blue_car'],
      subtitle: "Texcars",
      title: "We consider you our first priority",
      text: "We are committed to providing you with the best luxury products and services.",
    },
    {
      id: "about2",
      image: ASSETS['gwagon_grey_car'],
      subtitle: "Our Mission",
      title: "We exist to actualize your dreams",
      text: "We are committed to providing you with the best luxury products and services.",
    },
    {
      id: "about3",
      image: ASSETS['shadowed_red_car'],
      subtitle: "Our Vision",
      title: "Bringing luxury to like-minded individuals",
      text: "We are committed to providing you with the best luxury products and services.",
    },
  ]

  return (
    <main className='space-y-10'>
      <section className="relative px-4 h-[40vh] bg-primary">
        <img
          src={ASSETS['gwagon_grey_car']}
          alt="Contact Background"
          className="opacity-40 absolute top-0 left-0 h-full w-full object-cover object-center"
        />
      </section>
      <section className="px-4">
        <div className="container mx-auto space-y-6">
          {aboutcontents.map((el, i) => (
            <section key={el.id} className={`flex ${i % 2 === 1 ? 'flex-col-reverse md:flex-row' : 'flex-col-reverse md:flex-row-reverse'} items-center gap-8 p-4`}>
              <div className="flex-1 py-6 sm:py-10 md:py-24 space-y-4">
                <p className="text-sm md:text-base w-max relative before:absolute before:h-0.5 before:w-12 before:bg-secondary before:left-[120%] before:top-1/2 before:-translate-y-1/2">{el.subtitle}</p>
                <h3 className="text-3xl md:text-4xl text-primary font-serif font-bold">{el.title}</h3>
                <p className="text-base md:text-lg opacity-70">{el.text}</p>
              </div>
              <div className="flex-1 relative min-h-48 bg-primary max-w-md w-full h-100 rounded-lg overflow-hidden">
                <img src={el.image} alt={el.subtitle} className="absolute top-0 left-0 h-full w-full object-cover object-center" />
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}
