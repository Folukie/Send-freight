import React from "react";
import "./navigation.styles.scss";
import { PrimaryButton, SuccessButton } from "../button/button.component";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav_right">
        <img src="./images/logo.svg" alt="logo" />
        <input type="search" placeholder="Search" />
      </div>
      <div className="nav_left">
          <PrimaryButton text="request quote"/>
          <SuccessButton text="book shipment"/>

      </div>
    </div>
  );
};

export default Navigation;
