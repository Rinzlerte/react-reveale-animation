import React from "react";
import { Link } from "react-router-dom";

import image from "../../Resources/images/logos/arrowtoright.svg";

export const Backbtn = props => (
  <Link to={props.linkTo} className="cross"
    style={{
      width: props.width,
      height: props.height,
      background: `url(${image}) no-repeat`,
      border: props.border
    }}
  />
);
