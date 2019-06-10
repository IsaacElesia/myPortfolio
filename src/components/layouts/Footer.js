import React from "react";
import { Row, Col } from "react-bootstrap";

import Contact from "./Contact";

const Footer = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12} sm={12} md={8} lg={8}>
          <div className="u-center-text ">
            <h2 className="project-heading">Get In Touch</h2>
            <p className="paragraph-2">
              Email me at{" "}
              <a href="mailto: isaacelesia@gmail.com">isaacelesia@gmail.com</a>
              <br />
              OR Call 214-549-8622
            </p>
          </div>
        </Col>
      </Row>

      <section className="contact u-margin-offset-2 ">
        <Row>
          <Contact />
        </Row>
        <footer className="footer footer-text u-margin-top ">
          <p>Powered by Isaac @ 2019</p>
        </footer>
      </section>
    </React.Fragment>
  );
};

export default Footer;
