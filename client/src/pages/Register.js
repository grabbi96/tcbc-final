import React, { Component } from "react";
import { Form, Row, Col, Button, Alert } from "reactstrap";
import TextInput from "../components/Forms/TextInput";
import registerValidator from "../validator/registerValidator";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { register } from "../store/actions/authAction";
class Register extends Component {
  state = {
    name: {
      value: "",
      touched: false
    },
    email: {
      value: "",
      touched: false
    },
    password: {
      value: "",
      touched: false
    },
    confirmPassword: {
      value: "",
      touched: false
    },
    error: {}
  };
  changeHandler = event => {
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        value: event.target.value
      }
    });

    let error = registerValidator(this.state);

    if (Object.keys(error).length > 0) {
      this.setState({ error });
    } else {
      this.setState((prevState, props) => {
        return {
          error: {}
        };
      });
    }
  };
  focusHandler = event => {
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        touched: true
      }
    });
  };
  blurHandler = event => {
    let error = registerValidator(this.state);

    if (Object.keys(error).length > 0) {
      this.setState({ error });
    } else {
      this.setState((prevState, props) => {
        return {
          error: {}
        };
      });
    }
  };
  submitHandler = event => {
    event.preventDefault();
    let { name, email, password, confirmPassword } = this.state;
    let user = {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    };
    this.props.register(user, this.props.history);
    console.log(this.props.error);
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)) {
      return {
        error: nextProps.error
      };
    }
    return null;
  }
  render() {
    let { name, email, password, confirmPassword, error } = this.state;
    return (
      <Row className="my-5">
        <Col md={{ size: 6, offset: 3 }}>
          <Form onSubmit={this.submitHandler}>
            <TextInput
              name="name"
              value={name.value}
              placeholder="Enter your name"
              label="Enter your name"
              change={this.changeHandler}
              error={error.name}
              blur={this.blurHandler}
              focus={this.focusHandler}
            />
            <TextInput
              name="email"
              value={email.value}
              type="email"
              placeholder="Enter your email"
              label="Enter your email"
              change={this.changeHandler}
              error={error.email}
              blur={this.blurHandler}
              focus={this.focusHandler}
            />
            <TextInput
              name="password"
              value={password.value}
              placeholder="Enter your password"
              label="Enter your password"
              change={this.changeHandler}
              error={error.password}
              type="password"
              blur={this.blurHandler}
              focus={this.focusHandler}
            />
            <TextInput
              name="confirmPassword"
              value={confirmPassword.value}
              placeholder="Enter your confirm password"
              label="Enter your confirm password"
              change={this.changeHandler}
              error={error.confirmPassword}
              type="password"
              blur={this.blurHandler}
              focus={this.focusHandler}
            />
            <Button color="primary" type="submit" onSubmit={this.submitHandler}>
              Register
            </Button>
          </Form>
          {Object.keys(error).length > 0 && (
            <Alert className="my-4" color="danger">
              {Object.keys(error).map(err => {
                return <li>{error[err]}</li>;
              })}
            </Alert>
          )}
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { register }
)(withRouter(Register));
