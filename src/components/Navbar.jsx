import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Container className="flex justify-center gap-4 items-center bg-white h-16 m-4 border-2 border-black">
        <Link to="/">
          <button className="cursor-pointer border-2 border-black p-2 rounded-2xl hover:bg-black hover:text-white hover:border-2 hover:border-white duration-300 ease-out ">Home</button>
        </Link>
        <Link to="/about">
          <button className="cursor-pointer border-2 border-black p-2 rounded-2xl  hover:bg-black hover:text-white hover:border-2 hover:border-white duration-300 ease-out ">About</button>
        </Link>
        <Link to="/contact">
          <button className="cursor-pointer border-2 border-black p-2 rounded-2xl  hover:bg-black hover:text-white hover:border-2 hover:border-white duration-300 ease-out ">Contact</button>
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
