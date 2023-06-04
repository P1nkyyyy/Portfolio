import React from "react";

export const ContentTable = (props) => {
  const vid = document.querySelector("#vid");

  if (props.inView === true) {
    vid.play();
  } else if (vid !== null) {
    vid.currentTime = 0;
  }

  return (
    <div className={props.nameClass}>
      {props.isVod === true ? (
        <video id="vid" src={props.vod} loop muted />
      ) : (
        <img src={props.img} alt="" />
      )}
      {props.text}
    </div>
  );
};
