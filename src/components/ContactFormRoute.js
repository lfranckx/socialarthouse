import React, { Component } from 'react';
import ContactForm from './ContactForm';
import '../styles/ContactForm.scss';

export default class LoginRoute extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        }
    }

    handleSubmitSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/';
        history.push(destination);
    }

    render() {
        return (
            <ContactForm 
                onSubmitSuccess={this.handleSubmitSuccess}
            />
        )
    }
}