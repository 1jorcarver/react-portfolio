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
                            Welcome to webCarver Productions!
                        </p>
                        <p>
                        I currently live in Salt Lake City on the campus of the University of Utah with my wife, two boys, girl, and dog. I am a stay-at-home father. But in my spare time, I consult student-athletes and their families in finding opportunities to play college soccer. I am also an adjunct professor at Iowa Western Community College in Sport and Exercise Psychology and Psychology. In addition, I am a volunteer coach for the men’s and women’s soccer programs at Salt Lake Community College. I hope you find this website helpful in determining my abilities as a web developer.
                        </p>
                        <p>
                            My background in the web development world started in 2020 with the University of Utah’s Coding Bootcamp. However, prior to coding, I was the Head Men's Soccer Coach at Iowa Western Community College. I led the men's team to a national championship in 2013. Since 2008, I have served in multiple leadership roles at Iowa Western, for Council Bluffs Soccer Club, and United Soccer Coaches.
                        </p>
                        <p>
                            As you can see, my background in coding is relatively young. However, my professional experiences have spanned over a decade where I worked collaboratively as a team leader and player. Because of these experiences, coupled with my coding education and abilities, I am a candidate of high impact for your company.
                        </p>                       
                    </p>
                </article>
            </div>
        </section>
    );
}

export default About;