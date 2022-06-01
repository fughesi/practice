import React from "react";
import "./FooterMobile.css";
import Cart from "./../../resources/icons/Cart";
import CC from "./../../resources/icons/CC";
import Tshirt from "./../../resources/icons/Tshirt";
import Back from "./../../resources/icons/Back";

export default function FooterMobile() {
  return (
    <div className="footer">
      <Back width={25} />
      <Tshirt width={25} />
      <CC width={25} />
      <Cart width={25} />
    </div>
  );
}
