import React from 'react'

import "../../styles/styles_program/appointment.scss"

import nurse from "../../assets/nurse1.webp"
import doctor from "../../assets/doctor.png"

const Appointment = () => {
  return (
    <section className="appointment">
      <div className="contentAbove">
        <div className="image">
          <img src={nurse} alt="nurse" />
          <h1>Book Appointment</h1>
        </div>
        <div className="contentHeading">
          <h1>Embark on a journey <br /> of expery <span>Online <br /> guidance</span></h1>
        </div>
      </div>
      <div className="contentBelow">
        <div className="scheduleButton">
          <h1>Schedule, search, and <br />connect  effortlessly for <br />efficient healthcare <br />experiences</h1>
          <button>Appointment</button>
        </div>
        <div className="numbers">
          <div className="doctors">
            <h1>Serve yourself<br /><span> the  best way</span></h1>
          </div>
          <div className="customers">
            <h1>300K<span>+</span></h1>
            <div className="modesService">
              <h1>Serving patients both <br />Online and Offline</h1>
            </div>
          </div>
        </div>
        <div className="doctor">
          <img src={doctor} alt="doctor" />
        </div>
      </div>
    </section>
  )
}

export default Appointment