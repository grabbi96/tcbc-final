import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegistrationSuccessFul from "./pages/RegistrationSuccessFul";
import ActivationPage from "./pages/activationPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Container>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/registration-successful"
              component={RegistrationSuccessFul}
            />
            <Route path="/activeaccount/:token" component={ActivationPage} />
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
