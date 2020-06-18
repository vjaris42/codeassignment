import React from "react";

import IndexNavbar from "../components/navbar.js";

import LoginForm from "../components/loginForm.js";

class LoginPage extends React.Component {
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="main">
            <LoginForm />
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
