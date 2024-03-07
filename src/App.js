import Loader from './components/loader/Loader';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';

import './App.css';
import { Component } from 'react';

import base from './database/base.json';

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
        this.setState({ isWebsiteOpen: base.website_open });
        this.setState({ isShowAlert: base.website_alert.show_alert })
        this.setState({ msgAlert: base.website_alert.message_alert })
        this.setState({ msgAuthor: base.website_description.author })
        this.setState({ biography: base.website_description.biography })
        this.setState({ interest: base.website_description.interest })
        this.setState({ msgCitation: base.website_description.citation })
        this.setState({ copyright: base.website_description.copyright })
        this.setState({ email: base.website_description.email })
        this.setState({ phone: base.website_description.phone })
        this.setState({ isLoading: false })
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
						<HomePage isEmail={this.state.email} isPhone={this.state.phone} env={this.props.env} biography={this.state.biography} interest={this.state.interest} />
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
