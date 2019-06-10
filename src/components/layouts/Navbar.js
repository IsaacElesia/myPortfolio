import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navHome = React.createRef();
    this.navAbout = React.createRef();
    this.navLink = React.createRef();
  }

  /****************************************
   *  Show the about nav when user is on
   * the home page, and the home nav when
   * they are on the about page.
   ****************************************/
  toggleNav = e => {
    if (e.target.classList.contains("home")) {
      this.navHome.current.style.display = "none";
      this.navAbout.current.style.display = "inline-block";
    } else if (e.target.classList.contains("navAbout")) {
      this.navHome.current.style.display = "inline-block";
      this.navAbout.current.style.display = "none";
    }
  };

  render() {
    return (
      //*******render the Nav***********

      <nav className="navBar">
        <div className="navHome" ref={this.navHome}>
          <Link to="/" className="home navLink" onClick={this.toggleNav}>
            Home
          </Link>
        </div>

        <div className="navAbout" ref={this.navAbout}>
          <Link
            to="/about"
            className="navAbout navLink"
            onClick={this.toggleNav}
          >
            About
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
