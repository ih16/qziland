import React from "react";

const Button = (props) => {
  const buttonStyle =
    props.style === "secondary"
      ? "px-6 py-3 border border-primary text-primary-darker rounded shadow-lg hover:shadow-none font-medium transition-shadow duration-300 focus:outline-none"
      : "px-6 py-3 bg-primary text-white rounded shadow-lg hover:shadow-none font-medium transition-shadow duration-300 focus:outline-none";

  return (
    <button onClick={props.onClick} className={buttonStyle}>
      {props.value}
    </button>
  );
};
export default Button;
