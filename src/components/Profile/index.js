import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './index.css'


const Profile = ()=>{
    return(
         <div id="Home" className="profileDesktopContainer">
         <img src={process.env.PUBLIC_URL + '/assets/swathiPhoto.jpg'} alt="profileImage" className="profileImage" />
         <div className="details">
         <p className="HelloText">Hello I'm  <br/><span className="Name">Swathi Challa</span></p>
         <button type="button" className="cvButton" onClick={() => window.open(process.env.PUBLIC_URL + '/assets/swathichalla_resume.pdf')}>Download CV</button>
         <div className="contactDetails">
         <a className="Aicon" href="https://www.linkedin.com/in/swathi-challa-661105228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin  className="icon"/></a>
         <a className="Aicon" href="https://github.com/swathichalla1"><FaGithubSquare className="icon" /></a>
         <a className="Aicon" href="mailto:swathichalla0@gmail.com"><IoMdMail className="icon"/></a>
         </div>
         </div>
         </div>
    )
}

export default Profile