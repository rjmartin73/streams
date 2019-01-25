import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
	constructor(props) {
		super(props);
    }
    renderError({error, touched}){
        if (touched && error) {
            return(
                <div className="ui pointing red basic label error">{error}</div>
            )
        }
    }
	renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? ' error': ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
                {this.renderError(meta)}
				
			</div>
		);
	}

	onSubmit(formValues) {
        console.log(formValues);
    }

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field name="description" component={this.renderInput} label="Enter Description" />
				<button className="ui blue basic button">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		// only run if user did not enter title
		errors.title = 'You must enter a title.';
	}
	if (!formValues.description) {
		errors.description = 'Please enter a description';
	}

	return errors;
};

export default reduxForm({
	form: 'streamCreate',
	validate: validate
})(StreamCreate);
