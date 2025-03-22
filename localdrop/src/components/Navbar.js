import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaMapMarkerAlt, FaUser } from "react-icons/fa"; // Icone

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><FaHome /></Link>
      <Link to="/mappa"><FaMapMarkerAlt /></Link>
      <Link to="/carrello"><FaShoppingCart /></Link>
      <Link to="/profilo"><FaUser /></Link>
    </nav>
  );
};

export default Navbar;
