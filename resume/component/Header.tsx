"use client";
import { CSSProperties, useEffect, useState } from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleLinkClick = (index: any) => {
    setActiveLink(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headerStyle: CSSProperties = {
    zIndex: 900,
    position: "fixed",
    top:"5%",
    left: windowWidth < 1290 ? "0%" : "25%",
    width: windowWidth < 1290 ? "100%" : "50%",
    background: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: windowWidth < 1290 ? "0px" : "100px",
  };

  return (
    <header style={headerStyle}>
      {/* Header Background */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav
          style={{
            position: "relative",
            width: "100%",
            maxHeight: "2%",
            top: "0%",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {/* List of Links */}
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10%",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {links.map((link, index) => (
              // Individual Link
              <motion.li
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {/* Link Content */}
                <a
                  href={link.hash}
                  onClick={() => {
                    handleLinkClick(index);
                  }}
                  style={{
                    textDecoration: "none",
                    color: activeLink === index ? "black" : "white",
                    fontSize: "0.9rem",
                    fontWeight: activeLink === index ? "bold" : "normal",
                    transition:
                      "color 0.3s ease-in-out, font-size 0.3s ease-in-out",
                  }}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* Navigation */}
    </header>
  );
};

export default Header;
