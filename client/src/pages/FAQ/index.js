import React from "react";
import InterviewerQ from '../../components/InterviewerQ/index.js';
import IntervieweeQ from '../../components/IntervieweeQ/index.js';
import './style.css'

const FAQ = () => {
    return(
        <div className='container'>
            <h1 className='row title'>
                <strong>Frequently Asked Questions</strong>
            </h1>
            <div className='row'>
                <InterviewerQ />
                <IntervieweeQ />
            </div>
        </div>
    )
}

export default FAQ;