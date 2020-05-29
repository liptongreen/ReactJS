import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { RenderPlanetList } from "../../SwService";
import "./PlanetPage.css";
import { withRouter } from "react-router-dom";

class PlanetPage extends Component {
  swapiService = new SwapiService();
  state = { selectedItem: null };
  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };
  render() {
    const { history } = this.props;
    /* const { selectedItem } = this.state; */
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <RenderPlanetList
            onSelectedItem={(id) => history.push(`planet/${id}`)}
          />
        </div>
        {/*         <div className="col-md-6">
          <RenderPersonaDetail itemid={selectedItem} />
        </div> */}
      </div>
    );
  }
}

export default withRouter(PlanetPage);
