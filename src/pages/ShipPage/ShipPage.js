import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { RenderStarshipList } from "../../SwService";
import "./ShipPage.css";
import { withRouter } from "react-router-dom";

class ShipPage extends Component {
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
          <RenderStarshipList
            onSelectedItem={(id) => history.push(`ship/${id}`)}
          />
        </div>
        {/*         <div className="col-md-6">
          <RenderPersonaDetail itemid={selectedItem} />
        </div> */}
      </div>
    );
  }
}

export default withRouter(ShipPage);
