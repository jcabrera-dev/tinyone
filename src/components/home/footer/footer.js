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
							<div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
								<ul className="custom-address"> 
									<li>{ footer.Address.businessName }</li>
									<li><span itemProp="streetAddress">{ footer.Address.street}</span></li>
									<li><span itemProp="addressLocality">{ footer.Address.city }</span></li>
									<li><span itemProp="addressRegion">{ footer.Address.state }</span></li>
									<li className="email"><a href={ footer.Address.email } itemProp="email">{ footer.Address.email }</a></li>
									<li><span itemProp="telephone">{ footer.Address.number }</span></li>
								</ul>
							</div>
						</div>
						<div className="p-2">
							<ul className="custom-menu"> 
								{ footer.MenuOne.map(footer => (
									<li key={footer.id}><a href="/#">{footer.item}</a></li>
								))}
							</ul>
						</div>
						<div className="p-2">
							<ul className="custom-menu"> 
								{ footer.MenuTwo.map(footer => (
									<li key={footer.id}><a href="/#">{footer.item}</a></li>
								))}
							</ul>
						</div>
						<div className="p-2">
							<ul className="custom-menu"> 
								{ footer.MenuThree.map(footer => (
									<li key={footer.id}><a href="/#">{footer.item}</a></li>
								))}
							</ul>
						</div>
						<div className="p-2">
							<ul className="custom-menu"> 
								{ footer.MenuFour.map(footer => (
									<li key={footer.id}><a href="/#">{footer.item}</a></li>
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