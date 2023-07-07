import React from "react";
import { useInView } from "react-intersection-observer";

export const TimelineItem = (props) => {
  const {
    ref: myRef,
    inView: elementIsVisible,
    entry,
  } = useInView({ threshold: 1 });

  return (
    <div
      ref={myRef}
      className={`${"timeline-item"} ${
        elementIsVisible ? "about-item-show" : "about-item-hide"
      }`}
    >
      <div className={props.classLine}>
        <span>{props.year}</span>
      </div>
      {props.icon}
    </div>
  );
};
