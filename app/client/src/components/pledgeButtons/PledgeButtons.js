import React from "react"
import './style.css'
import pledgeImg from '../../assets/images/pledge.png'

export default function PledgeButtons() {
    return (
        <section id="pledgeButtonGroup">
            <p className="head">I AM INTERESTED</p>

            <button className="submit green"><img src={pledgeImg} /></button>

            <div className="card">

              <button className="quick lightgreen">
                <div className="card">
                  <object
                    aria-label="img"
                    data={require(`../../assets/images/redo.svg`)}
                  />
                  Counter Offer
                </div>
              </button>

              <button className="quick lightred">
                <div className="card">
                  <object
                    aria-label="img"
                    data={require(`../../assets/images/decline.svg`)}
                  />
                  <div className="box">
                    Really sorry
                    <span>Not a good time</span>
                  </div>
                </div>
              </button>

            </div>
        </section>
    )
}