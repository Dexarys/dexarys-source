import React, { Component } from 'react';

import github from '../../assets/social-logo/github-white.png';
import linkedin from '../../assets/social-logo/linkedin-white.png';
import twitter from '../../assets/social-logo/twitter-white.png';

import './css/Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className="footer text-white text-center center">
                <div className="content padding-40">
                    <div className="footer-link">
                        <a href="#home" className="link text-center"><div className="button"><i className="material-icons">arrow_drop_up</i><span>Return to the top</span></div></a>
                    </div>
                    <div className="social-footer flex justify-content-center">
                        <a href="https://github.com/Remanx" target="_blank" rel="noopener noreferrer"><div className="social-logo"><span><img src={github} alt="github" /></span></div></a>
                        <a href="https://www.linkedin.com/in/matthieu-fallourd/" target="_blank" rel="noopener noreferrer"><div className="social-logo"><span><img src={linkedin} alt="linkedin" /></span></div></a>
                        <a href="https://twitter.com/RemanxTM" target="_blank" rel="noopener noreferrer"><div className="social-logo"><span><img src={twitter} alt="twitter" /></span></div></a>
                    </div>
                    <div className="Copyright">
                        <p>{this.props.isCopyright}</p>
                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;