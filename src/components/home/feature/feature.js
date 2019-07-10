import React, { Component }				from 'react';
import FeaturesData						from './features.json';



import './feature.css';

class Feature extends Component {

	constructor(props) {
		super(props);

		this.state = {
			features: [],
			isLoaded: false,
		}
	}

	componentDidMount() {
		this.setState({
			features: FeaturesData,
			isLoaded: true
		});
		debugger
		// fetch('https://my-json-server.typicode.com/typicode/demo/comments', {
		// 	headers : { 
		// 		'Content-Type': 'application/json',
		// 		'Accept': 'application/json'
		// 	}})
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		this.setState({
		// 		features: res,
		// 		isLoaded: true
		// 	})
		// });

	}


	render() {
		

		let { isLoaded, features } = this.state;

		if(!isLoaded) {
			return <div>Loadding...</div>
		} else {

			return(
				<div className="container-fluid custom-margin mt-5">
					<div className="row">
						<div className="col-xs-12 col-md-12 col-lg-12">
							<h2 className="text-center"><b>Tinyone features</b></h2>
						</div>
						<div className="col-xs-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
							<p className="text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.
							</p>
						</div>
					</div>
					<div className="row">
						{ features.map(feature => (
							<div key={feature.id} className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
								<div className="d-flex">
									<div className="p-2">
										<img className="d-block mt-2" src={feature.imageUrl} alt={feature.alt} />
									</div>
									<div className="p-2">
										<div className="p-2">
											<h3><b>{feature.title}</b></h3>
										</div>
										<div className="p-2 m-0 p-0">
											{feature.description}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)

		}
	}
}

export default Feature;