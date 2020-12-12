import React, { Component } from 'react';
import firebase from '../../api/firebase';

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

    componentWillMount() {
        this.projectsRef = firebase.database().ref('/projects');
        this.projectsRef.orderByChild("order").limitToLast(9).on('value', (snap) => {
            let data = [];
            snap.forEach((childSnap) => { data.push(childSnap.val()) })
            this.setState({ projects: data });
        });
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
                            <a key={i} href={item.link} target="_blank" className="link-project">
                                <div key={i} className="card">
                                    <div>
                                        <img className="projects_img" src={require('../../assets/content/'+item.source)} alt={item.desc_img} />
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