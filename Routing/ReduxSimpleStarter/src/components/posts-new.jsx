import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends React.Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" label="Title" component={this.renderField} />
                <Field name="categories" label="Categories" component={this.renderField} />
                <Field name="content" label="Content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger" >Cancel</Link>
            </form>
        );
    }

    renderField(field) {

        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            // Navigate user to index '/'
            this.props.history.push('/');
        });

    }
}

function validate(values) {
    // console.log(values);
    const errors = {};

    // Validation logic
    if (!values.title) {
        errors.title = "Enter a title";
    }

    if (!values.categories) {
        errors.categories = "Enter some catagories";
    }

    if (!values.content) {
        errors.content = "Enter some content please";
    }

    return errors;
}

// This looks terrible, but is how we chain the connection from a component -> redux -> redux form
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
    );