import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { RenderStarshipList, RenderStarshipDetail } from "../../SwService";
import "./ShipPage.css";

class ShipPage extends Component {
  swapiService = new SwapiService();
  state = { selectedItem: null };
  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };
  render() {
    const { selectedItem } = this.state;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <RenderStarshipList onSelectedItem={this.onSelectedItem} />
        </div>
        <div className="col-md-6">
          <RenderStarshipDetail itemid={selectedItem} />
        </div>
      </div>
    );
  }
}
export default ShipPage;
