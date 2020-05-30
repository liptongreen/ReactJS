import React from "react";
import Header from "../header";
import Main from "../main";
import Services from "../services";
import "./app.css";
import OurPartner from "../ourpartner";
import OurTeam from "../ourteam";
import NoName from "../noname";
import Bottom from "../bottom";
import Team from "../team";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/services" component={Services} />
          <Route path="/aboutus" component={OurTeam} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
        <Bottom />
      </Router>
    </div>
  );
};

export default App;
