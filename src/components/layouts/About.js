import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class About extends React.Component {
  state = {
    Core_Technologies: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Python",
      "PHP",
      "SQL",
      "WordPress"
    ]
  };

  renderContent() {
    return (
      <React.Fragment>
        <section className="top ">
          <Row>
            <Col xs={10} sm={8} md={7}>
              <img
                className="authorPics"
                src="img/isaac.jpg"
                alt="Isaac Elesia's"
              />
            </Col>
            <Col xs={10} sm={3} md={4} className="aside-1">
              <h2 className="heading-1">
                {Object.keys(this.state)[0].replace("_", " ")}
              </h2>

              {this.state.Core_Technologies.map((tech, index) => {
                return (
                  <span className="heading-3" key={index}>{`${tech} | `}</span>
                );
              })}
            </Col>
          </Row>
        </section>

        <section className="bottom u-margin-bottom-big">
          <Row>
            <Col xs={10} md={7}>
              <h2 className="project-heading">Professional Skills Summary</h2>
              <p>
                Engaging and innovative technology professional with expertise
                in multiple programming languages and diagnosing and resolving
                technical issues. Proficient in conducting system and software
                analyses to create insightful and informative system status
                reports. Skilled in maintaining data and system security through
                control of user authorizations for system access based on job
                duty requirements.
              </p>
              <p>
                Leverage excellent communication abilities with exceptional
                interpersonal skills to deliver customer service, technical
                support, and user training. Demonstrate strong time management
                and organizational skills with proven ability to liaise with key
                stakeholders and team members.
              </p>
              <p>
                Committed to developing highly functional yet easy-to-use and
                visually appealing applications for consumers and to support
                business operations.
              </p>
            </Col>
            <Col xs={10} sm={10} md={4} className="aside-2">
              <h2 className="aside-heading">Basic Skills Highlight</h2>
              <dl>
                <dt>Programming:</dt>
                <dd>
                  Skilled in utilization of multiple programming languages and
                  ancillary tools to combine design with programming to create
                  applications and websites with visual appeal and technical
                  functionality.
                </dd>

                <dt>Issue Resolution:</dt>
                <dd>
                  Proficient in troubleshooting, analyzing issues, and
                  developing innovative yet pragmatic resolutions to restore and
                  improve functionality, security, and performance.
                </dd>

                <dt>Teamwork:</dt>
                <dd>
                  Talented IT professional with proven ability to perform duties
                  independently without direct supervision yet also able to
                  collaborate cross-functionally, facilitate user training, and
                  contribute as a member of project teams.
                </dd>

                <dt>Key Strengths:</dt>
                <dd>
                  Demonstrate excellent organizational and time management
                  skills to complete multiple assigned and ad hoc tasks
                  simultaneously. Leverage strong communication and
                  interpersonal skills to interface with customers and users to
                  deliver optimal service and support promptly and courteously.
                </dd>
              </dl>
            </Col>
          </Row>
        </section>
      </React.Fragment>
    );
  }

  render() {
    return <main className="aboutPage">{this.renderContent()}</main>;
  }
}

export default About;
