import React from "react";
import { Link } from "react-router-dom";

import image from "../../Resources/images/logos/close.svg";

export const CloseBtn = props => (
  <Link to={props.linkTo} className="cross-btn"
    style={{
      width: props.width,
      height: props.height,
      background: `url(${image}) no-repeat`
    }}
  />
);
