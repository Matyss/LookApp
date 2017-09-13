import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Import Material-UI element
import RaisedButton from 'material-ui/RaisedButton';

//Export class
export default class Header extends Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-3">Welcome to LookApp</h1>
					<p className="lead">
						Search for companies using NIP, REGON or KRS number.
					</p>
					<Link to="/">
						<RaisedButton
							style={myButton}
							label="Search"
							secondary={true}
							label="search"
						/>
					</Link>
					<Link to="/history">
						<RaisedButton
							style={myButton}
							label="History"
							primary={true}
							label="history"
						/>
					</Link>
				</div>
			</div>
		);
	}
}

const myButton = {
	margin: '10px'
};
