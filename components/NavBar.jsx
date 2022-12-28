import React from "react";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

const NavBar = () => {
  const navLinks = [
    { name: "Jewelry & Accessories", link: "/jewelry-accessories" },
    { name: "Clothing & Shoes", link: "/clothing-shoes" },
    { name: "Home & Living", link: "/home-living" },
    { name: "Wedding & Party", link: "/wedding-party" },
    { name: "Toys & Entertainment", link: "/toys-entertainment" },
    { name: "Art & Collectibles", link: "/art-collectibles" },
    { name: "Craft Supplies & Tools", link: "/craft-supplies-tools" },
  ];

  return (
    <div className="bg-[#F1F1F1]">
      <div className="nav-top mt-4 flex justify-end">
        <div className="nav-user flex items-center">
          <div className="flex items-center p-4 mr-14">
            <Link href={`/`} className="mr-2 flex items-center">
              <AiOutlineUser size={20} className="mr-2" />
              <span className="font-[-'Poppins'] font-medium">Account</span>
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <AiOutlineShopping size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <div className="nav-bottom flex justify-between flex-wrap">
          {navLinks.map((link) => (
            <span key={link.name} className="">
              <Link
                href={link.link}
                className="font-[-'Poppins'] text-sm font-medium"
              >
                {link.name}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
