import firebase from './api/firebase';

import Loader from './components/loader/Loader';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';

import './App.css';
import { Component } from 'react';

class App extends Component {
  
	state = {
		isLoading: true,
		isWebsiteOpen: true,
		isShowAlert: true,
        msgAlert: "",
        msgCitation: "",
        msgAuthor: "",
        biography: "",
        email: "",
        phone: "",
        copyright: ""
	};

	componentDidMount() {
		console.log(firebase);
		this.firebaseRefOpen = firebase.database().ref('/website_open');
		this.firebaseRefOpen.on('value', (snap) => {
			this.setState({ isWebsiteOpen: snap.val(), isLoading: false });
		});
		this.showAlertRef = firebase.database().ref('/website_alert/show_alert');
        this.showAlertRef.on('value', (snap) => {
            this.setState({ isShowAlert: snap.val() })
        });
        this.msgAlertRef = firebase.database().ref('/website_alert/message_alert');
        this.msgAlertRef.on('value', (snap) => {
            this.setState({ msgAlert: snap.val() })
        });
        this.citationRef = firebase.database().ref('/website_description/citation');
        this.citationRef.on('value', (snap) => {
            this.setState({ msgCitation: snap.val() })
        });
        this.authorRef = firebase.database().ref('/website_description/author');
        this.authorRef.on('value', (snap) => {
            this.setState({ msgAuthor: snap.val() })
        });
        this.bioRef = firebase.database().ref('/website_description/biography');
        this.bioRef.on('value', (snap) => {
            this.setState({ biography: snap.val() })
        });
        this.emailRef = firebase.database().ref('/website_description/email');
        this.emailRef.on('value', (snap) => {
            this.setState({ email: snap.val() })
        });
        this.phoneRef = firebase.database().ref('/website_description/phone');
        this.phoneRef.on('value', (snap) => {
            this.setState({ phone: snap.val() })
        });
        this.copyrightRef = firebase.database().ref('/website_description/copyright');
        this.copyrightRef.on('value', (snap) => {
            this.setState({ copyright: snap.val() })
        });
	}
	
	render() {
		return (
		<div>
			{ this.state.isLoading ? (
			<Loader />
			) : (
			this.state.isWebsiteOpen ? (
				<div>
					<div>
						<Navigation isShowAlert={this.state.isShowAlert} msgAlert={this.state.msgAlert} msgCitation={this.state.msgCitation} msgAuthor={this.state.msgAuthor} />
					</div>
					<div>
						<HomePage isEmail={this.state.email} isPhone={this.state.phone} env={this.props.env} biography={this.state.biography} />
					</div>
					<div>
						<Footer isCopyright={this.state.copyright} />
					</div>
				</div>
			) : (
				<div>
					Site close
				</div>
			)
			)}
		</div>
		);
	}
}

export default App;
