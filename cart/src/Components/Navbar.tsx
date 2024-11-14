import React from "react";
import { FaPage4 } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="w-full h-20 border shadow-lg flex justify-between  px-4 items-center ">
      <div className="flex  justify-center items-center">
        <FaPage4 className="text-4xl" />
        <span>@Hamza</span>
      </div>
      <ul className="flex justify-center items-center gap-4">
        <li>Mobile</li>
        <li>Tablet</li>
        <li>Laptop</li>
      </ul>
      <div>
        <FaShoppingCart className="text-4xl cursor-pointer" />
      </div>
    </div>
  );
}
