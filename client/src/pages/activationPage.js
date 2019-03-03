import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setToastMessage } from "../store/actions/metaAction";
import { activateAccount } from "../store/actions/authAction";
class ActivationPage extends Component {
  state = {};

  componentDidMount() {
    let token = this.props.match.params.token;
    this.props.activateAccount(token);
    toast.success(this.props.meta.toastMessage, {
      position: toast.POSITION.TOP_RIGHT,
      onClose: () => this.props.setToastMessage()
    });
  }

  render() {
    return (
      <Container>
        <ToastContainer />
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Card>
              <CardBody>
                <h2>account activated successfully</h2>
                <p>
                  now you can login your account <Link to="/login">login</Link>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    meta: state.meta
  };
};
export default connect(
  mapStateToProps,
  { setToastMessage, activateAccount }
)(ActivationPage);
