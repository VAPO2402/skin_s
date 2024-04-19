import React from 'react'
import Start from './main_page/Start'
import Expertise from './main_page/Expertise'
import Startprogram from './main_page/Startprogram'
import Methodology from './main_page/Methodology'

const Home = () => {
  return (
    <main className='home'>
      <Start />
      <Expertise />
      <Startprogram />
      <Methodology />
    </main>
  )
}

export default Home