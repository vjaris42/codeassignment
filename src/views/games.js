import React from "react";

import IndexNavbar from "../components/navbar.js";
import { Button, UncontrolledCarousel, Container, Row, Col } from "reactstrap";

class Games extends React.Component {
  render() {
    return (
      <>
        {/* <IndexNavbar /> */}
        <div className="wrapper">
          <div className="main">
            <Row className="justify-content-center">
              <div className="smartphone2">
                <iframe src="http://test.masteroapp.com" />
              </div>
            </Row>
            {/* <Row className="justify-content-center">
              <iframe
                src="http://test.masteroapp.com"
                title="games"
                width="600"
                height="600"
              />
            </Row> */}
          </div>
        </div>
      </>
    );
  }
}

export default Games;
