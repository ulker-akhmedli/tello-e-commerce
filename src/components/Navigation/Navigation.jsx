import React from "react";
import "./Navigation.scss";
import { useLocation, Link } from "react-router-dom";
import Navigat from "../../assets/navigat.svg";

const Navigation = () => {
  const { pathname, key } = useLocation();
  return (
    <div className="navigation">
      <ul>
        <li className="category">
          <Link to={"/"}>Ana səhifə</Link>
        </li>
        <img src={Navigat} alt="icon" />
        {pathname.split("/products/").map((p) => {
          return (
            <li className="slug">
              <Link key={key} to={`/${p}`}>
                {p}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
