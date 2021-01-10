import React from 'react';
import resume from '../../assets/resume.pdf'
import './style.css';

function Resume() {
    return (
        <section>
            <h2>My Resume</h2>
            <iframe src={resume} title='My Resume' type='application/pdf' width='100%' height='100%' />
        </section>
    );
}

export default Resume;