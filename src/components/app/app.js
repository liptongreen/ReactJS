import React from "react";
import ItemList from "../item-list";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorComponent from "../error-component";
import PersonDetails from "../person-details";

import "./app.css";

class App extends React.Component {
  state = {
    showRandomPlanet: true,
    error: false,
    selectedItem: null,
  };
  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
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

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onSelectedItem={this.onSelectedItem} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedItem={this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
