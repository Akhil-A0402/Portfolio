import './move.css';
import Stars from "./Stars";

const Move = () =>{

    let arr = [];

    for(var i=0;i<100;i++)
            arr.push(<Stars top={Math.ceil(Math.random()*100)}  left={Math.ceil(Math.random()*100)} timing={Math.random()*100} delaying={Math.random()*-10} size={Math.random()*4} />);

    return(
        <div className="move">
            {arr.map((element) => element)}
            
        </div>
    )
}

export default Move;