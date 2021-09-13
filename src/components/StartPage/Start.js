import React, { useState } from "react";
import { Redirect } from "react-router";
import logo from "../../Assests/Images/icons/netflix.png";
import "./Start.css";
export default function Start() {
  const [show, setShow] = useState(false);
  function redirectMe() {
    setShow(true);
  }
  if (show) {
    return <Redirect to="/auth" />;
  }
  return (
    <div className="main-container-display">
      <div className="back-image"></div>
      <div className="content-page-data">
        <div>
          <img src={logo} alt="" className="image-container" />
        </div>
        <div className="text-content-data">
          <p className="para-data">Unlimited movies, TV shows and more.</p>
          <p className="para-data-2">Watch anywhere. Cancel anytime.</p>
          <div className="signup-button" onClick={redirectMe}>
            Let's Go{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
