import React from "react";
import { TimelineItem } from "./TimelineItem";
import { Blender } from "../../assets/icons/about/Blender";
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  JQueryIcon,
  ReactIcon,
  SassIcon,
  CsharpIcon,
  UnityIcon,
} from "../../assets/icons/LanguagesIndex";

export const Timeline = () => {
  return (
    <div className="timeline-container">
      <TimelineItem
        year="2021"
        classLine="timeline-line-long"
        icon={<CsharpIcon />}
      />
      <TimelineItem classLine="timeline-line-short" icon={<UnityIcon />} />
      <TimelineItem
        year="2022"
        classLine="timeline-line-long"
        icon={<HtmlIcon />}
      />
      <TimelineItem classLine="timeline-line-short" icon={<CssIcon />} />
      <TimelineItem classLine="timeline-line-short" icon={<JQueryIcon />} />
      <TimelineItem classLine="timeline-line-short" icon={<JavaScriptIcon />} />
      <TimelineItem classLine="timeline-line-short" icon={<SassIcon />} />
      <TimelineItem
        year="2023"
        classLine="timeline-line-long"
        icon={<Blender />}
      />
      <TimelineItem classLine="timeline-line-short" icon={<ReactIcon />} />
    </div>
  );
};
