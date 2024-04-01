import React from 'react'

import "../../styles/styles_main/methodology.scss"

import dna from "../../assets/dna.png";
import sphere from "../../assets/sphere.png";
import liver from "../../assets/liver1.png";
import injection from "../../assets/injection.png";

const Methodology = () => {
  return (
    <section className="methodology">
      <h1>Our Methodology<span>.</span></h1>
      <div className="methodologyContent">
        <div className="info">
          <div className="text">
            <h1>Laboratory Excercises 1</h1>
          </div>
          <div className="image">
            <img src={dna} alt="dna" />
          </div>
        </div>
        <div className="info">
          <div className="text">
            <h1>Laboratory Excercises 2</h1>
          </div>
          <div className="image">
            <img src={sphere} alt="dna" />
          </div>
        </div>
        <div className="info">
          <div className="text">
            <h1>Laboratory Excercises 3</h1>
          </div>
          <div className="image">
            <img src={liver} alt="dna" />
          </div>
        </div>
        <div className="info">
          <div className="text">
            <h1>Laboratory Excercises 4</h1>
          </div>
          <div className="image">
            <img src={injection} alt="dna" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Methodology