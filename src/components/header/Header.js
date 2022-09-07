    import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

    const show = () => {
        const list = document.getElementsByClassName('header__section')[0];
        list.classList.toggle('header__show');
    }
    return(
        <header>
            <div className='header__section'>
            <div className="header__options header__knowmore option__properties">Know More
            <div className="header__optionsmore option__properties">                
                <Link to="/qualification" className='header__link' onClick={show}><div className="header__optionmore option__properties">Qualification</div></Link>
                <Link to="/projects" className='header__link' onClick={show}><div className="header__optionmore option__properties">Projects</div></Link>
                {/* <Link to="/clients" className='header__link' onClick={show}><div className="header__optionmore option__properties">Client</div></Link> */}
                <Link to="/about-me" className='header__link' onClick={show}><div className="header__optionmore option__properties">About Me</div></Link>
            </div>
            </div>
            <Link to="/resume" className='header__link'><div className="header__options option__properties" onClick={show}>Resume</div></Link>
            </div>
            <div className='header__hamburger' onClick={show}>
                <div className='header__bar'></div>
                <div className='header__bar'></div>
            </div>
        </header>
    )
}

export default Header;