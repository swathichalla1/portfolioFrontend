import './index.css'

const Projects = ()=>{
    

    const ProjectsList = [
        {
            title: 'Delicious',
            image:'/assets/Delicious.png',
            githubLink: 'https://github.com/swathichalla1/Delicious-Website',
            liveDemoLink: 'https://deliciouswebst.ccbp.tech/',
        },
        {
            title: 'Job Search App',
            image:'/assets/Jobby.png' ,
            githubLink: 'https://github.com/swathichalla1/JobSearch-Application',
            liveDemoLink: 'https://swathijobby.ccbp.tech/login',
        },
        {
            title: 'Daily Tasks',
            image: '/assets/TodoList.png',
            githubLink: 'https://github.com/swathichalla1/Daily-Tasks-Application',
            liveDemoLink: 'https://swathichalla1.github.io/Daily-Tasks-Application/',
        },
        {
            title: 'Nxt Trends',
            image: '/assets/NxtTrends.png',
            githubLink: 'https://github.com/swathichalla1/NxtTrends',
            liveDemoLink: 'https://nxttrendsshopping.netlify.app/login',
        },
    ]

    const showProjectDetails=(each)=>{
        return(
            <div className="container">
            <h3>{each.title}</h3>
            <img  className="projectImage" src={process.env.PUBLIC_URL+each.image} alt={each.title}/>
            <div className="buttons">
            <a href={each.githubLink}><button className="eachButton">GitHub</button></a>
            <a href={each.liveDemoLink}><button className="eachButton">Live Demo</button></a>
            </div>
            </div>
        )
    }
          return(
            <>
             <div id="Projects" className="projectContainer">
             <p className="projectsPara">Browse My Recent</p>
             <h1 className="projectsHeading">Projects</h1>
             <ul className="showProject">{ProjectsList.map((each)=>(
                showProjectDetails(each)
          ))}</ul>
             </div>
            </>
          )
}

export default Projects


