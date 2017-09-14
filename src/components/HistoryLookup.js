import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import * as actions from '../actions';

//Import Material-UI component
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

//Animations
import { CSSTransition, transit } from 'react-css-transition';

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
		const setTime = 86400000 * this.props.counter;
		_.map(lookupData, (item, i) => {
			let startDate = +new Date(item.BusinessActivityStart);
			if (now - startDate > setTime) {
				const key = i;
				this.props.remove(key);
			}
		});
	}

	handleDecrement() {
		if (this.props.counter > 1) {
			this.props.decrement();
		}
	}

	handleIncrement() {
		if (this.props.counter < 14) {
			this.props.increment();
		}
	}

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
				<CSSTransition
					defaultStyle={{ opacity: '0' }}
					enterStyle={{ opacity: transit(1.0, 500, 'ease-in-out') }}
					active={true}
					transitionAppear
				>
					<div>
						<div style={FloatBtn}>
							<FloatingActionButton
								secondary
								style={{ margin: '5px' }}
								onClick={this.handleIncrement.bind(this)}
							>
								<ContentAdd />
							</FloatingActionButton>
							<FloatingActionButton
								style={{ margin: '5px' }}
								onClick={this.handleDecrement.bind(this)}
							>
								<ContentRemove />
							</FloatingActionButton>
							<p className="text-muted" style={{ fontWeight: '300' }}>
								Remove entries after: {this.props.counter}{' '}
								{this.props.counter === 1 ? 'day' : 'days'}
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
				</CSSTransition>
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
function mapStateToProps({ lookupData, counter }) {
	return { lookupData, counter };
}

export default connect(mapStateToProps, actions)(HistoryLookup);
