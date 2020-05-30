import React from "react";
import "./ourpartner.css";
import ourpartner from "../../pictures/ourpartner.jpeg";
import { Link } from "react-router-dom";

const OurPartner = () => {
  return (
    <section className="ourpartner">
      <div className="content">
        <img alt="ourpartner" className="img" src={ourpartner} />

        <div className="text">
          <p className="text1">ЧЕМ МЫ ЗАНИМАЕМСЯ</p>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam, vel sagittis ipsum. Curabitur eleifend,
            risus id sollicitudin pretium, massa ex tristique velit, ullamcorper
            feugiat
          </p>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam, vel sagittis ipsum. Curabitur eleifend,
            risus id sollicitudin pretium, massa ex tristique velit, ullamcorper
            feugiat
          </p>

          <Link to="/services" className="s">
            <button className="bttn">УЗНАТЬ БОЛЬШЕ</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
