import React from "react";
import Logo from './../../resources/logos/MonkeyHead'
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div >
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      <h3>FUGHESI ink</h3>
      <div className="logo"><Logo width={35} ButtonsButtons/></div>
    </div>
  );
}
