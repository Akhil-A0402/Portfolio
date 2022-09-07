import './circle.css';

const Circle = (props) => {
    return(
        <div className={"circle "+ props.size}></div>
    )
}

export default Circle;