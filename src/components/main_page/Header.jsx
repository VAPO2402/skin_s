import React from 'react'
import { Link } from 'react-router-dom'

import "../../styles/styles_main/header.scss"

const Header = () => {
  return (
    <header>
      <div className="logo">
        S<sup>+</sup>
      </div>
      <nav>
        <Link to={"/"} className='navLinks'>Technology</Link>
        <span className='navSpan'> / </span>
        <Link to={"/"} className='navLinks'>Program</Link>
        <span className='navSpan'> / </span>
        <Link to={"/"} className='navLinks'>Learn</Link>
        <span className='navSpan'> / </span>
        <Link to={"/"} className='navLinks'>About</Link>
        <span className='navSpan'> / </span>
        <Link to={"/"} className='navLinks'>Conatct</Link>
      </nav>
    </header>
  )
}

export default Header