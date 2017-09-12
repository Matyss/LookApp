import React, { Component } from 'react';

//Component imports
import Lookup from './Lookup';
import Display from './Display';

class Main extends Component {
	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-3">Welcome to LookApp</h1>
						<p className="lead">
							Search for companies using NIP, REGON or KRS number.
						</p>
					</div>
				</div>
				<div className="container">
					<div style={styleRows} className="row">
						<Lookup />
					</div>
					<div style={styleRows} className="row">
						<Display />
					</div>
				</div>
			</div>
		);
	}
}

const styleRows = {
	margin: '20px 0',
	padding: '20px'
};

export default Main;
