import './about.css';
import Image from './Image';
import Image1 from "../../assets/images/hobbies/IMG_20210711_175308.jpg";
import Image2 from "../../assets/images/hobbies/IMG_20210620_164734.jpg";

import Image3 from "../../assets/images/hobbies/20180513_183940.jpg";
import Moveback from '../back/moveback';
import { Link } from 'react-router-dom';

const image_Sample = [{
    "path": Image1
},{
    "path": Image2
},{
    "path": Image3
}
]

const AboutMe = () => {
    return (
        <div className="about">
            <Moveback />
            <div className='about__container'>
                <div className='about__title'>About Me</div>
                <div className='about__intro text-1_2x text-default-two'>
                    Akhil A, a data scientist and ML Engineer, who is passionate about data and technologies. He loves puzzles and things that ignite the spark of curosity in him, which is one of the leading factor that helps him to be a student and have a growth mindset. He is calm and professional in his work.<br></br><br></br>
                    He is currently pursing his BE in Information Technology, and aiming to pursue a career as a ML Engineer. Being from an Army family backgound, and an alumnus of Army Public School,Kirkee, he loves disipline and to stay organized be it work or personal life.  <br></br><br></br>
                    With the help of various internships, and projects he has acquired quite good hands-on experience in the respective domains.
                </div>
                <div className='about__hobbies'>
                    <div className='about__title about__hobbies'>Hobbies and Interests</div>
                    <div className='about__sections'>
                        <div className='about__section1'>I'm an amateur photgrapher who loves to imprint the beauty through the eye of lens.</div>
                    </div>
                    <div className='about__samples'>
                        <div className='about__sample'>
                            {image_Sample.map(element => <Image path={element.path} />) }
                        </div>
                        <Link to="/about/hobbies" className='link'><div className='about__checkout text-default text-1_2x'>Checkout</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;