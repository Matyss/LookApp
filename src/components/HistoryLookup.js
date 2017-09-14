import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { remove } from '../actions';

//Import Material-UI component
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

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

	//Entries removal controller
	componentWillMount() {
		const { lookupData } = this.props;
		const now = Date.now();
		const setTime = 86400000 * this.state.counter; //SET THIS PROPERTY!!!
		_.map(lookupData, (item, i) => {
			let startDate = +new Date(item.BusinessActivityStart);
			if (now - startDate > setTime) {
				const key = i;
				this.props.remove(key);
			}
		});
	}

	handleRemove() {}

	handleAdd() {}

	//Searchbar controller
	updateSearch(e) {
		this.setState({ search: e.target.value.substr(0, 15) });
	}

	//Text company info display
	toggleText() {
		this.setState({
			hidden: !this.state.hidden
		});
	}

	//Helper function to render filtered entires
	renderListItems() {
		const arrayCompanies = _.values(this.props.lookupData);

		const filteredCompanies = arrayCompanies.filter(item => {
			return (
				item.Name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
			);
		});

		return _.map(filteredCompanies, (company, i) => {
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
					key={i}
				/>
			);
		});
	}

	//Main render function for this component
	render() {
		return (
			<div>
				<Header />
				<div style={FloatBtn}>
					<FloatingActionButton
						secondary
						style={{ margin: '5px' }}
						onClick={this.handleAdd.bind(this)}
					>
						<ContentAdd />
					</FloatingActionButton>
					<FloatingActionButton
						style={{ margin: '5px' }}
						onClick={this.handleRemove.bind(this)}
					>
						<ContentRemove />
					</FloatingActionButton>
					<p className="text-muted">
						Remove entries after: {this.state.counter}{' '}
						{this.state.counter === 1 ? 'day' : 'days'}
					</p>
				</div>
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

//Stylings
const FloatBtn = {
	float: 'right',
	padding: '20px',
	margin: '10px',
	textAlign: 'center'
};

//Export and props
function mapStateToProps({ lookupData }) {
	return { lookupData };
}

export default connect(mapStateToProps, { remove })(HistoryLookup);
