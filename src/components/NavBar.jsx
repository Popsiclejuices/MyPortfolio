import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleSCroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    };
    window.addEventListener("scroll", handleSCroll);

    return () => window.removeEventListener("scroll", handleSCroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Kyle Bandola
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contant-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
