import React from "react";
import { ItemExperience } from "../../../components/ItemExperience";
import laptop from "../../../assets/laptop.png";

import { ToolBox } from "../../../assets/icons/experience/ToolBox";
import { School } from "../../../assets/icons/experience/School";
import { Computer } from "../../../assets/icons/experience/Computer";

export const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-content">
          <img className="main-img" src={laptop} alt="" />
          <ItemExperience
            className="item-1"
            header="Kastner Software"
            text="Designing and creating reports in FastReport for the economic software Stereo for Windows, followed by data preparation in SQL for the reports."
            icon={<Computer />}
          />
          <ItemExperience
            className="item-2"
            header="School"
            text="I graduated from a Secondary Vocational School focused on electronic, where I specialized in programming with Visual Basic and Arduino."
            icon={<School />}
          />
          <ItemExperience
            className="item-3"
            header="Skills"
            text={
              <span>
                I work with Photoshop, Sony Vegas pro 13
                <a
                  href="https://www.youtube.com/channel/UCKxMRZmZhXyxh4tWU3rA81g"
                  target="_blank"
                  className="video-link-yt"
                >
                  to edit my videos for fun
                </a>
                , Figma to design my projects and also blender to make 3D
                models.
              </span>
            }
            icon={<ToolBox />}
          />
        </div>
      </div>
    </section>
  );
};
