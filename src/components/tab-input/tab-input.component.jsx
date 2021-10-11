import React from "react";
import "./tab-input.styles.scss";

const TabInput = ({ name, options, selectedValue, onChange }) => {
  
  return (
    <div className="tab">
      {options.map((item, idx) => (
        <div key={idx} className={`tab_item ${item === selectedValue ? "active" : ""}`}>
         
          <input
            type="radio"
            id={name + "-" + idx}
            name={name}
            value={item}
            onChange={onChange}
            hidden
          />
          <label htmlFor={name + "-" + idx} className="tab_link">
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TabInput;
