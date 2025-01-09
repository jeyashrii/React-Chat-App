import React from "react";
import "./RightSideBar.css";
import assets from "../../assets/assets";

const RightSideBar = () => {
  return (
    <div className="rightsidebar">
      <div className="rs-profile">
        <img src={assets.profile_img}></img>
        <h3>
          Richard sanford<img src={assets.green_dot} className="dot"></img>
        </h3>
        <p>hey im richard sanford </p>
      </div>
    </div>
  );
};

export default RightSideBar;
