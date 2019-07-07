import React, { Component } 		from 'react';


export default class FeaturesServices extends Component {


	GetFeaturesServices() {
		return fetch('/static/services/api/features-services.js')
					.then((response) => response.json())
					.then((responseJSON) => {
						
					}).catch((error) => {
						console.log(error);
					});
	}
	
	render() {
		
	}
}

export default FeaturesServices;