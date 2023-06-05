import React from "react";
import { ContactElement } from "../../../components/ContactElement";
import Github from "../../../assets/github.svg";
import Email from "../../../assets/email.svg";

export const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <span>Feel free to contact me!</span>
      <div className="contact-container">
        <ContactElement
          header="E-Mail"
          text="michal@pinkava.com"
          icon={Email}
          animation="left"
          alt="Email icon"
          href="mailto:michal@pinkava.com"
        />
        <ContactElement
          header="Github"
          text="P1nkyyyy"
          icon={Github}
          animation="right"
          alt="Github icon"
          href="https://github.com/P1nkyyyy"
        />
      </div>
    </section>
  );
};
