import React, { useContext } from "react";
import "./Play.css";
import { myContext } from "../Content/Content";

export default function Playbutton() {
  function playVideo() {
    contextconsumer(true);
  }
  const contextconsumer = useContext(myContext);
  return (
    <div className="video-player-button" onClick={playVideo}>
      Watch
    </div>
  );
}
