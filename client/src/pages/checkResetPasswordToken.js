import React, { Component } from "react";
import TextInput from "../components/Forms/TextInput";
import { Form, Button } from "reactstrap";
import { token } from "../store/actions/authAction";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
class checkResetPasswordToken extends Component {
  state = {
    token: "",
    error: {}
  };
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitHandler = event => {
    event.preventDefault();
    console.log("from")
    console.log()
    this.props.token({token:this.state.token, email:this.props.auth.resetPasswordUser.email}, this.props.history)
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
    let { token, error } = this.state;
    return (
      <div>
        <h2>varified token</h2>
        <Form onSubmit={this.submitHandler}>
          <TextInput
            name="token"
            value={token}
            label="Enter your Token"
            change={this.changeHandler}
            error={error.token}
            type="text"
            placeholder="toekn"
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
    error: state.error,
    auth:state.auth
  };
};
export default connect(mapStateToProps, {token})(withRouter(checkResetPasswordToken));
