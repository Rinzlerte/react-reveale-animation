import React from "react";
import { Link } from "react-router-dom";

import IconImage from "../../Resources/images/logos/down-arrow.svg";

export const ArrowBtn = props => (
  <Link to={props.linkTo} className="arrow_link"
    style={{
      width: props.width,
      height: props.height,
      background: `url(${IconImage}) no-repeat`
    }}
  />
);
