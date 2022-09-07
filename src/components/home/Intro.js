import './intro.css';
import Move from './Move';
import Stars from './Stars';
// import interstellar from '../../assets/images/Interstellar.png';

const Intro = () =>{
    return(
        <div className="intro">
            {/* <Stars top="10" left="10"/> */}
            <Move />
            <div className="intro__introduction align__center">
                Hey,<br></br>
                I'm Akhil A. A Data Scientist and ML Engineer.
            </div>
            <div className="wave">
                <div className='wave__1'></div>
                <div className='wave__2'></div>
            </div>
        </div>
    )
}

export default Intro;