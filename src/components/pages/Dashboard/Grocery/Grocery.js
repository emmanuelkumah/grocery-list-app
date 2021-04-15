import React from "react";

function Grocery({ grocery, quantity }) {
  return (
    <div>
      <li>
        {grocery} <span> quantiy:{quantity}</span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
}

export default Grocery;
