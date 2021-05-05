import React, { Component } from 'react';
import { withTitle } from '../components/title/Context';

import mf from '../assets/mf.jpg';
import './css/About.css';
import './css/PortFolio.css';

import Projects from '../components/projects/Projects';



class HomePage extends Component {

    render() {
        return (
            <div>
                <div className="content padding-64" id="about">
                    <h3 className="text-center title">ABOUT ME</h3>
                    <div className="row">
                        <div className="col m6 text-center">
                            <img className="img-me" src={mf} alt="me" />
                        </div>
                        <p className="text-about">
                            {this.props.biography}
                        </p>
                    </div>
                    <div className="link-buttons flex justify-content-center">
                        <a href="#contact" className="link text-center" rel="noopener noreferrer"><div className="button">Contact Me</div></a>
                        <a href={require('../assets/cv.jpg')} target="_blank" className="link text-center" rel="noopener noreferrer"><div className="button">Download CV</div></a>
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
    }
}

export default withTitle(HomePage, "Home");