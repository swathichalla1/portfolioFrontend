import React from 'react'
import './index.css'


const EducationExperience = ()=>{
  return(
    <>
    <div id="Experience" className="expContainer">
    <p className="expPara">My Journey of </p>
    <h1 className="expHeading">Education And Experience</h1>

    <div className="eachContainer">
        <img className="Image" src={process.env.PUBLIC_URL + '/assets/Hitam.png'} alt="CollegeImage"/>
        <div className="eachItem">
        <h2>B-Tech</h2>
        <p className="name">Hyderabad Institute Of Technology And Management</p>
        <p className="stream">Electronics And Communication Engineering</p>
        <p className="time">2017-2021</p>
        </div>
    </div>

    <div className="eachContainer">
        <img className="Image experience" src={process.env.PUBLIC_URL + '/assets/Congruex.png'} alt="CongruexImage"/>
        <div className="eachItem experienceItem">
        <p className="name">Congruex</p>
        <p className="stream">Fiber Design Engineer</p>
        <p className="time">2021-2022</p>
        </div>
    </div>

    <div className="eachContainer">
        <img className="Image experience" src={process.env.PUBLIC_URL + '/assets/Verveba.png'} alt="CongruexImage"/>
        <div className="eachItem experienceItem">
        <p className="name">Verveba   </p>
        <p className="stream">Fiber Design Engineer</p>
        <p className="time">2022-2023</p>
        </div>
    </div>


    </div>
    </>
  )
}

export default EducationExperience