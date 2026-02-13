import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ fontFamily: "CustomFont, sans-serif" }}>
      <Container className="relative flex items-center bg-white h-16 px-6">
        {/* Left - Logo */}
        <h1 className="text-3xl font-bold">
          ESSENSE<span className="text-pink-500">.</span>
        </h1>

        {/* Center - Nav Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
          <Link to="/">
            <button
              className="relative px-4 py-2 text-xl cursor-pointer
             after:content-[''] 
             after:absolute 
             after:left-0 
             after:-bottom-1 
             after:w-0 
             after:h-[2px] 
             after:bg-black 
             after:transition-all 
             after:duration-300 
             hover:after:w-full"
            >
              Home
            </button>
          </Link>

          <Link to="/about">
            <button
              className="relative px-4 py-2 text-xl cursor-pointer
             after:content-[''] 
             after:absolute 
             after:left-0 
             after:-bottom-1 
             after:w-0 
             after:h-[2px] 
             after:bg-black 
             after:transition-all 
             after:duration-300 
             hover:after:w-full"
            >
              About
            </button>
          </Link>

          <Link to="/contact">
            <button
              className="relative px-4 py-2 text-xl cursor-pointer
             after:content-[''] 
             after:absolute 
             after:left-0 
             after:-bottom-1 
             after:w-0 
             after:h-[2px] 
             after:bg-black 
             after:transition-all 
             after:duration-300 
             hover:after:w-full"
            >
              Contact
            </button>
          </Link>
        </div>
        <div className="flex items-end ml-auto gap-6">
          <Link>
            <button className="w-6 h-6 cursor-pointer scale-90 hover:scale-100 duration-300">
              <img src="/icons/search.png" alt="search" />
            </button>
          </Link>
          <Link>
            <button className="w-6 h-6 cursor-pointer scale-90 hover:scale-100 duration-300">
              <img src="/icons/user.png" alt="user" />
            </button>
          </Link>
          <Link>
            <button className="w-6 h-6 cursor-pointer scale-90 hover:scale-100 duration-300">
              <img src="/icons/cart.png" alt="search" />
            </button>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
