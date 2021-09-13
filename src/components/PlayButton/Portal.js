import React from "react";
import ReactDom from "react-dom";
import Video from "../../Assests/Videos/bunny.mp4";
import "./Portal.css";

export default function Portal({ setPlay }) {
  function closevideo() {
    setPlay(false);
  }
  return ReactDom.createPortal(
    <>
      <div className="portal-division">
        <div className="video-player">
          <video src={Video} className="video1" controls autoPlay></video>
        </div>
        <div className="exit-video-button" onClick={closevideo}>
          Exit
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
