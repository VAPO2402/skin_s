import React from 'react'
import Programnav from './program_page/Programnav'
import Diagnose from './program_page/Diagnose'
import Appointment from './program_page/Appointment'
import Services from './program_page/Services'
import Guidance from './program_page/Guidance'

const Program = () => {
  return (
    <main className='program'>
      <Programnav />
      <Diagnose />
      <Appointment />
      <Services />
      <Guidance />
    </main>
  )
}

export default Program