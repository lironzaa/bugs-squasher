import React from "react";

const Button = ({ btnClasses, onClick }) => {
  return (
    <button className={btnClasses} onClick={onClick}>Start squashing bugs</button>
  );
};

export default Button;
