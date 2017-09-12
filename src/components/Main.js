import React, { Component } from 'react';

//Component imports
import Lookup from './Lookup';
import Display from './Display';

class Main extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to LookApp</h1>
				<div>
					<Lookup />
					<Display />
				</div>
			</div>
		);
	}
}

export default Main;
