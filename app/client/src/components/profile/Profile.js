import React from "react"
import person from '../../assets/images/person.jpg'
import Box from "../box/Box"
import './style.css'
export default function Profile() {
    return (
        <section id="profile" className="boxshadow">
            <section className="info">
                <img src={person} />
                <div className="text">
                    <p className="highlight">
                        <span>Alireza Ataei</span>
                        <span className="dot"></span>
                        <span>20</span>
                    </p>
                    <p>alireza@gmail.com</p>
                </div>
            </section>
            <section id="bios">
                <span>About</span>
                <section className="text">
                    I am a Junior at the University of California studying Business. My major is accounting. I want to become an entrepreneur so that I can take my many talents to the next level and take control of my economic future. My desire is to reach toward a higher standard and prove to myself that I have the talent and skills to realize my dreams, while also setting a positive example for those that come behind me.   
                </section>
            </section>

            <section className="boxes">
                <Box text="Dallas, Texas" icon="building.svg" />
                <Box text="38 Network" icon="network.svg" />
            </section>
             
        </section>
    )
}