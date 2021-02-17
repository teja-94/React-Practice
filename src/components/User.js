import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
            email: null
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let login = this.state.login;
        let password = this.state.password;
        // etc
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" name="login" onChange={this.onChange.bind(this)} />
                <input type="password" name="password" onChange={this.onChange.bind(this)} />
                <input type="email" name="email" onChange={this.onChange.bind(this)} />
                <button type="submit">Sign Up</button>
            </form>
        );
    }
}

export default Form;