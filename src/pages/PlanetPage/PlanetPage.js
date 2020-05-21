import React, { Component } from "react";
import ItemList from "../../components/item-list";
import ItemDetails from "../../components/item-details";
import SwapiService from "../../services/swapi-service";
import Record from "../../components/Record";

import "./PlanetPage.css";

class PlanetPage extends Component {
  swapiService = new SwapiService();
  state = { selectedItem: null };
  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };
  render() {
    const { getAllPlanets, getPlanet, getPlanetImage } = this.swapiService;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectedItem={this.onSelectedItem}
            getData={getAllPlanets}
            renderItem={(item) => `${item.name}`}
          />
        </div>
        <div className="col-md-6">
          <ItemDetails
            selectedItem={this.state.selectedItem}
            getPerson={getPlanet}
            getImage={getPlanetImage}
            getMessage={"Нужно выбрать планету"}
          >
            <Record label={`Population`} field={`population`} />
            <Record label={`Rotation period`} field={`rotationPeriod`} />
            <Record label={`Diametr`} field={`diameter`} />
          </ItemDetails>
        </div>
      </div>
    );
  }
}

export default PlanetPage;
