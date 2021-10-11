import React from "react";

import "./card.styles.scss";

const Card = ({ children, title }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
