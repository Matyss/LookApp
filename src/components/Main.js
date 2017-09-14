import React, { Component } from 'react';

//Component imports
import Lookup from './Lookup';
import Display from './Display';
import Header from './Header';

//Animations
import { CSSTransition, transit } from 'react-css-transition';

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<CSSTransition
					defaultStyle={{ opacity: '0' }}
					enterStyle={{ opacity: transit(1.0, 500, 'ease-in-out') }}
					active={true}
					transitionAppear
				>
					<div className="container">
						<div style={styleRows} className="row">
							<Lookup />
						</div>
						<div style={styleRows} className="row">
							<Display />
						</div>
					</div>
				</CSSTransition>
			</div>
		);
	}
}

const styleRows = {
	margin: '20px 0',
	padding: '20px'
};

export default Main;
