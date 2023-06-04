import React from "react";

export const ProjectList = (props) => {
  return (
    <>
      <div className={props.class}>
        <li>{props.num}</li>
        <p>{props.text}</p>
      </div>
    </>
  );
};
