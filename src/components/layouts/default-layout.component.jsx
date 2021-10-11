import React from "react";
import Navigation from "../navigation/navigation.component";
import "./default-layout.styles.scss";

const DefaultLayout = ({ children, title, subtitle }) => {
  return (
    <div className="default">
      <Navigation />
      <div className="layout_wrapper">
        <img src="./images/previous.svg" alt="Go back" className="go-back"/>

        <div>
          <header>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
