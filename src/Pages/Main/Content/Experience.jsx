import React from "react";
import { ItemExperience } from "../../../components/ItemExperience";
import icons from "../../../assets/index";
import test from "../../../assets/untitled.png";
import "animate.css";

//Desing sestav ve fastreportu      Příprava dat ve SQL pro sestavy             Vytaváření sestav ve fastreportu pro ekonomický software Stereo pro Windows včetně

export const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-content">
          <img className="main-img" src={test} alt="" />
          <ItemExperience
            className="item-1"
            header="Kastner Software"
            text="Designing and creating reports in FastReport for the economic software Stereo for Windows, followed by data preparation in SQL for the reports."
            icon={icons.computer}
          />
          <ItemExperience
            className="item-2"
            header="School"
            text="I graduated from a Secondary Vocational School focused on electrician, where I specialized in programming with Visual Basic and Arduino."
            icon={icons.school}
          />
          <ItemExperience
            className="item-3"
            header="Skills"
            text="I work with Photoshop, Sony Vegas pro 13 to edit my videos for fun, Figma to design my projects and also blender to make 3D models."
            icon={icons.toolBox}
          />
        </div>
      </div>
    </section>
  );
};
