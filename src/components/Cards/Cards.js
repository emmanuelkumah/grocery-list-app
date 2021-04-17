import React from "react";
import { GiPaperPlane } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import "./Cards.css";
import { BiShoppingBag } from "react-icons/bi";

function Cards() {
  return (
    <div className="card-container">
      <div className="card-heading">
        <h1>Why Choose Us </h1>
        <p>
          We provide you the most effective ways to list and organize your
          grocery on a busy day
        </p>
      </div>

      <main className="card-grid">
        <article className="card-content">
          <div className="card-desc">
            <BiShoppingBag className="card-icons" />
            <h2>Plan Your Shopping</h2>
            <p>
              Simply tap on ingredients to add them to your shopping list, or
              plan for an entire week or month with our meal planning calendar.
            </p>
          </div>
        </article>
        <article className="card-content">
          <div className="card-desc">
            <div>
              <GiPaperPlane className="card-icons" />
            </div>
            <h2>Share List</h2>
            <p>
              Stay in sync with family and friends by sharing a list with them.
              Any changes made to a shared list will show up instantly to
              everyone sharing the list.
            </p>
          </div>
        </article>
        <article className="card-content">
          <div className="card-desc">
            <FiUsers className="card-icons" />
            <h2>Organize Your Grocery</h2>
            <p>
              GroceryBag helps you organize your personal recipes and allows you
              to easily add recipes from other sources, like email messages and
              popular websites and blogs.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Cards;
