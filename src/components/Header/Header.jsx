import React from "react";
import "./Header.scss";
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
import Search from "./Search/Search";
const Header = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(null);
  const { slug } = useParams();
  const isLogin = commerce.customer.isLoggedIn();
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

  let navBar;
  if (categories.length > 0 && !loading) {
    navBar = categories.map((el) => {
      return {
        id: el.id,
        name: el.name,
        slug: el.slug,
        children: el.children.map((el) => {
          return {
            id: el.id,
            name: el.name,
            slug: el.slug,
          };
        }),
      };
    });
    localStorage.setItem("categories", JSON.stringify(navBar));
  } else if (JSON.parse(localStorage.getItem("categories"))?.length > 0) {
    navBar = JSON.parse(localStorage.getItem("categories"));
  }
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
        <Search />

        <div className="shopping">
          {user.firstname ? (
            <Link to={"/user-profile/user-info"} className="user">
              {user && <h3 className="user-Name">{user.firstname}</h3>}
            </Link>
          ) : (
            <Link to={"/login"}>
              <img src={login} alt="login" />
            </Link>
          )}

          <Link to={"/basket"}>
            <img src={basket} alt="basket" />
          </Link>
          <div className="circle">
            <span>0</span>
          </div>
        </div>
      </div>
      <Nav categories={categories} loading={loading} navBar={navBar} />
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
