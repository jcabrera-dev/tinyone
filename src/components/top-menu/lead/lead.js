import React, { Component } from 'react';


import './lead.css';

class Lead extends Component {

	constructor(props) {
		super(props)
		this.text = props.text
	}

	render() {
		return (
			<div className='top-menu-lead'>
				<img src='https://res.cloudinary.com/dyrmkipnq/image/upload/v1562738360/logo_s5ejhl.png' alt="Logo" className='logo' />
				<span>{this.text}</span>
			</div>
		)
	}
}

export default Lead;