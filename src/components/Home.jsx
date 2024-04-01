import React from 'react'
import Start from './main_page/Start'
import Expertise from './main_page/Expertise'
import Startprogram from './main_page/Startprogram'
import Methodology from './main_page/Methodology'
import Homeend from './main_page/Homeend'

const Home = () => {
  return (
    <main className='home'>
      <Start />
      <Expertise />
      <Startprogram />
      <Methodology />
      <Homeend />
    </main>
  )
}

export default Home