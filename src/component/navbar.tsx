import React from "react";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <p className="navbar_logo">
        Recipe<p className="navbar_logoap">App</p>
      </p>

      <ul className="navbar_textbar">
        <p>Home</p>
        <p>Vegetarianos</p>
        <p>Platos Principales</p>
        <p>Tortas</p>
        <p>Comida Rápida</p>
        <p>Menú Niños</p>
        <p>Sopas</p>
      </ul>
    </div>
  );
};

export default Navbar;
