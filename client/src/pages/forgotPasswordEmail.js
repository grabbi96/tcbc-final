import React, { Component } from "react";
import TextInput from "../components/Forms/TextInput";
import { Form, Button } from "reactstrap";
import { forgotPassword } from "../store/actions/authAction";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
class forgotPasswordEmail extends Component {
  state = {
    forgotPasswordEmail: "",
    error: {}
  };
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.forgotPassword(
      { email: this.state.forgotPasswordEmail },
      this.props.history
    );
    console.log(this.props.error, this.state.error.error);
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
    let { forgotPasswordEmail, error } = this.state;
    return (
      <div>
        <h2>Enter your email</h2>
        <Form onSubmit={this.submitHandler}>
          <TextInput
            name="forgotPasswordEmail"
            value={forgotPasswordEmail}
            placeholder="Enter your email"
            label="Enter your email"
            change={this.changeHandler}
            error={error.forgotpassEmail}
            type="email"
          />
          <Button color="primary" type="submit" onSubmit={this.submitHandler}>
            Submit
          </Button>
        </Form>
      </div>
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
  { forgotPassword }
)(withRouter(forgotPasswordEmail));
