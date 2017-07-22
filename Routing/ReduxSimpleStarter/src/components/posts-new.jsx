import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <Field name="title" label="Title" component={this.renderField} />
                <Field name="categories" label="Categories" component={this.renderField} />
                <Field name="content" label="Content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="">{field.meta.error}</div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }
}

function validate(values) {
    // console.log(values);
    const errors = {};

    // Validation logic
    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (!values.categories) {
        errors.categories = "Enter some catagories";
    }

    if (!values.content) {
        errors.content = "Enter some content please";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);