import React from "react";
import Switch from "../switch/switch.component";
import services from "../../data/additional-services.json";
import "./add-services.styles.scss";

const Additional = () => {
  return (
    <div className="additional-page">
      {services.map((service, idx) => (
        <div key={idx} className="additional-flex">
          <Switch />
          <div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Additional;
