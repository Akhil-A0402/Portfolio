import Project from "./project/project";
import "./projects.css";

const project_deatils = [
    {
        "title": "abc",
        "details":"abc"
    },
    {
        "title": "abc",
        "details":"abc"
    },
    {
        "title": "abc",
        "details":"abc"
    }
]


const Projects = () => {
    return(
        <div className="projects">
            <h1 className="projects__title text-default">Innovation and Developement</h1>
            <div className="projects_wave"></div>
            <h2 className="text-default-two text-align-left">The projects I have completed so far</h2>
            <div>
            {project_deatils.map(detail => {
                return (<Project title={detail.title} details={detail.details} />)
            })}
            </div>
            {/* {project_deatils.map(element => {
                // <Project title={element.title} details={element.details} />
                
                // console.log(element);
            })} */}
        </div>
    )
}

export default Projects;