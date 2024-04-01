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
        <Link to={"/technology"} className='navLinks'>Technology</Link>
        <span className='navSpan'> / </span>
        <Link to={"/program"} className='navLinks'>Program</Link>
        <span className='navSpan'> / </span>
        <Link to={"/learn"} className='navLinks'>Learn</Link>
        <span className='navSpan'> / </span>
        <Link to={"/about"} className='navLinks'>About</Link>
        <span className='navSpan'> / </span>
        <Link to={"/Contact"} className='navLinks'>Conatct</Link>
      </nav>
    </header>
  )
}

export default Header