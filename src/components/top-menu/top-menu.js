import React, { Component } 	from 'react';

import { FontAwesomeIcon }		from '@fortawesome/react-fontawesome';
import { faBars }				from '@fortawesome/free-solid-svg-icons';

import Item 					from './item/item.js';
import Lead						from './lead/lead.js';

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
		debugger
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
			<div>
				<div className={top_menu_class}>
					<Lead text="tinyone" />
					<div className='menu-container'>
						<div className='right'>
							<Item text="Features" />
							<Item text="Support" />
							<Item text="Blog" />
						</div>
					</div>
					<FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass} size='2x' />
					<div className='clear-fix' />
				</div>
			</div>
		)
	}
} // closing component

export default TopMenu;
