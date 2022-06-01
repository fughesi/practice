import { nanoid } from "nanoid";
import React from "react";
import InventoryJSON from "./../../JSON/inventoryJSON";
import "./Inventory.css";

export default function Inventory() {
  const inventory = InventoryJSON.map((i) => {
    return (
      <div className="inventoryCards">
        <img src={i.src} alt={i.alt} key={nanoid}/>
        {/* <p>{i.name}</p>
        <p>
          <span className="quantity">{i.quantity}</span> items
        </p> */}
      </div>
    );
  });
  return <div className="inventory">{inventory}</div>;
}
