import './image.css';

const Image = (props) => {
    return(
        <div className="sample">
            <img src={props.path} className="sample__image"></img>
        </div>
    )
}

export default Image;