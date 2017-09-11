import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

//Action creators
import { lookup } from '../actions';

//Material-UI components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

//Validation config
const validate = values => {
	const errors = {};
	const requiredFields = ['textfield'];
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Required';
		}
	});
	return errors;
};

//Render Field out of Render() method not to cause re-render of text field
//on every change of state
const renderText = ({ input, label, meta: { touched, error }, ...custom }) =>
	<TextField
		hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		{...custom}
	/>;

//Form component
class Lookup extends Component {
	//Method to submit with history check
	onSubmit(values) {
		const { lookupData } = this.props;

		if (lookupData[values.textfield]) {
			console.log('its there');
		} else {
			this.props.lookup(values);
		}
	}

	render() {
		return (
			<form>
				<div>
					<Field
						name="textfield"
						component={renderText}
						label="Enter NIP/REGON/KRS"
					/>
				</div>
				<div>
					<RaisedButton
						label="lookup"
						primary={true}
						disabled={this.props.invalid}
						onClick={this.props.handleSubmit(this.onSubmit.bind(this))}
					/>
				</div>
			</form>
		);
	}
}

function mapDispatchToProps({ lookupData }) {
	return { lookupData };
}

export default reduxForm({
	validate,
	form: 'Lookup'
})(connect(mapDispatchToProps, { lookup })(Lookup));
