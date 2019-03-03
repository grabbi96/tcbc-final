import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { setToastMessage } from "../store/actions/metaAction";
class RegistrationSuccessFul extends Component {
  state = {};

  componentDidMount() {
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
                <h2>Registration successful</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque deleniti earum quo ipsam non ea mollitia iusto accusamus
                  possimus numquam, nam dignissimos incidunt, iure ad maiores
                  minus harum sit assumenda.
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
  { setToastMessage }
)(RegistrationSuccessFul);
