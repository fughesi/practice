import React from "react";
import Navbar from "./../../components/navbar/Navbar";
import Inventory from "./../../components/inventory/Inventory";
import FooterMobile from "./../../components/footerMobile/FooterMobile"
import "./inventoryPage.css";

export default function inventoryPage() {
  return (
    <main className="inventoryPageMain">
      <Navbar />
      <Inventory />
      <FooterMobile />
    </main>
  );
}
