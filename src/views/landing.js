import React from "react";
import { Link } from "react-router-dom";

import { Button, UncontrolledCarousel, Container, Row, Col } from "reactstrap";

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

class Landing extends React.Component {
  state = {};
  render() {
    return (
      <div className="section section-grid">
        <Container className="d-block d-sm-block d-md-none d-lg-none">
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className=" text-white text-center">
                Improve Skills, Effortlessly!
              </h3>
              <p className="text-white mb-3 text-center">
                With mobile games built around engaging learning content
              </p>
              <Row lg="2">
                <div className="mt-4 ml-3">
                  <img
                    alt="..."
                    src={require("../assets/play.png")}
                    className="play-buttons"
                  />
                </div>
              </Row>
            </Col>
            <Col className="mb-lg-auto justify-content-center" lg="6">
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
              <Row className="justify-content-center mt-5">
                <div className="btn-wrapper">
                  <Button className="btn-try" to="login" tag={Link}>
                    Try Free Microskill
                  </Button>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="d-none d-lg-block">
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className=" text-white">Improve Leadership Skills,</h3>
              <h1 className="text-white font-weight-bold">Effortlessly</h1>
              <p className="text-white mb-3">
                With mobile games built around engaging learning
              </p>
              <div className="btn-wrapper">
                <Button className="btn-try" to="login" tag={Link}>
                  Try Free Microskill
                </Button>
              </div>
              <Row lg="2">
                <div className="mt-4 ml-3">
                  <img
                    alt="..."
                    src={require("../assets/play.png")}
                    className="play-buttons"
                  />
                </div>
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

export default Landing;
