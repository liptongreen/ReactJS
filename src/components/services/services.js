import React from "react";
import "./services.css";
import services1 from "../../pictures/services1.jpeg";
import services2 from "../../pictures/services2.jpeg";
import services3 from "../../pictures/services3.jpeg";
import NoName from "../noname";
import Team from "../team";

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="center">
          <p className="services__text">НАШИ УСЛУГИ</p>
          <div className="services__flex">
            <div className="services__flex__box">
              <img
                alt="services1"
                src={services1}
                className="services__flex__box__img"
              />
              <p className="services__flex__box__text">КОНСАЛТИНГ</p>
              <p className="services__flex__box__text1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pharetra efficitur diam, vel sagittis ipsum.
              </p>
            </div>
            <div className="services__flex__box">
              <img
                alt="services2"
                src={services2}
                className="services__flex__box__img"
              />

              <p className="services__flex__box__text">ПРОТОТИПИРОВАНИЕ</p>
              <p className="services__flex__box__text1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pharetra efficitur diam, vel sagittis ipsum.
              </p>
            </div>
            <div className="services__flex__box">
              <img
                alt="services3"
                src={services3}
                className="services__flex__box__img"
              />
              <p className="services__flex__box__text">АНАЛИТИКА</p>
              <p className="services__flex__box__text1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pharetra efficitur diam, vel sagittis ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <NoName />
    </>
  );
};

export default Services;
