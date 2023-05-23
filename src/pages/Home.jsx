import React from 'react'
import FormHome from '../components/FormHome'
import "./styles/Home.css"

const Home = () => {
  return (
    <main className='home'>
      <img className='home__img' src='/images/pokedex.png' alt='' />
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0yNvXklehXo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h2 className='home__subtitle'>Hi, trainer!</h2>
      <p className='home__text'>Give me your name to start!</p>
      <FormHome />
    </main>
  )
}

export default Home