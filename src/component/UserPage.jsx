import React, { useEffect, useState } from "react";
import { parseUrl } from "../methods";
import { getUserData } from "../api";
import { Sidebar } from "./SideBar";
import { ProfileComponent } from "./ProfileComponent";
import { OtherComponent } from "./OtherComponent";

export const UserPage = () => {
  const [userData, setUserData] = useState({});
  const [selected, setSelected] = useState('profile');

  const getUserDataFn = async () => {
    const id = parseUrl(window.location.href).pathname.split("/")[2];
    const result = await getUserData();
    console.log(id, result);
    const obj = result?.filter((el) => el?.id == id);
    setUserData(obj && obj[0]);
  };
  useEffect(() => {
    getUserDataFn();
  }, []);
  return (
      <div className="userpage-container">
          <Sidebar selected={selected} setSelected={setSelected} />
          {selected === 'profile' ? (
            <ProfileComponent userData={userData} />
          ) : (
            <OtherComponent userData={userData} selected={selected} />
          )}
      </div>
  );
};
