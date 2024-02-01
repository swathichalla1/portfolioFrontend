import './index.css'

const Skills = ()=>{
    const SkillList = [
        {
            title: 'Frontend Development',
            items: ['HTML','CSS','Bootstrap','JavaScript','React Js']
        },
        {
            title: 'Backend Development',
            items: ['Python','Node JS','Express JS'],
        },
        {
            title:"Data Base",
            items:["Sqlite"]
        }
    ];

    const renderSkillSet = (each)=>{
        return(
            <div className="eachDomain">
            <h1 className="eachTitle">{each.title}</h1>
            <div className="skill">
            {each.items.map((eachOne)=>(
                
                <p className="eachSkill">{eachOne}</p>
                
        ))}
        </div>
            </div>
        )
    }
    return(
        <>
        <div id="Skills" className="skillContainer">
        <h1 className="skillHeading">Skills</h1>
            {SkillList.map((each)=>(
                renderSkillSet(each)
            ))}
        </div>
        </>

    )
}

export default Skills