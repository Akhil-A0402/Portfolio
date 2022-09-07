// import Button from "../../buttons/buttons";

const Project = (props) =>{
    return(
        <div className="project">
            
            <img src={props.image} alt={props.title} />
            <div className="project__description">
                <div className="project__title">{props.title}</div>
                <div className="project__details">{props.details}</div>
                <div className="project__links">
                    {/* {props.links.forEach(element => {
                        // <Button>element</Button>
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default Project;