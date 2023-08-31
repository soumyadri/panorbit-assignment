import React from "react";
import "./../App.css";

export const OtherComponent = ({userData, selected}) => {
  const handleRedirect = () => {
    window.location.href = "/";
  };
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div>{selected.toUpperCase()}</div>
        <div onClick={handleRedirect} className="profile-bar">
          <img
            className="profile-header-pic"
            src={userData?.profilepicture}
            alt=""
          />
          <span>{userData?.name}</span>
        </div>
      </div>

      <div className="coming-soon">
            Coming Soon
      </div>
    </div>
  );
};
