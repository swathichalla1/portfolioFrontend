import './index.css'

const About = ()=>{
    return(
        <div id="About" className="aboutContainer">
                <p className="aboutMePara">Get to know more</p>
                <h1 className="aboutMeHeading">About Me</h1>
                <div className="descriptionAndImage">
                <p className="aboutMeDescription">I am an enthusiastic individual having two years of experience in Telecom industry, later opted for a career change into the IT industry. Possessing expertise in both front-end and back-end web development, I am now actively seeking a dynamic role where I can apply my technical skills and experience in problem-solving and bringing innovative web solutions.</p>
                <img src={process.env.PUBLIC_URL+'/assets/Working.png'} alt="About Me" className="aboutImage"/>
                </div>
                
         </div>
        
    )
}

export default About