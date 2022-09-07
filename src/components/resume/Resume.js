import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Moveback from "../back/moveback";
import  resume from './../../assets/pdf/AkhilANew.pdf'; 
import './resume.css';

const Resume = () => {
    const [numPages, setnumPages] = useState(null);
    const [pageNumber, setpageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages}) =>{
        setnumPages(numPages);
    }

    const messageErase = () => {
        const message=document.getElementsByClassName("message")[0];
        console.log(message);
    }

    const message = (props) => {
        return(
            <div className="message" onLoad={messageErase}>
                {props.message}
            </div>
        )
    }

    const increament  = () => {
        if(pageNumber<numPages)
            setpageNumber(pageNumber+1);
        else{
            <div message="Last Page Reached" />
        }
    }

    const decrement = () => {
        if(pageNumber>1)
            setpageNumber(pageNumber-1);
        else{
            <message message="First Page Reached" />
        }
    }

    return(
        <div>
            <Moveback />
            <div className="document__navigate document__left" onClick={decrement}>Previous</div>
            <div className="document__navigate document__right" onClick={increament}>Next</div>

            <div className="document">
                <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </div>
    )
}

export default Resume;