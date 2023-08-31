import React, { useEffect, useState } from "react";
import "./../App.css";
import { getUserData } from "../api";

export const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const fetchUserDetails = async () => {
    const result = await getUserData();
    setUserData(result);
  };
  const handleRedirect = (id) => {
    window.location.href = "/user/" + id;
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <div className="homepage-container">
      <div className="scrollable-list">
        <div>Select An account</div>
        <ul>
          {userData.map((item, index) => (
            <li onClick={() => handleRedirect(item?.id)} key={index}>
              <img src={item?.profilepicture} />
              <span>{item?.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
