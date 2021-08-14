import React, {useEffect, useState} from "react"
import person from '../../assets/images/person.jpg'
import Box from "../box/Box"
import './style.css'
export default function Profile() {


    
    // Read more: Here we get the bio text frpm api
    const [readMore, setReadMore] = useState(false)
    const bios = "I am a Junior at the University of California studying Business. My major is accounting. I want to become an entrepreneur so that I can take my many talents to the next level and take control of my economic future. My desire is to reach toward a higher standard and prove to myself that I have the talent and skills to realize my dreams, while also setting a positive example for those that come behind me.";
    // readmore button function: here we hamdle the click on readmore button which takes care of the readmore state 
    const readMoreHandler = () => { setReadMore(!readMore) }

    return (
        <section id="profile" className="boxshadow" style={{paddingBottom: "28px"}}>
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
                    {/* bios: Here we either show the full text or convert the string to array to cut it down based on the words and then convert back to string  based on the state of readmore! */}
                    {readMore?bios:bios.split(" ").slice(0, 20).join(" ")}
                    {/* read more button: here we handle the text of the readmore button  */}
                    <span onClick={readMoreHandler} className="highlight txtbutton"> {readMore?"read less":"read more"} </span>
                </section>
            </section>

            <section className="boxes">
                <Box text="Dallas, Texas" icon="building.svg" />
                <Box text="38 Network" icon="network.svg" />
            </section>
             
        </section>
    )
}