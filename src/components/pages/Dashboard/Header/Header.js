import React from "react";
import "./Header.css";

function Header({ user, groceries }) {
  return (
    <div className="header_container">
      <div className="header_greetings">
        <div className="headerImg_container">
          <img
            className="header_img"
            src="https://source.unsplash.com/_cvwXhGqG-o"
            alt="user"
          />
        </div>

        <h2>Welcome , {user.displayName}</h2>
        {groceries.legth === 0 ? (
          <p>Start adding your groceries </p>
        ) : (
          <p>Here are your grocery list </p>
        )}
      </div>
    </div>
  );
}

export default Header;
