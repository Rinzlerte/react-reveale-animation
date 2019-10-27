import React from "react";
import { Link } from "react-router-dom";
import Roll from 'react-reveal/Roll';

import image from "../../Resources/images/logos/close.svg";

export const CrossBtn = props => {
  const template = (
    <Roll>
      <div
        className="cross-btn"
        style={{
          width: props.width,
          height: props.height,
          background: `url(${image}) no-repeat`
        }}
      </div>
    <Roll/>
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