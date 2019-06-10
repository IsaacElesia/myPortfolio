import React from "react";
import Col from "react-bootstrap/Col";

class Cards extends React.Component {
  limitDescription = (description, limit = 100) => {
    const newDescription = [];
    if (description.length > limit) {
      description.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newDescription.push(cur);
        }
        return acc + cur.length;
      }, 0);

      // return the result
      return `${newDescription.join(" ")} ...`;
    }
    return description;
  };

  renderContent() {
    return (
      <div className="card ">
        <div className="card--side card--side--front">
          <div
            className="card--picture"
            style={{
              backgroundImage: `linear-gradient(to right bottom, #7b9ba6,  #cdd6d5), url(${
                this.props.app.img
              })`
            }}
          >
            &nbsp;
          </div>
          <h4 className="card--heading">
            <span className="card--heading-span card--heading-span--1">
              {this.props.app.name}
            </span>
          </h4>
          <div className="card--details">
            <p className="paragraph">
              {this.limitDescription(this.props.app.description)}
            </p>
          </div>
        </div>
        <div className="card--side card--side--back card--side--back-1">
          <div className="card--cta">
            <a
              href={this.props.app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--white"
            >
              view Demo
            </a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Col xs={8} sm={7} md={4} lg={3}>
        {this.renderContent()}
      </Col>
    );
  }
}

export default Cards;
