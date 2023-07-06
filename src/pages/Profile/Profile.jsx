import React from "react";
import "./Profile.scss";
import UserSection from "./UserSection/UserSection";

import UserInfo from "./UserInfo/UserInfo";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="profile-container">
          <UserSection />
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Profile;
