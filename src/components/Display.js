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

class Display extends Component {
	render() {
		let company = this.props.display;

		if (!company) {
			return (
				<div>
					<h6>Please enter the correct number and click LOOKUP</h6>
				</div>
			);
		}
		return (
			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn
							colSpan="3"
							tooltip="Super Header"
							style={{ textAlign: 'center' }}
						>
							{company.Name} company details:
						</TableHeaderColumn>
					</TableRow>
					<TableRow>
						<TableHeaderColumn>ID</TableHeaderColumn>
						<TableHeaderColumn>Information</TableHeaderColumn>
						<TableHeaderColumn>Value</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableRowColumn>1</TableRowColumn>
						<TableRowColumn>Regon</TableRowColumn>
						<TableRowColumn>
							{company.Regon}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>2</TableRowColumn>
						<TableRowColumn>Name</TableRowColumn>
						<TableRowColumn>
							{company.Name}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>3</TableRowColumn>
						<TableRowColumn>Province</TableRowColumn>
						<TableRowColumn>
							{company.Province}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>4</TableRowColumn>
						<TableRowColumn>County</TableRowColumn>
						<TableRowColumn>
							{company.County}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>5</TableRowColumn>
						<TableRowColumn>City / Postal Code</TableRowColumn>
						<TableRowColumn>
							{company.Place} / {company.PostalCode}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>6</TableRowColumn>
						<TableRowColumn>Address</TableRowColumn>
						<TableRowColumn>
							{company.Street} str, {company.HouseNumber}/{company.ApartmentNumber}
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>7</TableRowColumn>
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

function mapStateToProps({ display }) {
	return { display };
}

export default connect(mapStateToProps)(Display);
