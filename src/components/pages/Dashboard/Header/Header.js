import React from "react";
import "./Header.css";

function Header({ user }) {
  return (
    <div className="header_container">
      <div className="header_greetings">
        <h2>Welcome , {user.displayName}</h2>
        <p>What will you like to buy today</p>
      </div>
    </div>
  );
}

export default Header;
