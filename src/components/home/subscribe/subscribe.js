import React, { Component }			from 'react';

import './subscribe.css';

class Subscribe extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="subscribe-container">
					<div className="row p-0 m-0">
						<div className="col-12">
							<h2 className="text-center"><b>Keep in touch with us</b></h2>
						</div>
						<div className="col-12">
							<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
						</div>
					</div>
					<div className="row p-0 m-0">
						<div className="col-12">
							<form className="form-inline">
								<div className="form-group">
									<input type="email" className="form-control" placeholder="Enter your email to update" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Subscribe;