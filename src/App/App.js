import React from "react";
import "./App.css";
import { connect } from "react-redux";
import s from "./App.module.css";
import { inc, dec, rnd } from "../Actions";

const App = (props) => {
  console.log(props);
  return (
    <div className={s.box}>
      <div className="block">
        <span id="counter" className={s.block_text}>
          {props.counter}
        </span>
      </div>
      <div className="buttons">
        <button
          id="plus"
          className="btn btn-plus"
          onClick={() => {
            props.inc(1);
          }}
        >
          <img className="img-fluid" src="./plus.svg" alt="plus" />
        </button>
        <button
          id="minus"
          className="btn btn-minus"
          onClick={() => {
            props.dec(1);
          }}
        >
          <img className="img-fluid" src="./minus.svg" alt="minus" />
        </button>
        <button
          id="reset"
          className="btn btn-reset"
          onClick={() => {
            const rndNum = Math.float(Math.random * 10 + 1);
            props.rnd(rndNum);
          }}
        >
          <img className="img-fluid" src="./Vector.svg" alt="Vector" />
          <img className="img-fluid" src="./Vector-1.svg" alt="Vector-1" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  inc,
  dec,
  rnd,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
