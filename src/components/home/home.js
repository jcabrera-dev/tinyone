import React, { Component }		from 'react';

import './home.css';

import SlideShow 				from './slide-show/slide-show';
import Feature 					from './feature/feature';

class Home extends Component {
	// constructor() {
	// 	super()
	// }

	render() {
		return (
			<div>
				<SlideShow />
				<Feature />
			</div>
		)
	}
}

export default Home;