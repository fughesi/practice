import React from "react";
import Navbar from "./../../components/navbar/Navbar";
import Inventory from "./../../components/inventory/Inventory";
import "./inventoryPage.css";

export default function inventoryPage() {
  return (
    <main>
      <Navbar />
      <Inventory />
    </main>
  );
}
