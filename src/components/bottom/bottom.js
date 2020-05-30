import React from "react";
import "./bottom.css";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <>
      <section className="bottom">
        <div className="flex">
          <nav className="flexbox">
            <p className="text1">НАВИГАЦИЯ</p>
            <ul>
              <li>
                <Link to="/" class="link">
                  <p className="text2">Главная</p>
                </Link>
              </li>
              <li>
                <Link to="/services" class="link">
                  <p className="text2">Услуги</p>
                </Link>
              </li>

              <li>
                <Link to="/aboutus" class="link">
                  <p className="text2">О нас</p>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flexbox">
            <p className="text1">
              КОНТАКТЫ<a name="contacts"></a>
            </p>
            <div className="item">
              <p className="text2">
                <i className="fas fa-map-marker-alt svg"></i>47, Park Town, New
                York, USA
              </p>
            </div>
            <div className="item">
              <p className="text2">
                <i className="fas fa-envelope svg"></i>mailid@domain.com
              </p>
            </div>
            <div className="item">
              <p className="text2">
                <i className="fas fa-phone-alt svg"></i>+ 123 (45) 678-90-00
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright">
        <p className="text">Все права защищены, 2020</p>
      </section>
    </>
  );
};

export default Bottom;
