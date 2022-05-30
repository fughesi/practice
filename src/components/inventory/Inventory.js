import React from "react";
import InventoryJSON from "./../../JSON/inventoryJSON";
import "./Inventory.css";

export default function Inventory() {
  const inventory = InventoryJSON.map((i) => {
    return (
      <div className="inventoryCards">
        <p>{i.quantity} items</p>
        <p>{i.name}</p>
        <img src={i.src} alt={i.alt} />
      </div>
    );
  });
  return <div className="inventory">{inventory}</div>;
}
