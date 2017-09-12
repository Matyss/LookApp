import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

//Action creators
import { lookup, display } from '../actions';

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
		if (values[field] && !/^[KRSPL0-9._-]{9,14}$/i.test(values[field])) {
			errors[field] = 'Only KRS/PL prefixes and numbers are valid';
		}
		if (values[field]) {
			if (values[field].length < 9 || values[field].length > 14) {
				errors[field] = 'Entry must be between 9 and 14 characters';
			}
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
			this.props.display(lookupData[values.textfield]);
		} else {
			this.props.lookup(values);
		}
	}

	render() {
		console.log('render');

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

function mapStateToProps({ lookupData }) {
	return { lookupData };
}

export default reduxForm({
	validate,
	form: 'Lookup'
})(connect(mapStateToProps, { lookup, display })(Lookup));
