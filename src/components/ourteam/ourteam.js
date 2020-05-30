import React from "react";
import "./ourteam.css";
import ourteam1 from "../../pictures/ourteam1.jpeg";
import ourteam2 from "../../pictures/ourteam2.jpeg";
import ourteam3 from "../../pictures/ourteam3.jpeg";
import OurPartner from "../../components/ourpartner";

const OurTeam = () => {
  return (
    <>
      <section className="ourteam">
        <p className="text">НАША КОМАНДА</p>
        <div className="content">
          <div className="item">
            <img alt="anton" className="img" src={ourteam1} />
            <p className="text1">АНТОН СОБОЛЕВ</p>
            <p className="text2">ПРОГРАММИСТ</p>
          </div>
          <div className="item">
            <img alt="dima" className="img" src={ourteam2} />
            <p className="text1">ДМИТРИЙ ЛЕБЕДЕВ</p>
            <p className="text2">МЕНЕДЖЕР</p>
          </div>
          <div className="item">
            <img alt="elena" className="img" src={ourteam3} />
            <p className="text1">ЕЛЕНА АНАЙЯ</p>
            <p className="text2">ДИЗАЙНЕР</p>
          </div>
        </div>
      </section>
      <OurPartner />
    </>
  );
};

export default OurTeam;
