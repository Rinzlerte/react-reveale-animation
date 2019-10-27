import React from "react";
import { Link } from "react-router-dom";

import image from "../../Resources/images/logos/close.svg";

export const CrossBtn = props => {
  const template = (
    <div
      className="cross-btn"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${image}) no-repeat`,
        opacity: props.opacity
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