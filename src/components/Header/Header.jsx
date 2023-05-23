import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import lupa from "../../assets/search.svg";
import login from "../../assets/login.svg";
import like from "../../assets/like.svg";
import basket from "../../assets/basket.svg";
import Nav from "./Nav/Nav";
import { useState } from "react";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [lastSearch, setLastSearch] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    setDropdownVisible(true);
  };

  const handleDropdownItemClick = (item) => {
    setInputValue(item);
    setLastSearch(item);
    setDropdownVisible(false);
  };
  const handleClearClick = () => {
    setInputValue("");
    setLastSearch("");
  };

  return (
    <header>
      <div className="headerline">
        <div className="logo">
          <img src={logo} alt="tello" />
          <h2>Tello</h2>
        </div>
        <form>
          <img src={lupa} alt="search" />
          <input
            type="text"
            placeholder="Axtarış..."
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
          {dropdownVisible && (
            <div className="inputDropdown">
              <div className="last-search">
                Son axtarışlar
                <span onClick={handleClearClick}>Təmizlə</span>
              </div>
              <div className="search">
                <button onClick={() => handleDropdownItemClick("Option 1")}>
                  Option 1
                </button>
                <button onClick={() => handleDropdownItemClick("Option 2")}>
                  Option 2
                </button>
                <button onClick={() => handleDropdownItemClick("Option 3")}>
                  Option 3
                </button>
              </div>
            </div>
          )}
        </form>

        <div className="shopping">
          <img src={login} alt="" />
          <img src={like} alt="" />
          <img src={basket} alt="" />
          <div className="circle">
            <span>0</span>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
