import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="mylogo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Keith <span className="sm:block hidden"> | 3D Generalist </span>{" "}
          </p>
        </Link>

        {/* <p className="text-red-500">
          Creating 3d Renders for product visualizations
        </p> */}
      </div>
    </nav>
  );
};

export default Navbar;
