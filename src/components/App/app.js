import React from "react";

import Header from "../Header";
import InputsFields from "../InputsFields";
import ErrorComponent from "../ErrorComponent";
import Service from "../../service/service";

import "./app.css";

class App extends React.Component {
  state = {
    postError: [],
  };

  service = new Service();

  postError = (error) => {
    const listError = [];
    for (let key in error) {
      const arrError = error[key];
      for (let i in arrError) {
        listError.push(`${i} ${arrError[i]}`);
        this.setState({ postError: listError });
      }
    }
  };
  postAnswer = (error) => {
    if (error === undefined) {
      alert("Вы зарегестрировались");
    } else {
      this.postError(error);
    }
  };
  onSubmit = (obj) => {
    this.service.requestData(obj).then((res) => this.postAnswer(res));
  };

  render() {
    const getItem = this.state.postError;
    return (
      <div className="app">
        <Header />
        <ErrorComponent getItem={getItem} />
        <InputsFields onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
