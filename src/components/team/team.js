import React from "react";
import "./team.css";
import team1 from "../../pictures/team1.jpeg";
import team2 from "../../pictures/team2.jpeg";

const Team = () => {
  return (
    <>
      <section className="team">
        <div className="team__box">
          <img alt="team2" src={team1} className="team__box__img" />
          <div className="team__box__text">
            <p className="text1">КИРИЛЛ ВАСИЛЬЕВ</p>
            <p className="text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pharetra efficitur diam, vel sagittis ipsum. Curabitur eleifend.
            </p>
          </div>
        </div>
        <div className="team__box">
          <img alt="team2" src={team2} className="team__box__img" />
          <div className="team__box__text">
            <p className="text1">МАКСИМ БАРСОВ</p>
            <p className="text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pharetra efficitur diam, vel sagittis ipsum. Curabitur eleifend.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
