import React, { useState, Component } from "react";
import { Form, Input,Button } from 'antd';




const loginUser = async values => {

  const res = await fetch({ values });
  const data = await res.values();
  return data;
};

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Form>
        <h2>Login</h2>
        <hr />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          onClick={() => loginUser(this.state)}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default LoginForm;