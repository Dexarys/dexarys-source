import React, { useEffect, useState } from 'react';

import github from '../../assets/social-logo/github.png';
import linkedin from '../../assets/social-logo/linkedin.png';
import twitter from '../../assets/social-logo/twitter.png';

import './css/Navigation.css';

const Navigation = ({ isShowAlert, msgAlert, msgCitation, msgAuthor }) => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 100);
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const listNavItem = [
        { title: "ABOUT", to: "#about", icon: "person" },
        { title: "PORTFOLIO", to: "#portfolio", icon: "work" },
    ];

    return (
        <header>
            {isShowAlert && <div className="alert text-center" role="alert">{msgAlert}</div>}
            <div className='top'>
                <div className={`bar ${isScroll ? 'animate-menu-top' : ''}`} id="navbar" style={{ backgroundColor: isScroll ? '#cbc5bb' : '' }}>
                    <a className="bar-item button" href="#home">
                        <i className="material-icons">home</i><span>HOME</span>
                    </a>
                    {listNavItem.map((item, i) => (
                        <a key={i} href={item.to} className="bar-item button hide-small">
                            <i className="material-icons">{item.icon}</i><span>{item.title}</span>
                        </a>
                    ))}
                    <button className="bar-item right hide-medium hide-large toggle" onClick={() => setIsToggle(!isToggle)} title="Navigation menu">
                        <i className="material-icons">menu</i>
                    </button>
                </div>
            </div>
            <div className="bgimg-1 display-container opacity-min" id="home">
                <div className="display-middle description">
                    <span className="site-title wspace text-center black xlarge padding-large wide animate-opacity">Matthieu Fallourd</span>
                    <p className="citation hide-small">
                        <span><i className="material-icons">format_quote</i></span>{msgCitation}
                    </p>
                    <span className="author hide-small">{msgAuthor}</span>
                </div>
                <div className="social flex hide-small">
                    <a href="https://github.com/Dexarys" target="_blank" rel="noopener noreferrer">
                        <div className="social-logo"><span><img src={github} alt="github" /></span></div>
                    </a>
                    <a href="https://www.linkedin.com/in/matthieu-fallourd/" target="_blank" rel="noopener noreferrer">
                        <div className="social-logo"><span><img src={linkedin} alt="linkedin" /></span></div>
                    </a>
                    <a href="https://twitter.com/Dexarys" target="_blank" rel="noopener noreferrer">
                        <div className="social-logo"><span><img src={twitter} alt="twitter" /></span></div>
                    </a>
                </div>
            </div>
        </header>
    );
};




export default Navigation;
