import React from "react";
import { Link } from "react-router-dom";

 import IconImage from "../../Resources/images/logos/down-arrow.svg";
// import image from '../../Resources/images/logos/arrow.png';
export const ArrowBtn = props => (
  <Link to={props.linkTo} className="arrow-btn"
    style={{
      width: props.width,
      height: props.height,
      background: `url(${IconImage}) no-repeat`
    }}
  />
);


export const ArrowBtn = props => {
  const template = (
    <div
      className="arrow-btn"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${mcitylogo}) no-repeat`
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