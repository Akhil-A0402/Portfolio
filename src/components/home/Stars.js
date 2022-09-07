import './stars.css';

// style={'top:' + props.top + 'px; left:' + props.left +'px; animation-duration:'+ props.timing +'s;'
const Stars = (props) => {
    let style = {
        'top' : props.top+ "vh",
        'left': props.left+ "vw",
        'animation-duration': props.timing,
        'animation-delay': props.dealying,
        'width': props.size,
        'height': props.size
    }
    return(
        <div className={"stars"} style={style}></div>
    )
}

export default Stars;