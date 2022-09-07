import './imageSmall.css';

window.addEventListener('click', (e) => {
    const element = e.target;
    if(element.classList[0]=="imageView__image"){
        element.parentElement.classList.toggle('imageView__size');
        element.classList.toggle('size');
        window.scrollTo(0,(element.offsetTop - 50));
    }
})

const ImageView = (props) => {
    return(
        <div className="imageView">
            <img src={props.image} alt={props.name} className={"imageView__image "+props.orientation} id={props.name}></img>
        </div>
    )
}

export default ImageView;