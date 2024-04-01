import React from 'react'

import "../../styles/styles_main/startprogram.scss"
import { Link } from 'react-router-dom'

const Startprogram = () => {
  return (
    <section className="startProgram">
      <h1>Hurry! <br />Start your <span>diagnosis..</span></h1>
      <button><Link to={"/program"} className='linkButton'>Start Program</Link></button>
    </section>
  )
}

export default Startprogram