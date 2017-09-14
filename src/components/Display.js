import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Material-UI
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui/Table';

//Spinner
import Spinner from 'react-spinkit';

class Display extends Component {
	render() {
		let company = this.props.display;

		//Conditional rendering of display component
		if (!company && !this.props.error) {
			return (
				<div>
					<p style={{ color: '#00BCD4' }}>
						Please enter the correct number and click <strong>LOOKUP</strong>
					</p>
				</div>
			);
		} else if (this.props.error && !company) {
			return (
				<div>
					<p style={{ color: '#FF4081' }}>
						Company with given number was not found
					</p>
				</div>
			);
		} else if (this.props.loader) {
			return (
				<div style={{ margin: '2em auto' }}>
					<Spinner name="ball-scale-multiple" color="#00BCD4" />
				</div>
			);
		}

		//Table body with data
		return (
			<Table style={{ minWidth: '400px' }}>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn
							colSpan="2"
							tooltip="Information about company you searched for"
							style={{ textAlign: 'center', fontSize: '1.5em' }}
						>
							{company.Name} company details:
						</TableHeaderColumn>
					</TableRow>
					<TableRow>
						<TableHeaderColumn>Information</TableHeaderColumn>
						<TableHeaderColumn>Value</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableRowColumn>Regon</TableRowColumn>
						<TableRowColumn>
							{company.Regon}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Name</TableRowColumn>
						<TableRowColumn>
							{company.Name}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Province</TableRowColumn>
						<TableRowColumn>
							{company.Province}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>County</TableRowColumn>
						<TableRowColumn>
							{company.County}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>City / Postal Code</TableRowColumn>
						<TableRowColumn>
							{company.Place} / {company.PostalCode}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Address</TableRowColumn>
						<TableRowColumn>
							{company.Street} str, {company.HouseNumber}/{company.ApartmentNumber}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Business Type</TableRowColumn>
						<TableRowColumn>
							{company.Type}
						</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		);
	}
}

function mapStateToProps({ display, error, loader }) {
	return { display, error, loader };
}

export default connect(mapStateToProps)(Display);
