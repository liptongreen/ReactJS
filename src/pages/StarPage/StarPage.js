import React from "react";
import { withRouter } from "react-router-dom";
import "./StarPage.css";
import { RenderStarshipDetail } from "../../SwService";

const StarPage = (props) => {
  const { match } = props;
  const { id } = match.params;
  return <RenderStarshipDetail itemid={id} />;
};

export default withRouter(StarPage);
