import React from 'react'

import "../../styles/styles_main/expertise.scss"

import dna from "../../assets/dna.png";
import capsule from "../../assets/capsule4.png";
import liver from "../../assets/liver1.png";
import injection from "../../assets/injection.png";

const Expertise = () => {
  return (
    <section className="expertise">
        <h1>Our Expertise<span>.</span></h1>
        <div className="pampletsAbove">
            <div className="pamplets">
                <div className="image">
                    <img src={dna} alt="dna" />
                </div>
                <div className="text">
                    <span>Genomics</span>
                </div>
            </div>
            <div className="pamplets">
                <div className="image">
                    <img src={capsule} alt="capsule" />
                </div>
                <div className="text">
                    <span>Chemistry</span>
                </div>
            </div>
        </div>
        <div className="pampletsBelow">
            <div className="pamplets">
                <div className="image">
                    <img src={liver} alt="liver" />
                </div>
                <div className="text">
                    <span>Bionics</span>
                </div>
            </div>
            <div className="pamplets">
                <div className="image">
                    <img src={injection} alt="injection" />
                </div>
                <div className="text">
                    <span>Genetic</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Expertise