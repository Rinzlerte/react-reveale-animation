import React from "react";
import { Link } from "react-router-dom";

import image from "../../Resources/images/logos/arrowtoright.svg";

export const Backbtn = props => (
  <Link to={props.linkTo} className="back-btn"
    style={{
      width: props.width,
      height: props.height,
      background: `url(${image}) no-repeat`,
      border: props.border
    }}
  />
);
export const ArrowBtn = props => {
  const template = (
    <div
      className="back-btn"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${image}) no-repeat`
      }}
    />
  );

  if (props.link) {
    return (
      <Link to={props.linkTo} className="link">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};