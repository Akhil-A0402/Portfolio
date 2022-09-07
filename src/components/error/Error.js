import {Link} from 'react-router-dom';
import './error.css';

const Error = () => {
    return(
        <div className="error">
            <div className='error__container'>
                <div className="error__message">Looks like you took a wrong turn</div>
                <Link to="/" className='error__link'><div className="error__tohome">Go to home</div></Link>
            </div>
        </div>
    )
}

export default Error;