import React from "react";
import "./trade-info.styles.scss";

const TradeInfo = () => {
  return (
    <div className="trade_page">
      <img src="./images/trade.svg" alt="icon" />
      <div className="trade_grid">
        <div>
          {["Import", "Export"].map((button) => (
            <button className="trade_button">{button}</button>
          ))}
        </div>
        {["From City or Port", "To City or Port"].map((origin, idx) => (
            <div key={idx}>
              <img src="./images/pin.svg" alt="origin" className="trade_img" />
              <input
                type="text"
                placeholder={origin}
                className="trade_input"
                name={origin}
              />
            </div>
          ))}
      </div>
      <div className="details">
        <div className="details_div">
          <img src="./images/date.svg" alt="date icon" />
          <input
            type="text"
            placeholder="Ready Date"
            name="Date"
            className="input "
          />
        </div>
        <select className="input">
          <option>Incotems </option>
        </select>
        <div>
          <input
            placeholder="Total Cargo Value"
            type="text"
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default TradeInfo;
