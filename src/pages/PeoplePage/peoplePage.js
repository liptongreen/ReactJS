import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { RenderPersonaList, RenderPersonaDetail } from "../../SwService";
import "./peoplePage.css";
import { withRouter } from "react-router-dom";

class PeoplePage extends Component {
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
          <RenderPersonaList
            onSelectedItem={(id) => history.push(`people/${id}`)}
          />
        </div>
        {/*         <div className="col-md-6">
          <RenderPersonaDetail itemid={selectedItem} />
        </div> */}
      </div>
    );
  }
}

export default withRouter(PeoplePage);
