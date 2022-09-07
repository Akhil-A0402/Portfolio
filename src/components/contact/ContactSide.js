import Linkedin from '../../assets/images/001-linkedin.png';
import Github from '../../assets/images/002-github-sign.png';
import Telegram from '../../assets/images/003-telegram.png';
import './contactSide.css';

const ContactSide = () => {
    return(
        <div className="contactSide">
            <div className="contactSide__message">Contact&nbsp;Me</div>
            <div className="contactSide__logos">
                <a href="https://www.linkedin.com/in/akhil-a-nair/" target="_blank" className='contact__link'><img src={Linkedin} className="contactSide__contactLogo" alt="LinkedIn"/></a>
                <a href="https://github.com/Akhil-A0402" target="_blank" className='contact__link'><img src={Github} className="contactSide__contactLogo" alt="Github"/></a>
                <a href="https://t.me/AkhilA0402" target="_blank" className='contact__link'><img src={Telegram} className="contactSide__contactLogo" alt="Telegram"/></a>
            </div>
        </div>
    )
}

export default ContactSide;