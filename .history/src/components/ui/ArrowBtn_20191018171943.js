import React from "react";
import { Link } from "react-router-dom";

// import IconImage from "../../Resources/images/logos/down-arrow.svg";
// background: `url(${IconImage}) no-repeat`
export const ArrowBtn = props => (
  <Link to={props.linkTo} className="myarrow"
    style={{
      width: props.width,
      height: props.height,
      background: `url(${IconImage}) no-repeat`
    }}
  />
);
