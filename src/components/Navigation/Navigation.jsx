import React from "react";
import "./Navigation.scss";
import { useLocation, Link } from "react-router-dom";
import Navigat from "../../assets/navigat.svg";

const Navigation = ({ name, id, products }) => {
  const { pathname } = useLocation();
  // console.log(location);
  return (
    <div className="navigation">
      <ul>
        <li className="category">
          <Link to={"/"}>Ana səhifə</Link>
        </li>
        <img src={Navigat} alt="icon" />
        {pathname.split("/products/").map((p) => {
          return (
            <li key={Math.floor(Math.random() * 100)} className="slug">
              <Link to={`/${p}`}>{p}</Link>
            </li>
          );
        })}
       
      </ul>
    </div>
  );
};

export default Navigation;
