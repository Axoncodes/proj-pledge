import React, {useEffect, useState} from "react"
import { profileInfo } from '../../../../controller/profileController'
import person from '../../assets/images/person.jpg'
import Box from "../box/Box"
import './style.css'
export default function Profile({classes, aboutTitle}) {


    
    // Read more: Here we get the bio text frpm api
    const [readMore, setReadMore] = useState(false)
    const [profile, setProfile] = useState({})
    // const bios = "I am a Junior at the University of California studying Business. My major is accounting. I want to become an entrepreneur so that I can take my many talents to the next level and take control of my economic future. My desire is to reach toward a higher standard and prove to myself that I have the talent and skills to realize my dreams, while also setting a positive example for those that come behind me.";
    // readmore button function: here we hamdle the click on readmore button which takes care of the readmore state 
    const readMoreHandler = () => { setReadMore(!readMore) }

    const getUserInfo = async () => {
		const response = await profileInfo.viewProfile();
        setProfile(response['data'])
	}
    useEffect(() => {
        getUserInfo()
    }, [])


    return (
        <section id="profile" className={classes} style={{paddingBottom: "28px"}}>
            <section className="info">
                {/* <img src={profile['profile_photo']} /> */}
                <img src={person} />
                <div className="text">
                    <p className="highlight">
                        <span>{profile['first_name']} {profile['last_name']}</span>
                        {/* <span className="dot"></span>
                        <span>{profile['age']}</span> */}
                    </p>
                    <p>{profile['email']}</p>
                </div>
            </section>
            <section id="bios">
                <span>{aboutTitle}</span>
                <section className="text">
                    {/* bios: Here we either show the full text or convert the string to array to cut it down based on the words and then convert back to string  based on the state of readmore! */}
                    {readMore?(profile['biography']?profile['biography']:''):profile['biography']?profile['biography'].split(" ").slice(0, 20).join(" "):''}
                    {/* read more button: here we handle the text of the readmore button  */}
                    <span onClick={readMoreHandler} className="highlight txtbutton"> {readMore?"read less":"read more"} </span>
                </section>
            </section>

            <section className="boxes">
                <Box text={profile['city']} icon="building.svg" />
                <Box text={`${profile['network']} Network`} icon="network.svg" />
            </section>
             
        </section>
    )
}