import React from "react";

// this is called destructuring props
const NavBar = ({ totalVal }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h3 style={{ color: "white", marginLeft: 15 }}>
        Shopping Cart
        <span
          className="badge bg-pill bg-secondary"
          style={{ marginLeft: 15, borderRadius: 10 }}
        >
          {totalVal}
        </span>
      </h3>
    </nav>
  );
};

export default NavBar;


