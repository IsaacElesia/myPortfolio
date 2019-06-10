import React from "react";
import Row from "react-bootstrap/Row";
import Cards from "./Cards";

class Header extends React.Component {
  apps = this.props.apps.map((app, index) => {
    if (index < 3) {
      return (
        <Cards
          key={app.name}
          name={app.name}
          description={app.description}
          img={app.img}
          url={app.url}
          app={app}
        />
      );
    }
    return null;
  });

  renderContent() {
    return (
      <div className="hero ">
        <div className="u-margin-offset-1">
          <img src="./img/logo.png" alt="logo" className="isaac-logo " />
        </div>

        <div className="u-align-text-right u-line-height-small u-margin-offset-small">
          <h1 className="heading-2">
            {" "}
            Email:
            <a className="anchor" href="mailto: isaacelesia@gmail.com">
              {" "}
              isaacelesia@gmail.com
            </a>
          </h1>
          <h4 className="heading-3">Phone: 214-549-8622</h4>
          <h4 className="heading-4">Front-end master</h4>
        </div>

        <div className="u-center-text u-margin-bottom-medium">
          <h2 className="heading-1">Recent Projects</h2>
        </div>

        <Row>{this.apps}</Row>
      </div>
    );
  }

  render() {
    return <header className=" header">{this.renderContent()}</header>;
  }
}

export default Header;
