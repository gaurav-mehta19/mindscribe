"use client";
import { useState } from "react";
import LaunchMenu from "./menus/LaunchMenu";
import Link from "next/link";
import CommunityMenu from "./menus/CommunityMenu";
import AboutMenu from "./menus/AboutMenu";

const Menu = () => {
  const [showLaunches, setShowLaunches] = useState(false);
  const [communityMenu, setShowCommunity] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  return (
    <div className="hidden lg:flex items-center relative">
      <div className="space-x-6 text-gray-600 text-sm flex items-center">
        <div
          onMouseEnter={() => setShowLaunches(true)}
          onMouseLeave={() => setShowLaunches(false)}
          className="hover:text-[#ED9B40] py-4 cursor-pointer"
        >
          Launches {showLaunches && <LaunchMenu />}
        </div>

        <Link href={"/categories"} className="hover:text-[#ED9B40]">
          Categories
        </Link>

        <div
          onMouseEnter={() => setShowCommunity(true)}
          onMouseLeave={() => setShowCommunity(false)}
          className="hover:text-[#ED9B40] py-4 cursor-pointer"
        >
          Community {communityMenu && <CommunityMenu />}
        </div>

        <div
          onMouseEnter={() => setShowAboutMenu(true)}
          onMouseLeave={() => setShowAboutMenu(false)}
          className="hover:text-[#ED9B40] py-4 cursor-pointer"
        >
          About {showAboutMenu && <AboutMenu />}
        </div>
      </div>
    </div>
  );
};

export default Menu;
