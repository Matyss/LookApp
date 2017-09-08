import React, { Component } from 'react';

//Component imports
import Lookup from './Lookup';

class Main extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to LookApp</h1>
				<div>
					<Lookup />
				</div>
			</div>
		);
	}
}

export default Main;
