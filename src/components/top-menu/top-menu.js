import React, { Component } 	from 'react';
import { 
		BrowserRouter as Router, 
		Route, 
		Link }					from 'react-router-dom';

import { FontAwesomeIcon }		from '@fortawesome/react-fontawesome';
import { faBars }				from '@fortawesome/free-solid-svg-icons';

import Item 					from './item/item.js';
import Lead						from './lead/lead.js';
import Home						from '../home/home.js';

import './top-menu.css';

class TopMenu extends Component {

	constructor(props) {
		// super() calls the constructor of it's parent class
		// when adding "props" it will make it available across the component
		super(props)

		this.state = {
			menu_class: '',
		}
	}

	setToggleTopMenuClass = () => {
		if(this.state.menu_class === '') {
			this.setState({
				menu_class: 'toggled',
			})
		} else {
			this.setState({
				menu_class: '',
			})
		}
	}

	render = () => {
		
		let top_menu_class = `top-menu ${this.state.menu_class}`

		return (
			<Router basename="/tinyone/">
				<div>
					<div className={top_menu_class}>
						<Lead text="tinyone" />
						<div className='menu-container'>
							<div className='right'>
								{/* base of the url */}
								<Link to="/tinyone"><Item text="Features" /></Link>
								<Link to="/tinyone"><Item text="Support" /></Link>
								<Link to="/tinyone"><Item text="Blog" /></Link>
							</div>
						</div>
						<FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass} size='2x' />
						<div className='clear-fix' />
					</div>
					<Route exact path="/tinyone/" component={Home} />
				</div>
			</Router>
		)
	}
} // closing component

export default TopMenu;
