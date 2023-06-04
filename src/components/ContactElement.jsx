import React from "react";
import { useInView } from "react-intersection-observer";

export const ContactElement = (props) => {
  const { ref: contactRef, inView: contactIsVisible, entry } = useInView();
  return (
    <div
      ref={contactRef}
      className={`${"contact-element"} ${
        contactIsVisible ? "contact-show" : "contact-hide"
      }`}
    >
      <span className="icon-container">
        <img src={props.icon} alt="" className="img-hover" />
      </span>

      <div>
        <h4>{props.header}</h4>
        <span>{props.text}</span>
      </div>
    </div>
  );
};
