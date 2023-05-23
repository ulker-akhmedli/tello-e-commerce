import React from "react";
import "./Dropdown.scss";

import { Link } from "react-router-dom";
const DropDown = () => {
  return (
    <div className="dropDown">
      <ul>
        <li>
          <Link>Alt Başlıq</Link>
        </li>
        <li>
          <Link>Alt Başlıq</Link>
        </li>
         <li>
          <Link>Alt Başlıq</Link>
        </li>
        <li>
          <Link>Alt Başlıq</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
