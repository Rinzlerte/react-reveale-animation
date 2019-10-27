import React from "react";
import { Link } from "react-router-dom";

import IconImage from "../../Resources/images/logos/down-arrow.svg";

export const ArrowBtn = props => {

  const onClick(){
    
  }

  const template = (
    <div
      className="arrow-btn"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${IconImage}) no-repeat`
        onClick = props.onClick
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