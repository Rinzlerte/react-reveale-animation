import React from "react";
import { Link } from "react-router-dom";

import IconImage from "../../Resources/images/logos/down-arrow.svg";

export const ArrowBtn = props => {
  const template = (
    <div
      className="icon_arrow"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${IconImage}) no-repeat`
      }}
    />
  );

  if (props.link) {
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};