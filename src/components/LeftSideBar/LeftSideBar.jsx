import React from "react";
import "./LeftSideBar.css";
import assets from "../../assets/assets";

const LeftSideBar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo"></img>
          <div className="menu">
            <img src={assets.menu_icon}></img>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon}></img>
          <input type="text" placeholder="search here.."></input>
        </div>
      </div>
      <div className="ls-list">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div key={index} className="friends">
              <img src={assets.profile_img}></img>
              <div>
                <p>Richard sanford</p>
                <span>Hello,how are u?</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
