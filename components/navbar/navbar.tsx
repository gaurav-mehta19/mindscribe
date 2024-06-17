import React from "react";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="border-b py-2 md:py-0 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
