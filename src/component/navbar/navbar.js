import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

const Navbar = () => {
  const curUrl = window.location.href;
  return (
    <nav>
      <div className="nav_here">
        <div className="logo_container">
          <h1 className="logo_here">
            Gadget <span className="diff_color">Mart</span>
          </h1>
        </div>
        <div className="nav_search">
          <form>
            <GoSearch className="search_icon" />
            <input
              type={"search"}
              id="homeSearch"
              name="homeSearch"
              placeholder="Search your product here"
            />
          </form>
        </div>
        <div className="nav_back">
          <div className="nav_back_child">
            <a href={`${curUrl}`}>
              <IoPersonOutline /> &nbsp; My account
            </a>
          </div>
          <div className="nav_back_child">
            <a href={`${curUrl}`}>
              <span>0</span> <BsCart /> &nbsp; My Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
