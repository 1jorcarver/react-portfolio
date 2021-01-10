import React from 'react';
import profilePicture from '../../assets/profilePic.jpg';
import './style.css';

function About() {
    return (
        <section className='d-flex justify-content-md-start flex-wrap about'>
            <div id='about-head'>
                <h3>About Me</h3>
                <img className='profile-picture' src={profilePicture} alt='Profile' />
            </div>
            <div>
                <article>
                    <p className='text-start'>
                        <p>
                            I am a consultant learning to code with amazing kids, spouse, and dog!
                        </p>                       
                    </p>
                </article>
            </div>
        </section>
    );
}

export default About;