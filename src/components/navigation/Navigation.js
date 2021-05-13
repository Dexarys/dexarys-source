import React, { Component } from 'react';

import github from '../../assets/social-logo/github.png';
import linkedin from '../../assets/social-logo/linkedin.png';
import twitter from '../../assets/social-logo/twitter.png';

import './css/Navigation.css';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    listNavItem = [
        { title: "ABOUT", to: "#about", icon: "person" },
        { title: "PORTFOLIO", to: "#portfolio", icon: "work" },
        // { title: "CONTACT", to: "#contact", icon: "mail" }
    ];

    state = {
        isToggle: false,
        isScroll: false
    }


    handleScroll() {
        if (window.scrollY < 100 && this.state.isScroll) {
            this.setState({isScroll: false});
        }
        else if (window.scrollY > 100 && !this.state.isScroll) {
            this.setState({isScroll: true});
        }
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({isToggle: true}, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu() {
        this.setState({ isToggle: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        })
    }


    render() {
        return (
            <header>
                { this.props.isShowAlert &&
                <div className="alert text-center" role="alert">
                    { this.props.msgAlert }
                </div>
                }
                <div className="top">
                    <div className={`bar ${this.state.isScroll ? 'animate-menu-top' : ''}`} id="navbar" style={{backgroundColor: this.state.isScroll ? '#cbc5bb' : ''}}>
                        { !this.state.isToggle ? (
                            <div>
                                <a className="bar-item button" href="#home"><i className="material-icons">home</i><span>HOME</span></a>
                                {
                                    this.listNavItem.map((item, i) =>
                                        <a key={ i } href={ item.to } className="bar-item button hide-small">
                                            <i className="material-icons">{ item.icon }</i><span>{ item.title }</span>
                                        </a>
                                    )
                                }
                            </div>
                        ) : (
                            <a className="bar-item button" href="#home"><i className="material-icons">home</i><span>HOME</span></a>
                        )}
                        <button className="bar-item right hide-medium hide-large toggle" onClick={this.showMenu} title="Navigation menu"><i className="material-icons">menu</i></button>
                    </div>

                    { this.state.isToggle &&
                        <div className="bar-block" id="toggle-navbar">
                            { this.listNavItem.map((item, i) =>
                                <a key={ i } href={ item.to } className="bar-item button">
                                    <i className="material-icons">{ item.icon }</i><span>{ item.title }</span>
                                </a>
                            ) }
                        </div>
                    }
                </div>
                <div className="bgimg-1 display-container opacity-min" id="home">
                    <div className="display-middle description">
                        <span className="site-title wspace text-center black xlarge padding-large wide animate-opacity">Matthieu Fallourd</span>
                        <p className="citation hide-small"><span><i className="material-icons">format_quote</i></span>{this.props.msgCitation}</p>
                        <span className="author hide-small">{this.props.msgAuthor}</span>
                    </div>
                    <div className="social flex hide-small">
                        <a href="https://github.com/Dexarys" target="_blank" rel="noopener noreferrer"><div className="social-logo"><span><img src={github} alt="github" /></span></div></a>
                        <a href="https://www.linkedin.com/in/matthieu-fallourd/" target="_blank" rel="noopener noreferrer"><div className="social-logo"><span><img src={linkedin} alt="linkedin" /></span></div></a>
                        <a href="https://twitter.com/Dexarys" target="_blank" rel="noopener noreferrer"><div className="social-logo"><span><img src={twitter} alt="twitter" /></span></div></a>
                    </div>
                </div>
            </header>
        );
    }
}




export default Navigation;