import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Container className="flex justify-evenly items-center">
        <Link to="/">
          <button className="cursor-pointer">Home</button>
        </Link>
        <Link to="/about">
          <button className="cursor-pointer">About</button>
        </Link>
        <Link to="/contact">
          <button className="cursor-pointer">Contact</button>
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
