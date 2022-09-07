import { Link } from 'react-router-dom';
import './experience.css';
import link from '../../assets/images/link.png';

const Exp = (props) => {
    return(
        <div className='exp'>
            <div className='exp__detail'>
                <div className='exp__details'>
                    <div className='exp__role'>{props.role}</div>
                    <div className='exp__org'>{props.org}</div>
                </div>
                <div className='exp__place'>{props.place}</div>
            </div>
            <div className='exp__duration'>
                <div className='exp__time'>
                    <div className='exp__from'>{props.from}</div>
                    -
                    <div className='exp__to'>{props.to}</div>
                </div>
                <div className='exp__total'>{props.total}</div>
            </div>
            <div className='exp__duties'>
                <ul type="disc">
                {props.duties.map(element => {
                    return(
                    <li className='exp__bul'>{element}</li>
                    )
                })}
                </ul>
            </div>
            <div className="exp__title">Projects</div>
            <div className='exp__projects'>
                {props.projects.map(element => {
                    return(
                        <div className="exp__project">
                            <div className='exp__name'>{element.name}</div>
                            {element.state?<a href={element.link} target="_blank"><img src={link} className="exp__image" alt={element.name}></img></a>: null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const exp_data = [
    {"role":"Web Developer", "org": "Always Sahi Solutions, pvt Ltd.", "place":"Pune", "from": "March, 2021", "to": "March, 2022","total":"1 Year, 1 month", "duties": ['Hands-on experience in live projects.',
    'Lead the team, to responsive websites with the help of agile methodology.',
    'Skills enhanced in HTML5, CSS3, Javascript, and React Js Basics.',
    'UI design using Figma.'], "projects": [{"name":"Always Sahi Academy", "link": "https://academy.alwayssahi.com/", "state":true}, {"name":"Always Sahi Consultancy", "link": "https://consultancy.alwayssahi.com/", "state":true}, {"name":"ASA LMS Portal", "link": "https://always-sahi-academy.herokuapp.com/", "state":true}] },
    {"role":"Machine Learning Intern", "org": "Sparks Foundation","place": "Remote", "from": "July, 2021", "to": "Aug, 2021","total":"1 month", "duties": ['Statistical analysis on various dataset, to develop models with high accuracy for prediction.','Analysis, and training of the dataset using Python, and respective libraries.'], "projects": [{"name":"Project Repository", "link": "https://github.com/Akhil-A0402/Sparks-Machine-Learning-Internship-", "state":true}] },
    {"role":"Machine Learning Intern", "org": "Mass Technologies, LLC", "place":"Pune", "from": "Oct, 2020", "to": "Nov, 2020","total":"2 months", "duties": ['Develop highly accurate model for the prediction using various machine learning algorithms.','Statistical analysis of the dataset using python.','Data wrangling, and normalizations of dataset, and optimization of the model.'], "projects": [{"name":"ASD Prediction using ML", "link": "#", "state":false}] }
]

const Experience = () => {
    return (
        <div className="experience">
            <div className="titles">Experience</div>
            {exp_data.map(element => {
                return(
                <Exp role={element.role} org={element.org} place={element.place} from={element.from} to={element.to} total={element.total} duties={element.duties} projects={element.projects}></Exp>
                )
            })}
        </div>
    )
}

export default Experience;