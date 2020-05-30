import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header_box">
        <div className="logo">
          <Link to="/" className="header__text__logo">
            ЛОГОТИП
          </Link>
        </div>
        <div className="header__text__right">
          <ul className="header__text">
            <Link to="/" className="header__text__main">
              ГЛАВНАЯ
            </Link>
            <Link to="/services" className="header__text__services">
              УСЛУГИ
            </Link>
            <Link to="/aboutus" className="header__text__aboutUs">
              О НАС
            </Link>
            <a href="#contacts" className="header__text__contacts">
              КОНТАКТЫ
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
