import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 20 ||
      document.body.scrollTop > 20
    ) {
      this.setState({
        color: "bg-info",
      });
    } else if (
      document.documentElement.scrollTop < 21 ||
      document.body.scrollTop < 21
    ) {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out",
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: "",
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <span>Master-O</span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Container>
            <Collapse
              className="justify-content-center navbar-collapse"
              navbar
              isOpen={this.state.collapseOpen}
              onExiting={this.onCollapseExiting}
              onExited={this.onCollapseExited}
            >
              <div className="navbar-collapse-header justify-content-end">
                <Row>
                  <Col className="collapse-close text-right" xs="12">
                    <button
                      aria-expanded={this.state.collapseOpen}
                      className="navbar-toggler"
                      onClick={this.toggleCollapse}
                    >
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
                <Row>
                  <Col className="collapse-close text-center p-4" xs="12">
                    <button
                      className="navbar-toggler"
                      onClick={this.toggleCollapse}
                    >
                      <h3>Master-O</h3>
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav navbar>
                <NavItem className="p-2">
                  <NavLink
                    data-placement="bottom"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    title=""
                  >
                    Features
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav className="p-2">
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#"
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    Getting started
                  </DropdownToggle>
                </UncontrolledDropdown>
                <NavItem className="p-2">
                  <NavLink
                    data-placement="bottom"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    title=""
                  >
                    Client Success
                  </NavLink>
                </NavItem>
                <NavItem className="p-2">
                  <NavLink
                    data-placement="bottom"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    title=""
                  >
                    Resources
                  </NavLink>
                </NavItem>
                <NavItem className="p-2">
                  <NavLink
                    data-placement="bottom"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                    title=""
                  >
                    Blogs
                  </NavLink>
                </NavItem>
                <NavItem className="p-2">
                  <Button
                    className="nav-link d-lg-block nav-button"
                    target="_blank"
                    href=""
                  >
                    Schedule a demo
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
