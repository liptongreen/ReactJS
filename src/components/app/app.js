import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorComponent from "../error-component";

import PeoplePage from "../../pages/PeoplePage";
import { SwapiProvider } from "../../context";
import SwapiService from "../../services/swapi-service";
import "./app.css";
import PlanetPage from "../../pages/PlanetPage";
import ShipPage from "../../pages/ShipPage";

const swapiService = new SwapiService();

class App extends React.Component {
  state = {
    showRandomPlanet: true,
    error: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch(error) {
    console.error(error);
    this.setState({ error: true });
  }
  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    if (this.state.error) {
      return <ErrorComponent />;
    }
    return (
      <SwapiProvider value={swapiService}>
        <div>
          <Header />
          {planet}

          <button
            className="toggle-planet btn btn-warning btn-lg mb-4"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />

          <PeoplePage />
          <PlanetPage />

          <ShipPage />
        </div>
      </SwapiProvider>
    );
  }
}

export default App;
