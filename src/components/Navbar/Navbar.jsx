import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">IRCTC</div>

      <div className="navlinks">
        <span>Home</span>
        <span>Login</span>
        <span>Register</span>
      </div>
    </div>
  );
};

export default Navbar;
