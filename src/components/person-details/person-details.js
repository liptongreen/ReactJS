import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import "./person-details.css";
import ErrorButton from "../error-button";
import ErrorComponent from "../error-component";
import Spinner from "../spinner";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = {
    item: null,
    error: false,
    loading: true,
  };
  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.swapiService.getPerson(this.props.selectedItem).then((item) => {
        this.setState({ item: item, loading: false });
      });
    }
  }
  componentDidCatch() {
    this.setState({ error: true });
  }
  render() {
    const { error, item, loading } = this.state;
    const loadingMes = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorComponent /> : null;
    const content = !(loading || error) ? <ViewItem item={item} /> : null;
    if (error) {
      return <ErrorComponent />;
    }

    return (
      <>
        {loadingMes}

        {errorMessage}
        {content}
      </>
    );
  }
}

const ViewItem = ({ item }) => {
  const { id, name, gender, birtYear, eyeColor } = item;
  return (
    <div className="person-details card">
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birtYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
      <ErrorButton />
    </div>
  );
};
