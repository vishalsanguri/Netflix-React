import React from "react";
import "./Display.css";
import Playbutton from "../PlayButton/Playbutton";

export default function Display({ data, setContent }) {
  const closeDivision = () => {
    setContent({ ...data, ...{ small: "", large: "", desc: "" } });
  };

  return (
    <div className="specific-card-display">
      <img className="image-unique-back" src={data.large} alt="seriesimage" />
      <div onClick={closeDivision} className="close-card-sign"></div>
      <div className="specific-card-details">{data.desc}</div>
      <Playbutton />
    </div>
  );
}
