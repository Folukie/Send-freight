import React, { useState } from "react";
import Additional from "../add-services/add-services.component";
import Card from "../card/card.component";
import Service from "../service/service.component";
import TradeInfo from "../trade-info/trade-info.component";
import TabInput from "../tab-input/tab-input.component";

import "./booking-form.styles.scss";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    cargoType: "Total Dimensions",
  });

  const { service, cargoType } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="booking-form">
       
      <Card title="Select a Service">
        <Service />
      </Card>
      <Card>
        <TradeInfo />
      </Card>
      <Card title="Cargo Details">
        <TabInput
          options={["Total Dimensions", "Package Details"]}
          name={"cargoType"}
          onChange={handleChange}
          selectedValue={cargoType}
        />

        {cargoType === "Total Dimensions" ? (
          <div className="cargo_input">
            {[
              { label: "Total Volume", name: "volume", placeholder: "cbm" },
              { label: "Total Weight", name: "weight", placeholder: "kg" },
            ].map((item) => (
              <div>
                <input placeholder={item.placeholder} name={item.name} />
                <label>{item.label}</label>
              </div>
            ))}
          </div>
        ) : (
          <div className="cargo_input">
            <h3>Not available</h3>
          </div>
        )}
      </Card>
      <Card title="Additional Services">
        <Additional />
      </Card>
    </form>
  );
};

export default BookingForm;
