import { ContentTable } from "../../../components/ContentTable";
import vod from "../../../assets/vod.mp4";
import { ProjectList } from "../../../components/ProjectList";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const {
    ref: projectRef,
    inView: projectIsVisible,
    entry,
  } = useInView({
    rootMargin: "-300px 0px -250px 0px",
  });
  const [currentSelected, setCurrentSelected] = useState(1);

  useEffect(() => {
    if (projectIsVisible) {
      const interval = setInterval(() => {
        setCurrentSelected((prevSelected) => {
          if (prevSelected === 4) {
            return 1;
          } else {
            return prevSelected + 1;
          }
        });
      }, 5000);
      return () => {
        clearInterval(interval);
        setCurrentSelected(1);
      };
    }
  }, [projectIsVisible]);

  return (
    <section ref={projectRef} id="projects" className="content-table projects">
      <div className="container">
        <h2 className="section-title">My projects</h2>
        <ContentTable
          nameClass="table project"
          vod={vod}
          isVod={true}
          inView={projectIsVisible}
          text={
            <div className="text project-text">
              <h4>Countries App 🌎</h4>
              <ul>
                <ProjectList
                  num="01"
                  text="After click on the specific country you will see more
                  information about the country"
                  class={currentSelected === 1 ? "selected" : ""}
                />
                <ProjectList
                  num="02"
                  text="Filter countries by region"
                  class={currentSelected === 2 ? "selected" : ""}
                />
                <ProjectList
                  num="03"
                  text="Search for specific country"
                  class={currentSelected === 3 ? "selected" : ""}
                />
                <ProjectList
                  num="04"
                  text="Dark/Light mode"
                  class={currentSelected === 4 ? "selected" : ""}
                />
              </ul>
              <a
                href="https://p1nkyyyy.github.io/Countries-library/#"
                className="btn-more"
                target="_blank"
              >
                <span>See More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M13.5 8v4.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H6m4 0h3.5V4m0-3.5L7 7"
                  />
                </svg>
              </a>
            </div>
          }
        />
      </div>
    </section>
  );
};
