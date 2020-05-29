import React from "react";
import { withRouter } from "react-router-dom";
import "./PlanPage.css";
import { RenderPlanetDetail } from "../../SwService";

const PlanPage = (props) => {
  const { match } = props;
  const { id } = match.params;
  return <RenderPlanetDetail itemid={id} />;
};

export default withRouter(PlanPage);
