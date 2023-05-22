import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "#00D68F" } : undefined
            }
          >
            Yeni
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "#00D68F" } : undefined
            }
          >
            Apple
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#00D68F" } : undefined
            }
          >
            Samsung
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#00D68F" } : undefined
            }
          >
            Xiaomi
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#00D68F" } : undefined
            }
          >
            Redmi
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#00D68F" } : undefined
            }
          >
            Bütün Brendlər
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#00D68F" } : undefined
            }
          >
            Aksessuarlar
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#00D68F" } : undefined
            }
          >
            Endirimlər
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
