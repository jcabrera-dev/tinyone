import React, { Component }				from 'react';

import FooterJSON						from './footer.json';

import './footer.css';

class Footer extends Component {

	render() {
		let footer = FooterJSON;
		
		return (
			<div className="footer-container">
				<div className="container-fluid">
					<div className="d-flex align-content-stretch flex-wrap justify-content-center">
						<div className="p-2">
							<ul> 
								<li>{ footer.Address.businessName }</li>
								<li>{ footer.Address.street}</li>
								<li>{ footer.Address.city }</li>
								<li>{ footer.Address.state }</li>
								<li>{ footer.Address.email }</li>
								<li>{ footer.Address.number }</li>
							</ul>
						</div>
						<div className="p-2">
							<ul> 
								{ footer.MenuOne.map(footer => (
									<li key={footer.id}>{footer.item}</li>
								))}
							</ul>
						</div>
						<div className="p-2">
							<ul> 
								{ footer.MenuTwo.map(footer => (
									<li key={footer.id}>{footer.item}</li>
								))}
							</ul>
						</div>
						<div className="p-2">
							<ul> 
								{ footer.MenuThree.map(footer => (
									<li key={footer.id}>{footer.item}</li>
								))}
							</ul>
						</div>
						<div className="p-2">
							<ul> 
								{ footer.MenuFour.map(footer => (
									<li key={footer.id}>{footer.item}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;