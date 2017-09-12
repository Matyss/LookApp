import React, { Component } from 'react';
import { connect } from 'react-redux';

class History extends Component {
	render() {
		return <div>History of searches</div>;
	}
}

export default connect(mapStateToProps)(History);
