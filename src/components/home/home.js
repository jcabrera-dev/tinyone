import React, { Component }		from 'react';

import './home.css';

import SlideShow 				from './slide-show/slide-show';

class Home extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<SlideShow />
			</div>
		)
	}
}

export default Home;