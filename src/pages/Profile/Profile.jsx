import React from "react";
import "./Profile.scss";
import UserSection from "./UserSection/UserSection";
// import { useParams } from "react-router-dom";

import UserInfo from "./UserInfo/UserInfo";

const Profile = () => {
  // const { tab } = useParams();
  // console.log(tab);
  return (
    <div className="profile">
      <div className="container">
        <div className="profile-container">
          {/* <UserSection tab={tab} />
          {tab === "user-info" && <UserInfo />} */}
          <UserSection />
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Profile;
