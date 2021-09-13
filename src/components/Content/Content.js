import React, { useState } from "react";
import Seriescard from "./card/Series/Series";
import Netflix from "../../Assests/Images/icons/netflix.png";
import "./Content.css";
import Portal from "../PlayButton/Portal";
import Film from "./card/Films/Film";
import Userimage from "../../Assests/Images/icons/user-image.png";

export const myContext = React.createContext();
export default function Content({ user, handleLogout }) {
  const [play, setPlay] = useState(false);
  const [category, setCategory] = useState(true);
  function categoryshow() {
    setCategory(!category);
  }
  return (
    <>
      <div className="relative-image"></div>
      <myContext.Provider value={setPlay}>
        <div className="content-data">
          <div className="widthmanager">
            <img src={Netflix} alt="company_logo" className="logo-netflix" />
            <div className="user-container-data">
              <span className="user-span-image">
                <img width="30px" height="30px" src={Userimage} alt="user" />
              </span>
              <span className="span-user-mail">{user.email}</span>
            </div>
          </div>
          <div className="series-film">
            <div
              className={category ? "selected-section" : "series-section-head"}
              onClick={categoryshow}
            >
              Series
            </div>
            <div
              className={category ? "series-section-head" : "selected-section"}
              onClick={categoryshow}
            >
              Films
            </div>
          </div>
          {category ? <Seriescard /> : <Film />}
        </div>
      </myContext.Provider>

      {play ? <Portal setPlay={setPlay} /> : null}
    </>
  );
}
