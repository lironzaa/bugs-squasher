import React from "react";

const Bug = ({ position, onClick }) => {
  return (
    <div
      className="bug"
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
      }}
      onClick={onClick}
    />
  );
};

export default Bug;
