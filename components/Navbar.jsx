"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Register", link: "/Register" },
    { name: "Schedule", link: "/#schedule" },
    { name: "Mentors", link: "/#mentors" },
    // { name: "FAQ", link: "/" },
    // { name: "Panelists", link: "/" },
    { name: "Contact", link: "/contact" },
    // { name: "Sponsors", link: "/" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsSticky(true);
        setScrollingDown(scrollTop > window.scrollY);
      } else {
        setIsSticky(false);
        setScrollingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" w-full backdrop-blur-3xl bg-[#0f0913] bg-opacity-70">
        Hacktoberfest'2023
      </div>
      <div
        className={`${
          isSticky
            ? "sticky top-0 h-16 backdrop-blur-3xl bg-[#0f0913] bg-opacity-70 shadow-md"
            : "h-20"
        } left-0  py-2 px-4 flex justify-between items-center w-full transition-all duration-300 `}
      >
        <div className=" flex items-center">
          <Image
            src="/images/hf10iconCrop.png"
            width={51}
            height={45}
            alt="Hf10 Logo"
            style={{ padding: 0 }}
          />
          <div className=" w-[1px] h-5 bg-[#efedef] mx-2"></div>
          <div className="relative w-10 h-10">
            {isSticky ? (
              <div>
                <Image
                  src="/images/LogoCOSCRing.svg"
                  layout="fill"
                  alt="Sticky Logo"
                  style={{
                    transition: "opacity 0.3s ease-in-out",
                    opacity: 1,
                  }}
                />
                <Image
                  src="/images/LogoCOSC.png"
                  layout="fill"
                  alt="Normal Logo"
                  style={{
                    transition: "opacity 0.3s ease-in-out",
                    opacity: 0,
                  }}
                />
              </div>
            ) : (
              <div>
                <Image
                  src="/images/LogoCOSCRing.svg"
                  layout="fill"
                  alt="Sticky Logo"
                  style={{
                    transition: "opacity 0.3s ease-in-out",
                    opacity: 0,
                  }}
                />
                <Image
                  src="/images/LogoCOSC.png"
                  layout="fill"
                  alt="Normal Logo"
                  style={{
                    transition: "opacity 0.3s ease-in-out",
                    opacity: 1,
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className=" md:flex hidden px-4">
          <ul className="md:flex md:items-center">
            {Links.map((link, index) => (
              <li key={index} className="md:mx-2">
                <Link
                  href={link.link}
                  className={`${
                    pathname === link.link
                      ? "text-[#33b6d8]"
                      : "hover:text-[#d2b863] duration-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-[#0f0913] py-2 px-4">
            <ul>
              {Links.map((link, index) => (
                <li key={index} className="my-2 ">
                  <Link
                    href={link.link}
                    className="hover:text-[#d2b863] duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
