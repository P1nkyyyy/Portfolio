import React from "react";

export const AboutItem = (props) => {
  return (
    <div className="about-item">
      {props.img}
      <span>{props.text}</span>
    </div>
  );
};
