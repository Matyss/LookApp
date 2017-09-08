import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

//Material-UI components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

//Validation config
const validate = values => {
	const errors = {};
	const requiredFields = ['lookup'];
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
	//Method to submit with callback
	onSubmit(values) {
		// this.props.addEat(values, () => {
		// 	this.props.history.push('/eats');
		// });
		console.log(values.lookup);
	}

	render() {
		return (
			<form>
				<div>
					<Field
						name="lookup"
						component={renderText}
						label="Enter NIP/REGON/KRS"
					/>
				</div>
				<div>
					<RaisedButton
						label="Search"
						primary={true}
						disabled={this.props.invalid}
						onClick={this.props.handleSubmit(this.onSubmit.bind(this))}
					/>
				</div>
			</form>
		);
	}
}

export default reduxForm({
	validate,
	form: 'Lookup'
})(connect(null, {})(Lookup));
