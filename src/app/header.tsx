"use client";

import Link from "next/link";
import { useState } from "react";

export const Header = ({ currentPage }: { currentPage: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sections = [
    {
      name: "Início",
      href: "/artes",
    },
    {
      name: "Categorias",
      href: "/colecoes",
    },
  ];

  const CustomLink = ({ page, href }: { page: string; href: string }) => {
    const isActive = page === currentPage;

    const inactiveStyle = "self-center padding-5";
    const activeStyle =
      "py-0.5 px-5 bg-gray-900 self-center text-gray-50 rounded-2xl";

    return (
      <Link className={isActive ? activeStyle : inactiveStyle} href={href}>
        {page}
      </Link>
    );
  };

  const Sections = () => {
    return (
      <div className="flex flex-row w-1/5">
        {sections.map((section) => (
          <div
            className="flex w-full justify-center align-center"
            key={section.name}
          >
            <CustomLink page={section.name} href={section.href} />
          </div>
        ))}
      </div>
    );
  };

  const Logo = () => {
    return (
      <button onClick={toggleMenu}>
        <div className="flex w-1/3 bg-yellow-200 justify-center self-center">
          <a className="font-black text-4xl">MESTRE</a>
          <a className="font-extralight text-4xl ml-1 mr-1">DAS</a>
          <a className="font-black text-4xl">CORES</a>
        </div>
      </button>
    );
  };

  const OtherIcons = () => {
    return <div className="flex w-1/5 bg-yellow-100"></div>;
  };

  return (
    <div className="flex flex-row h-16 bg-gray-100 justify-evenly margin-pc px-28">
      <Sections />
      <Logo />
      <OtherIcons />
      {isMenuOpen && (
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
