import React from "react";
import "./noname.css";
import noname1 from "../../pictures/noname1.jpeg";
import noname2 from "../../pictures/noname2.jpeg";

const NoName = () => {
  return (
    <section className="noname">
      <div className="content">
        <img alt="noname" className=" img" src={noname1} />
        <div className="item">
          <p className="text1">Lorem ipsum dolor sit amet</p>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam, vel sagittis ipsum. Curabitur eleifend,
            risus id sollicitudin pretium, massa ex tristique velit, ullamcorper
            feugiat dui tellus in quam.
          </p>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam, vel sagittis ipsum. Curabitur eleifend,
            risus id sollicitudin pretium, massa ex tristique velit, ullamcorper
            feugiat dui tellus in quam.
          </p>
        </div>
        <div className="item">
          <p className="text1">Lorem ipsum dolor sit amet</p>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam, vel sagittis ipsum. Curabitur eleifend,
            risus id sollicitudin pretium, massa ex tristique velit, ullamcorper
            feugiat dui tellus in quam.
          </p>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam, vel sagittis ipsum. Curabitur eleifend,
            risus id sollicitudin pretium, massa ex tristique velit, ullamcorper
            feugiat dui tellus in quam.
          </p>
        </div>
        <img alt="noname" className="img" src={noname2} />
      </div>
    </section>
  );
};

export default NoName;
