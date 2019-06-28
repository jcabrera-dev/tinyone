import React, { Component } from 'react';
import logo from '../../../assets/images/logo.png';

import './lead.css';

class Lead extends Component {

	constructor(props) {
		super(props)
		this.text = props.text
	}

	render() {
		return (
			<div className='top-menu-lead'>
				<img src={logo} alt="Logo" className='logo' />
				<span>{this.text}</span>
			</div>
		)
	}
}

export default Lead;