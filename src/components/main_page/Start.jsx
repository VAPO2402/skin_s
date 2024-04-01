import React from 'react'
import Header from './Header'

import "../../styles/styles_main/start.scss"
import { Link } from 'react-router-dom'

import heart from "../../assets/heart.png"

const Start = () => {
  return (
    <section className='start'>
        <div className="startContent">
            <Header />
            <div className="main">
                <div className="mainText">
                    <h1 className='text'>
                        Diagnostic
                    </h1>
                    <h1 className='dot'>
                        Expert System<span>.</span>
                    </h1>
                </div>
                <div className="mainButton">
                    <button><Link to={"/program"} className='linkButton'>Start Program</Link></button>
                </div>
            </div>
            <div className="startMid">
                <div className="content">
                    <div className="contentText">
                        <p>We develop revolutionary technologies <br />
                        while delivering quality healthcare <br />
                        through medical technology</p>
                    </div>
                    <span>
                        EN / ID / GR
                    </span>
                </div>
                <div className="image">
                    <img src={heart} alt="heart" className='heart' />
                    <p>/ EST 2023</p>
                </div>
            </div>
        </div>
        
        <div className="startEnd">
            <h1>Our Technology <span> + </span>Our Technology <span> + </span>Our Technology</h1>
        </div>
    </section>
  )
}

export default Start