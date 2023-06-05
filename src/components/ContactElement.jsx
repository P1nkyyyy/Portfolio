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
      <a href={props.href} className="icon-container" target="_blank">
        <img src={props.icon} alt={props.alt} className="img-hover" />
      </a>

      <div>
        <h4>{props.header}</h4>
        <a href={props.href} target="_blank">
          {props.text}
        </a>
      </div>
    </div>
  );
};
