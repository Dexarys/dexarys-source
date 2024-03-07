import React, { Component } from 'react';
// import firebase from '../../api/firebase';
import base from '../../database/base.json';

import './css/Projects.css';

class Projects extends Component {

    state = {
        projects: [],
        visible: false
    }

    constructor(props) {
        super(props);
        this.dropdown = this.dropdown.bind(this);
    }

    componentDidMount() {
        // this.projectsRef = firebase.database().ref('/projects');
        this.projectsRef = base.projects;
        let projects = [];
        this.projectsRef.forEach(function(snap) {
            projects.push(snap)
        })
        this.setState({ projects: projects });
    }

    dropdown() {
        this.setState({visible: !this.state.visible});
    }

    render() {
        return (
            <div>
                <h3 className="text-center title">PROJECTS</h3>
                <div className="flex justify-content-evenly wrap">
                    {
                        this.state.projects.map((item, i) => (
                            <a key={i} href={item.link} target="_blank" rel="noreferrer" className="link-project">
                                <div key={i} className="card">
                                    <div className="projects_img_div">
                                        <img className="projects_img" src={`${process.env.PUBLIC_URL}/img/${item.source}`} alt={item.desc_img} />
                                    </div>
                                    <p className="projects_name">{item.name}</p>
                                    <p className="projects_desc">{item.description}</p>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        );
    }

}

export default Projects;
