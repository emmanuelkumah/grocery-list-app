import React, { useState } from "react";
import Header from "./Header/Header";
import "./Dashboard.css";
import GroceryList from "./Grocery/GroceryList";

function Dashboard() {
  const [groceries, SetGroceries] = useState([
    { id: 1, item: "Milk", quantity: 20 },
    { id: 2, item: "Vegetable", quantity: 20 },
    { id: 3, item: "Cereals", quantity: 5 },
  ]);
  return (
    <main>
      <section className="dashboard_container">
        <Header />
        <GroceryList groceries={groceries} />
      </section>
    </main>
  );
}

export default Dashboard;
