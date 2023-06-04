import React from "react";
import { useInView } from "react-intersection-observer";

export const ItemExperience = (props) => {
  const {
    ref: experienceRef,
    inView: experienceIsVisible,
    entry,
  } = useInView();
  return (
    <div
      ref={experienceRef}
      className={`${props.className} ${"item"} ${
        experienceIsVisible ? "item-show" : "item-hide"
      }`}
    >
      <h4>{props.header}</h4>
      <p>{props.text}</p>
      <img className="icon" src={props.icon} alt="" />
    </div>
  );
};
