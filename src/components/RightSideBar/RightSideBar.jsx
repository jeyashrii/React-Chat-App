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
        <p>hey im richard sanford using chatapp</p>
      </div>
      <hr></hr>
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1}></img>
          <img src={assets.pic2}></img>
          <img src={assets.pic3}></img>
          <img src={assets.pic4}></img>
          <img src={assets.pic1}></img>
          <img src={assets.pic2}></img>
        </div>
      </div>
      <button>logout</button>
    </div>
  );
};

export default RightSideBar;
