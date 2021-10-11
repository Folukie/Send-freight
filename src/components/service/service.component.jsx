import React, { useState } from "react";
import services from "../../data/service.json";
import "./service.styles.scss";

const Service = ({ value }) => {
  const [booking, setBooking] = useState({
    serviceType: "",
  });

  console.log(value);

  return (
    <div className="service_page_grid">
      {services.map((service) => (
        <div
          key={service.id}
          className={`service_page_box ${service === value ? "active" : ""}`}
          value={booking.serviceType}
        >
          <h4>{service.title}</h4>
          <img className="icon" src={service.image} alt="icon"></img>
        </div>
      ))}
    </div>
  );
};

export default Service;
