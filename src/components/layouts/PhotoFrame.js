import React from "react";
import { Col } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

class PhotoFrame extends React.Component {
  render() {
    const { name, description, img, url } = this.props.app;

    return (
      <Col xs={6} sm={4} md={3} lg={3} className="u-margin-bottom-big">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={img}
            alt={name}
            className="photo-box"
            data-multiline="true"
            data-for={name}
            data-event-off="touchend mouseout"
            data-event="touchmove touchstart mousemove"
            data-class="tooltips"
            data-tip={description}
          />
        </a>
        <h4 className="title">{name}</h4>
        <ReactTooltip id={name} place="right" effect="solid" clickable={true} />
      </Col>
    );
  }
}

export default PhotoFrame;
