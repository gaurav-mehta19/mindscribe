import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import SignInButton from "./SignInButton";

const Navbar = () => {
  return (
    <div className="border-b py-2 md:py-0 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <Search />
        </div>
        <div className="absolute right-1/2 translate-x-1/2 transform z-10">
          <Menu />
        </div>

        <div>
          <SignInButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
