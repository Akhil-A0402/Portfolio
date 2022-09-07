const Button = (props) => {
    return (
        <div className="project__sourcecode">
            <a href={props.source} target="_blank">props.name</a> 
        </div>
    )
}

export default Button;