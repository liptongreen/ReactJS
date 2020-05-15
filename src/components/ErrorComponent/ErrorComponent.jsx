import React from "react";

const ErrorComponent = (props) => {
  const { getItem } = props;
  return (
    <ul className="list-error">
      {getItem.map((errorItem) => {
        return <li>{errorItem}</li>;
      })}
    </ul>
  );
};

export default ErrorComponent;
