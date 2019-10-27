import React from "react";
import { Link } from "react-router-dom";

import IconImage from "../../Resources/images/logos/down-arrow.svg";

export const ArrowBtn = props => {
  const template = (
    <Link to={props.linkTo} className="arrow_link">
    <div
      className="icon_arrow"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${IconImage}) no-repeat`
      }}
      
    />
   </Link> 
  )
}