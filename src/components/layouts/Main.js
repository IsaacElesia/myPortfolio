import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PhotoFrame from "./PhotoFrame";

const Main = props => {
  const apps = props.apps.map(app => {
    return <PhotoFrame key={app.name} app={app} />;
  });

  return (
    <main>
      <section className="section-projects">
        <div className="u-center-text u-margin-bottom-big u-margin-offset-small">
          <h2 className="project-heading">My Projects</h2>
        </div>

        <Row>{apps}</Row>
      </section>
    </main>
  );
};

export default Main;
