import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Material-UI component
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';

//Import component
import Header from './Header';

class HistoryLookup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hidden: true,
			search: ''
		};
	}

	updateSearch(e) {
		this.setState({ search: e.target.value.substr(0, 15) });
	}

	toggleText() {
		this.setState({
			hidden: !this.state.hidden
		});
	}

	renderListItems() {
		const arrayCompanies = _.values(this.props.lookupData);

		const filteredCompanies = arrayCompanies.filter(item => {
			return (
				item.Name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
			);
		});

		return _.map(filteredCompanies, company => {
			return (
				<ListItem
					primaryText={`Company name: ${company.Name}`}
					secondaryText={
						this.state.hidden
							? null
							: `Regon: ${company.Regon} | Address: ${company.Street}
              ${company.HouseNumber}/${company.ApartmentNumber},
              ${company.PostalCode} ${company.Place}`
					}
					secondaryTextLines={2}
					onClick={this.toggleText.bind(this)}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<TextField
						hintText="Search for company name"
						fullWidth={true}
						value={this.state.search}
						onChange={this.updateSearch.bind(this)}
					/>
					<div>
						<List>
							{this.renderListItems()}
						</List>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ lookupData }) {
	return { lookupData };
}

export default connect(mapStateToProps)(HistoryLookup);
