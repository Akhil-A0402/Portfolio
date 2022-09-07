import Moveback from '../back/moveback';
import Academic from './academic';
import Experience from './Experience';
import './qualification.css';

const Qualification = () => {
    return(
        <div className="qualification">
            <Moveback />
            <Academic />
            <Experience />
        </div>
    )
}

export default Qualification;