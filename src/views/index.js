import React from "react";

import IndexNavbar from "../components/navbar.js";

import Landing from "../views/landing.js";

class Index extends React.Component {
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="main">
            <Landing />
          </div>
        </div>
      </>
    );
  }
}

export default Index;
