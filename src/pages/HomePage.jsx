import React from 'react';
import { withTitle } from '../components/title/Context';

import mf from '../assets/content/mf.jpg';
import cv from '../assets/cv.pdf';
import './css/About.css';
import './css/PortFolio.css';

import Projects from '../components/projects/Projects';

const HomePage = ({ biography, interest, hobbies, mark }) => {
    let myDate = new Date('1996-12-20');
    let diff = Date.now() - myDate;
    let diffDate = new Date(diff);
    let age =  Math.abs(diffDate.getUTCFullYear() - 1970);

    biography =  biography.replace("{age}", age);
    return (
        <div>
            <div className="content padding-64" id="about">
                <h4 className='text-mark'>{mark} {React.version}</h4>
                <h3 className="text-center title">ABOUT ME</h3>
                <div className="row">
                    <div className="col m6 text-center">
                        <img className="img-me" src={mf} alt="me" />
                    </div>
                    <div class="about-content">
                      <p className="text-about">{biography}</p>
                      <p className='text-about'>{interest}</p>
                      <p className='text-about'>{hobbies}</p>
                    </div>
                </div>
                <div className="link-buttons flex justify-content-center">
                    <a href={cv} download="cv.pdf" target="_blank" className="link text-center" rel="noopener noreferrer">
                        <div className="button">Download CV</div>
                    </a>
                </div>
            </div>

            <div className="bgimg-4 display-container opacity-min">
                <div className="display-middle">
                    <span className="wide text-white xlarge black padding-large">PORTFOLIO</span>
                </div>
            </div>
            <div className="padding-64" id="portfolio">
                <div className="content">
                    <Projects />
                </div>
            </div>
        </div>
    );
};

export default withTitle(HomePage, "Home");
