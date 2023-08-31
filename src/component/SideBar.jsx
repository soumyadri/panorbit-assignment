import React, { useState } from "react";
import "./../App.css";

export const Sidebar = ({selected, setSelected}) => {
  const handleClick = (params) => {
    setSelected(params);
  };
  return (
    <div className="sidebar">
      <ul>
        <li className={`${selected === "profile" ? "tab" : ""}`} onClick={() => handleClick("profile")}>
          <a href="#">Profile</a>
        </li>
        <li className={`${selected === "post" ? "tab" : ""}`} onClick={() => handleClick("post")}>
          <a href="#">Post</a>
        </li>
        <li className={`${selected === "gallery" ? "tab" : ""}`} onClick={() => handleClick("gallery")}>
          <a href="#">Gallery</a>
        </li>
        <li className={`${selected === "todo" ? "tab" : ""}`} onClick={() => handleClick("todo")}>
          <a href="#">Todo</a>
        </li>
      </ul>
    </div>
  );
};
