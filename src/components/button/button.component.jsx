import React from "react";
import "./button.styles.scss";

export const PrimaryButton = ({ text }) => {
  return <button className="btn_primary btn">{text}</button>;
};
export const SuccessButton = ({ text }) => {
  return <button className="btn_success btn">{text}</button>;
};
