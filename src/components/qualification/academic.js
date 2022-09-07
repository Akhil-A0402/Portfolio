import './academic.css';

const Institution = (props) => {
    return(
        <div className="institution">
            <div className='institution__details'> 
                <div className='institution__level'>{props.level}</div>
                <div className='institution__institution'>{props.institution}</div>
            </div>
            <div className='institution__duration'>
                <div className='institution__from'>{props.from}</div>
                -
                <div className='institution__to'>{props.to}</div>
            </div>
        </div>
    )
}

const Academic = () => {
    return(
        <div className="education">
            <div className='titles'>Education</div>
            <Institution level="BE Information Technology" institution="NBN Sinhgad School of Engineering, Pune" from="2019" to="2023"></Institution>
            <Institution level="HSE" institution="Army Public School, Kirkee" from="2017" to="2019"></Institution>
            <Institution level="SSE" institution="Army Public School, Kirkee" from="2010" to="2017"></Institution>
        </div>
    )
}

export default Academic;