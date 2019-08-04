import React, { Component }		from 'react';

import './home.css';

import SlideShow 				from './slide-show/slide-show';
import Feature 					from './feature/feature';
import Subscribe				from './subscribe/subscribe';
import Footer					from './footer/footer';

class Home extends Component {
	// constructor() {
	// 	super()
	// }

	render() {
		return (
			<React.Fragment>
				<div>
					<SlideShow />
					<Feature />
					<Subscribe />
					<Footer />
				</div>
			</React.Fragment>
		)
	}
}

export default Home;