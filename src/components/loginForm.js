import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Form,
  Input,
  InputGroup,
  Label,
  FormGroup,
  UncontrolledCarousel,
  Container,
  Row,
  Col,
} from "reactstrap";
const queryString = require("query-string");
const carouselItems = [
  {
    src: require("../assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("../assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("../assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "",
  },
];

class LoginForm extends React.Component {
  state = {};

  login(e) {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    let request = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(request);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    axios
      .post(
        "http://localhost:5000/login",
        queryString.stringify(request),
        config
      )
      .then((response) => alert(response.data.message))
      .catch((error) => console.log(error));
  }

  state = {};
  render() {
    return (
      <div className="section section-grid">
        <Container className="d-block d-sm-block d-md-none d-lg-none">
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h2 className="orange-text font-weight-bold text-center">
                Learn a Microskill for FREE!
              </h2>
              <p className="text-white mb-3 text-center">
                Experience Master-O and get a chance to earn a Linkedlin
                certificate absolutely free!
              </p>
              <Row style={{ padding: "inherit", margin: "auto" }}>
                <Form role="form" style={{ width: "100%" }}>
                  <FormGroup className="mb-3">
                    <Label for="email">Email</Label>
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.emailFocus,
                      })}
                    >
                      <Input
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        required={true}
                        className="transparent-input"
                        name="email"
                        placeholder="Email"
                        type="email"
                        onFocus={(e) => this.setState({ emailFocus: true })}
                        onBlur={(e) => this.setState({ emailFocus: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>

                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.passwordFocus,
                      })}
                    >
                      <Input
                        required={true}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        className="transparent-input"
                        name="password"
                        placeholder="Password"
                        type="password"
                        onFocus={(e) => this.setState({ passwordFocus: true })}
                        onBlur={(e) => this.setState({ passwordFocus: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div
                    className="btn-wrapper row mt-4 mb-5"
                    style={{ justifyContent: "center" }}
                  >
                    <Button
                      className="btn-try"
                      type="submit"
                      onClick={(e) => this.login(e)}
                    >
                      Try Free Microskill
                    </Button>
                  </div>
                </Form>
              </Row>
            </Col>

            <Col className="mb-lg-auto pull-right" lg="6">
              <Row className="justify-content-center">
                <div className="smartphone">
                  <div className="content-phone">
                    <UncontrolledCarousel
                      className="carousel-image"
                      items={carouselItems}
                      indicators={true}
                      autoPlay={true}
                    />
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="d-none d-lg-block d-md-block">
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h2 className="orange-text font-weight-bold">
                Learn a Microskill for FREE!
              </h2>
              <p className="text-white mb-3">
                Experience Master-O and get a chance to earn a Linkedlin
                certificate absolutely free!
              </p>
              <Row style={{ padding: "inherit" }}>
                <Form role="form" style={{ width: "70%" }}>
                  <FormGroup className="mb-3">
                    <Label for="email">Email</Label>
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.emailFocus,
                      })}
                    >
                      <Input
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        required={true}
                        className="transparent-input"
                        name="email"
                        placeholder="Email"
                        type="email"
                        onFocus={(e) => this.setState({ emailFocus: true })}
                        onBlur={(e) => this.setState({ emailFocus: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>

                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.passwordFocus,
                      })}
                    >
                      <Input
                        required={true}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        className="transparent-input"
                        name="password"
                        placeholder="Password"
                        type="password"
                        onFocus={(e) => this.setState({ passwordFocus: true })}
                        onBlur={(e) => this.setState({ passwordFocus: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="btn-wrapper">
                    <Button
                      className="btn-try"
                      type="submit"
                      onClick={(e) => this.login(e)}
                    >
                      Try Free Microskill
                    </Button>
                  </div>
                </Form>
              </Row>
            </Col>

            <Col className="mb-lg-auto pull-right" lg="6">
              <Row className="justify-content-center">
                <div className="smartphone">
                  <div className="content-phone">
                    <UncontrolledCarousel
                      className="carousel-image"
                      items={carouselItems}
                      indicators={true}
                      autoPlay={true}
                    />
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginForm;
