import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

function Grocery({ grocery, id, removeItem, completeItem, isComplete }) {
  return (
    <div>
      <li className={isComplete ? "mark_complete" : null}>
        {grocery}
        <div>
          <div>
            <BsCheckCircle
              className="actionBtn complete"
              onClick={() => completeItem(id)}
            />
            <FiEdit className="actionBtn edit" />
            <AiOutlineDelete
              className="actionBtn delete"
              onClick={() => removeItem(id)}
            />
          </div>
        </div>
      </li>
    </div>
  );
}

export default Grocery;
