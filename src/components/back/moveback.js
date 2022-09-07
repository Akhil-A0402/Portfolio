// import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './moveback.css';

const Moveback = () =>{
    // let history = useHistory();

    // const moveback = () => {
    //     history.push('/');
    // }
    return(
        <Link to="/">
        <div className="moveback">
            <div className='moveback__bar bar__top'></div>
            <div className='moveback__bar bar__bottom'></div>
        </div>
        </Link>
    )
}

export default Moveback;