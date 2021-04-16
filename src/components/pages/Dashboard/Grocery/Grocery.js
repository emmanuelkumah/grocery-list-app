import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

function Grocery({ grocery, quantity }) {
  return (
    <div>
      <li>
        {grocery} <span> quantiy:{quantity}</span>
        <div>
          <div>
            <BsCheckCircle className="actionBtn complete" />
            <FiEdit className="actionBtn edit" />
            <AiOutlineDelete className="actionBtn delete" />
          </div>
        </div>
      </li>
    </div>
  );
}

export default Grocery;
