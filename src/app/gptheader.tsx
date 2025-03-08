"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

import Paleta from "./paleta.svg";
import { ReactSVG } from "react-svg";

export const GPTHeader = ({ currentPage }: { currentPage: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const CustomLink = ({ page, href }: { page: string; href: string }) => {
    const isActive = page === currentPage;

    const inactiveStyle = "self-center padding-5";
    const activeStyle = "py-0.5 px-3 navbarColor self-center rounded-2xl";

    return (
      <Link className={isActive ? activeStyle : inactiveStyle} href={href}>
        {page}
      </Link>
    );
  };

  return (
    <header className="flex flex-col py-4 text-zinc-950 bg-gray-50 margin-pc">
      <div className="flex w-full justify-center">
        <div className="flex flex-row w-full justify-evenly">
          <div className="flex w-1/4 justify-center items-center md:hidden">
            <a></a>
          </div>
          <div className="hidden md:flex w-1/3 justify-evenly items-center">
            <CustomLink href="/" page="Início" />
            <CustomLink href="/colecoes" page="Categorias" />
            <CustomLink href="/biografia" page="Contato" />
          </div>
          <div className="flex justify-center w-3/4 md:w-1/3 items-center">
            {/* <a className="font-black text-2xl md:text-4xl">MESTRE</a>
            <a className="font-extralight text-2xl md:text-4xl ml-0.5 mr-0.5">
              DAS
            </a>
            <a className="font-black text-2xl md:text-4xl">CORES</a> */}
            <Link href={"/"}>
              <img src="https://i.imgur.com/0bPnlop.png"></img>
            </Link>
          </div>
          <div className="hidden md:flex w-1/3 justify-center items-center hidden md:block ">
            <a>♡</a>
            <a>♡</a>
            <a>♡</a>
          </div>
          <button
            className="flex w-1/4 justify-center items-center md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
            <li>
              <Link href="/about">Início</Link>
            </li>
            <li>
              <Link href="/services">Categorias</Link>
            </li>
            <li>
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default GPTHeader;
