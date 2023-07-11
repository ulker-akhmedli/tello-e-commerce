import React from "react";
import "./Profile.scss";
import UserSection from "./UserSection/UserSection";
import UserInfo from "./UserInfo/UserInfo";
import { commerce } from "../../commerce";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const isLogin = commerce.customer.isLoggedIn();
  const navigate = useNavigate();
  console.log(isLogin);
  React.useEffect(() => {
    isLogin || navigate("/");
  }, [isLogin]);

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
