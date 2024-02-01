import {useState} from 'react'
import './index.css';
import Profile from '../Profile'
import About from '../About'
import EducationExperience from '../EducationExperience'
import Skills from '../Skills'
import Projects from '../Projects'
import ContactMe from '../ContactMe'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";




const MainComponent = ()=>{
       const [open,setOpen]= useState(true) 
    return(
           <>
        {/*Navbar Desktop View*/}
        <div className="wholeContainer">
        <nav id="desktopView" className="navbarDesktopContainer">
               <h1 className="nameLogo">Swathi Challa</h1>
               <ul className="allSectionsDesktop">
               <li className="section" ><a className="sectionLink" href="#Home">Home</a></li>
               <li className="section" ><a className="sectionLink" href="#About">About</a></li>
               <li className="section" ><a className="sectionLink" href="#Experience">Experience</a></li>
               <li className="section" ><a className="sectionLink" href="#Skills">Skills</a></li>
               <li className="section" ><a className="sectionLink" href="#Projects">Projects</a></li>
               <li className="section" ><a className="sectionLink" href="#Contact">Contact Me</a></li>
               </ul>
               <ul className={`allSectionsMobile ${open && "CloseMenu" }` }>
               <li className="section" ><a className="sectionLink" href="#Home" onClick={()=>setOpen(true)}>Home</a></li>
               <li className="section" ><a className="sectionLink" href="#About" onClick={()=>setOpen(true)}>About</a></li>
               <li className="section" ><a className="sectionLink" href="#Experience" onClick={()=>setOpen(true)}>Experience</a></li>
               <li className="section" ><a className="sectionLink" href="#Skills" onClick={()=>setOpen(true)}>Skills</a></li>
               <li className="section" ><a className="sectionLink" href="#Projects" onClick={()=>setOpen(true)}>Projects</a></li>
               <li className="section" ><a className="sectionLink" href="#Contact" onClick={()=>setOpen(true)}>Contact Me</a></li>
               <IoClose className="closeIcon" onClick={()=>setOpen(true)}/>
               </ul>
               <IoMenu className="menuIcon" onClick={()=>setOpen(prevState => !prevState)}/>
               
               
        </nav>

        <Profile/>
        <About/>
        <EducationExperience/>
        <Skills/>
        <Projects/>
        <ContactMe/>
        </div>
        </>
    )
}


export default MainComponent