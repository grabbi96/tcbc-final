import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setToastMessage } from "../store/actions/metaAction";
class Home extends Component {
  state = {};

  componentDidMount() {
    if (this.props.meta.toastMessage) {
      toast.success(this.props.meta.toastMessage, {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => this.props.setToastMessage()
      });
    }
  }

  render() {
    return (
      <Container>
        <ToastContainer />
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Card>
              <CardBody>
                <h2>i am in home</h2>
                <p />
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
)(Home);
