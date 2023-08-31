import React from "react";
import "./../App.css";

export const ProfileComponent = ({ userData }) => {
  const Map = () => {
    return (
      <>
        <img
          className="map-view"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC50MGGXqMI786IIddJjNFbx5AszidzQzn7A&usqp=CAU"
          alt=""
        />
        <div className="lat-lng-details">
          lat : {userData?.address?.geo.lat} lng : {userData?.address?.geo.lng}
        </div>
      </>
    );
  };

  const ChatComponent = () => {
      return (
            <div className="chat-component">
                  Chats
            </div>
      )
  }

  const handleRedirect = () => {
    window.location.href = "/";
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div>Profile</div>
        <div onClick={handleRedirect} className="profile-bar">
          <img
            className="profile-header-pic"
            src={userData?.profilepicture}
            alt=""
          />
          <span>{userData?.name}</span>
        </div>
      </div>
      <div className="profile-middle">
        <div className="profile-left-bar">
          <div>
            <img
              className="profile-picture"
              src={userData?.profilepicture}
              alt=""
            />
            <div className="profile-text center">{userData?.name}</div>
            <div className="profile-text">
              <span className="profile-text-tag">UserName : </span>
              {userData?.username}
            </div>
            <div className="profile-text">
              <span className="profile-text-tag">Email : </span>
              {userData?.email}
            </div>
            <div className="profile-text">
              <span className="profile-text-tag">Phone : </span>
              {userData?.phone}
            </div>
            <div className="profile-text last-profile-text">
              <span className="profile-text-tag">Website : </span>
              {userData?.website}
            </div>
          </div>
          <div>
            <div className="center profile-text company-bar">Company</div>
            <div className="profile-text">
              <span className="profile-text-tag">Name : </span>
              {userData?.company?.name}
            </div>
            <div className="profile-text">
              <span className="profile-text-tag">CatchPhrase : </span>
              {userData?.company?.catchPhrase}
            </div>
            <div className="profile-text">
              <span className="profile-text-tag">Bs : </span>
              {userData?.company?.bs}
            </div>
          </div>
        </div>
        <div className="profile-right-bar">
          <div>
            <div className="center profile-text company-bar">Address :</div>
            <div className="profile-text">
              <span className="profile-text-tag">Street : </span>
              {userData?.address?.street}
            </div>
            <div className="profile-text">
              <span className="profile-text-tag">Suite : </span>
              {userData?.address?.catchPhrase}
            </div>
            <div className="profile-text">
              <span className="profile-text-tag">City : </span>
              {userData?.address?.city}
            </div>
            <div className="profile-text">
              <span className="profile-text-tag">Zipcode : </span>
              {userData?.address?.zipcode}
            </div>
          </div>

          <div>
            <Map />
          </div>
          <div>
            <ChatComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
