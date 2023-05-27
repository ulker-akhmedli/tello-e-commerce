import React from "react";
import "./Navigation.scss";
import { useLocation, Link } from "react-router-dom";
import Navigat from "../../assets/navigat.svg";

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to={"/"}>Ana səhifə</Link>
        </li>
        <li>
          <img src={Navigat} alt="icon" />
          <Link to={"/products"}>Apple</Link>
        </li>
      </ul>
      {/* {pathname.split("/").map((p) => {
        return (
          <Link key={Math.random() * 1000} to={`/${p}`}>
            {p}
            
          </Link>
        );
      })} */}
    </div>
  );
};

export default Navigation;
