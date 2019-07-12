import React, { Component }			from 'react';
import Carousel						from 'react-bootstrap/Carousel';


import './slide-show.css';

// import SlideShowModel			from './slide-show-model';

class SlideShow extends Component {

	constructor(props) {
		super(props);

		this.state = {
			slideImages: [
				{
					url: 'https://res.cloudinary.com/dyrmkipnq/image/upload/v1562659122/slide-show-image_dbckam.png',
					alt: 'image 1'
				}	
			]
		};
	}

	

	render() {
		const { slideImages } = this.state;

		return (
			<Carousel>
				{ slideImages.map((each, index) => (
					<Carousel.Item key={index}>
						<img className="d-block w-100" src={each.url} alt={each.alt} />
					</Carousel.Item>
				))}
			</Carousel>
		)	
	}
}

export default SlideShow;