import React, { Component } from 'react';

//Component imports
import Lookup from './Lookup';
import Display from './Display';
import Header from './Header';

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
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
