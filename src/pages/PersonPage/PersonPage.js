import React from "react";
import { withRouter } from "react-router-dom";
import "./PersonPage.css";
import { RenderPersonaDetail } from "../../SwService";

const PersonPage = (props) => {
  const { match } = props;
  const { id } = match.params;
  return <RenderPersonaDetail itemid={id} />;
};

export default withRouter(PersonPage);
