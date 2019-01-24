import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
	constructor(props) {
		super(props);
	}
	renderInput({ input, label, meta }) {
        return (
			<div className="field">
				<label>{label}</label>
				<input {...input} />
                <div className="ui red message">{meta.error}</div>
			</div>
		);
    }

    onSubmit(formValues){
       
    }

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field name="description" component={this.renderInput} label="Enter Description" />
			<button className="ui button primary">Submit</button>
            </form>
		);
	}
}

const validate = (formValues) =>{
    const errors = {};

    if(!formValues.title && 1===2){
        // only run if user did not enter title
       errors.title =  "Please enter a title."
    }
    if(!formValues.description && 1 === 2){
        errors.description = "Please enter a description"
    }

    return errors;
    
}

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);
