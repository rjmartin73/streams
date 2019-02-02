import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
//import authReducer from '../../reducers/authReducer';

class StreamCreate extends Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return <div className="ui pointing red basic label error">{error}</div>;
		}
	}
	renderInput = ({ input, label, placeholder, meta }) => {
		const className = `field ${meta.error && meta.touched ? ' error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" placeholder={placeholder} />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	}

	render() {
		console.log(this.state)
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
				<Field name="title" component={this.renderInput} label="Enter Title" placeholder="Title..." />
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
					placeholder="Description..."
				/>
				<button className="ui blue basic button">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		// only run if user did not enter title
		errors.title = 'Please enter a title.';
	}
	if (!formValues.description) {
		errors.description = 'Please enter a description.';
	}

	return errors;
};

const formWrapped = reduxForm({
	form: 'streamCreate',
	validate: validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
