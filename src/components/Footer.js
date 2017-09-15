import React, { Component } from 'react';

//Export class
export default class Header extends Component {
	render() {
		return (
			<div>
				<div style={ghost} />
				<div style={footer}>
					<p style={credentials}>2017 LookApp | Made by Matyss</p>
				</div>
			</div>
		);
	}
}

const footer = {
	backgroundColor: '#00BCD4',
	borderTop: '1px solid #E8EAF6',
	textAlign: 'center',
	padding: '20px',
	position: 'relative',
	left: '0',
	bottom: '0',
	height: '60px',
	width: '100%'
};

const ghost = {
	display: 'block',
	padding: '20px',
	height: '60px',
	width: '100%'
};

const credentials = {
	fontFamily: 'Roboto',
	fontWeight: '100',
	fontSize: '0.8em',
	color: '#E8EAF6'
};
