import React from "react";
import "./Header.scss";
import lupa from "../../assets/search.svg";
import login from "../../assets/login.svg";
import like from "../../assets/like.svg";
import basket from "../../assets/basket.svg";
import Nav from "./Nav/Nav";
import { useState } from "react";
import HamburgerMenu from "../../assets/menu.svg";
import Logo from "../Logo/Logo";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-router-dom";
import { getCategoriesName } from "../../store/actions/categories";
import { useParams } from "react-router-dom";
import { commerce } from "../../commerce";
const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [lastSearch, setLastSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(null);
  const { slug } = useParams();
  const isLogin = commerce.customer.isLoggedIn();
  // console.log(isLogin);
  const [user, setUser] = React.useState({});
  const params = {
    depth: "2",
  };
  React.useEffect(() => {
    isLogin && commerce.customer.about().then((customer) => setUser(customer));
  }, [isLogin]);

  React.useEffect(() => {
    getCategoriesName(setLoading, setCategories, params);
  }, [slug, params]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    setDropdownVisible(true);
  };
  const handleOutsideClick = () => {
    setDropdownVisible(false);
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

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const setDropdownOpen = () => {
    setMobileNavbar(true);
  };

  return (
    <header>
      <div className="headerline">
        <img
          className="hamburger"
          src={HamburgerMenu}
          alt="HamburgerMenu"
          onClick={setDropdownOpen}
        />
        <Logo />
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
          {dropdownVisible && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              onClick={handleOutsideClick}
            />
          )}
        </form>

        <div className="shopping">
          <Link to={"/login"}>
            {user.firstname || <img src={login} alt="login" />}
          </Link>
          {/* { user.firstname ? (
          <Link to={"/user-profile/user-info"} className="user">
            {user && (
              <h6 className="user-firstname">{user.firstname}</h6>
            )}
          </Link>
        ) : (
          <Link to={"/login"}>
           <img src={login} alt="login" />
          </Link>
        )} */}
          <Link to={"profile"}>
            <img src={like} alt="heart" />
          </Link>
          <Link to={"/basket"}>
            <img src={basket} alt="basket" />
          </Link>
          <div className="circle">
            <span>0</span>
          </div>
        </div>
      </div>
      <Nav categories={categories} loading={loading} />
      <MobileNav
        categories={categories}
        loading={loading}
        setMobileNavbar={setMobileNavbar}
        mobileNavbar={mobileNavbar}
      />
    </header>
  );
};

export default Header;
