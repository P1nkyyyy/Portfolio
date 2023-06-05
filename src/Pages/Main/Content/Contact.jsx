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
          text="pinkavamichal10@gmail.com"
          icon={Email}
          animation="left"
        />
        <ContactElement
          header="Github"
          text="P1nkyyyy"
          icon={Github}
          animation="right"
        />
      </div>
    </section>
  );
};
