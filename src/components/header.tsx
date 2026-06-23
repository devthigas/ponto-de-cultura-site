"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/movimento", label: "Nosso Movimento" },
    { href: "/projetos", label: "Projetos" },
    { href: "/trupe", label: "Nossa Trupe" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-premium border-line"
          : "bg-white/80 backdrop-blur-sm border-line/40"
      }`}
    >
      <div className="container mx-auto px-4 max-w-[1140px] flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Logotipo Ponto de Cultura Kombinação"
            width={36}
            height={45}
            priority
            className="w-auto h-[45px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center list-none">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-title font-semibold relative py-2 transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-ink-soft hover:text-primary"
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-primary after:rounded-full after:transition-all after:duration-300 ${
                      isActive ? "after:width-full after:w-full" : "after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger Toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden cursor-pointer flex flex-col gap-1.5 p-2 bg-none border-none outline-none"
          aria-label="Abrir menu de navegação"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-7 h-[3px] bg-ink rounded-full transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-[9px]" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-ink rounded-full transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-ink rounded-full transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-[9px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white transition-all duration-300 md:hidden border-t border-line shadow-premium flex flex-col px-6 py-10 gap-6 ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col gap-6 list-none p-0 m-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-title font-bold text-lg block py-2 ${
                    isActive ? "text-primary" : "text-ink-soft hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
