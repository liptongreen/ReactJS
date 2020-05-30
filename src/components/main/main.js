import React from "react";
import "./main.css";

const Main = () => {
  const href = "bottom";
  return (
    <section className="item1">
      <div className="item1__img">
        <div className="item1__back">
          <div className="text">
            <div className="item1__text1">
              КОНСАЛТИНГОВАЯ И ТЕХНОЛОГИЧЕСКАЯ КОМПАНИЯ
            </div>
            <div className="item1__text2">
              Мы фокусируемся на пердовых технологических продуктах и платформах
            </div>
            <div className="item1__button">
              <a href="#contacts" class="nostyle">
                <button className="item1__button__border">
                  СВЯЗАТЬСЯ С НАМИ
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
