import React, { Component } from 'react';
import Api from '../helpers/api';
import { Button, DatePicker } from 'antd'
import LoginForm from "../components/Form"
import Logo from "../../public/assets/logo.svg"
//"../../public/assets/logo.svg"

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { name: 'Bob' };
		this.handleInput = this.handleInput.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		// Do something when loaded
	}

	handleInput(e) {
		this.setState({ name: e.target.value });
	}

	handleSearch(e) {
		e.preventDefault();
		this.setState({ name: e.target.value });
		Api.testDatabase(this.state.name).then(data => {
			console.log(data);
		});
	}

	render() {
		const { name } = this.state;

		return (
			<div className="container center">
				<h1 style={{ color: 'black', textAlign: 'left' }}> Login </h1>
				<LoginForm />
			</div>

		);
	}
}

export default Home;
